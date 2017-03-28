package com.oos.controller;

import java.io.File;
import java.util.UUID;

import javax.servlet.ServletContext;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.oos.framwork.BaseController;
import com.oos.model.Dish;
import com.oos.model.Member;
import com.oos.model.Shop;
import com.oos.model.ShopFavorite;
import com.oos.service.DishService;
import com.oos.service.MemberService;
import com.oos.service.ShopService;
import com.oos.util.Constants;
import com.oos.util.PageBean;

@Controller
@RequestMapping("/shop")
public class ShopController extends BaseController {

	@Autowired
	private ShopService shopService;
	@Autowired
	private MemberService memberService;
	@Autowired
	private DishService dishService;

	// 首页获取店铺的分页数据
	@RequestMapping("/listData")
	@ResponseBody
	public PageBean listData(
			@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
			@RequestParam(value = "pageSize", required = false, defaultValue = "20") int pageSize) {
		PageBean pb = shopService.getByPage(pageIndex, pageSize);
		return pb;
	}

	// 跳转到店铺首页
	@RequestMapping("/index")
	public String index(@RequestParam("shopId") Long shopId) {
		Shop shop = shopService.getById(shopId);
		getRequest().setAttribute("shop", shop);
		// 通过shopId查询店铺的总销量
		int saleNum = shopService.getSaleNumByShopId(shopId);
		getRequest().setAttribute("saleNum", saleNum);

		// *判断是否收藏过此店铺
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member != null) {
			ShopFavorite shopFavorite = memberService.getByMSId(member.getId(), shopId);
			getRequest().setAttribute("shopFavorite", shopFavorite);
		}
		//*?不写这个前台没登陆是报错
//		else{
//			System.out.println("123");
//			getRequest().getSession().setAttribute(Constants.MEMBER_IN_SESSION, null);
//		}

		return "shop/index";
	}

	// 跳转到店铺管理页面
	@RequestMapping("/manage")
	public String manage() {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		// 2.如果没有登陆返回登陆路径（还没有测试）
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
			return null;
		}
		// 使用struts2没有下面两句，manage页面中的shop怎么得到的
		Shop shop = shopService.getShopByMemberId(member.getId());
		getRequest().setAttribute("shop", shop);
		return "shop/manage";
	}

	// 跳转到店铺基本信息页面
	@RequestMapping("/manageDetail")
	public String manageDetail() {
		// 1.校验是否登陆，如果没有登陆返回登陆路径（还没有测试）
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
			return null;
		}
		// 3.通过memberId拿到自己的shop信息，如果为空返回登陆路径（还没有测试）
		Shop shop = shopService.getShopByMemberId(member.getId());
		if (shop == null) {
			String indexPath = ServletActionContext.getRequest().getContextPath() + "/";
			String html = "<script  language='javascript'>window.top.location='" + indexPath
					+ "'</script>";
			responseHtml(html);
			return null;
		}
		// struts2没有下面这一句
		getRequest().setAttribute("shop", shop);
		return "shop/manageDetail";
	}

	// 保存修改的店铺基本信息
	@RequestMapping("/manageDetailSave")
	public String manageDetailSave(@RequestParam("pic") MultipartFile pic,
			@RequestParam("sname") String sname, @RequestParam("tel") String tel,
			@RequestParam("address") String address,
			@RequestParam("waitMinutes") Integer waitMinutes, @RequestParam("id") Long id) {
		Shop shop = new Shop();
		shop.setId(id);
		shop.setSname(sname);
		shop.setTel(tel);
		shop.setAddress(address);
		shop.setWaitMinutes(waitMinutes);
		// 1.校验是否登陆，如果没有登陆返回登陆路径（还没有测试）
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
			return null;
		}
		// 2.获取文件名picFileName，文件类型picContentType，
		String picFileName = pic.getOriginalFilename();

		ServletContext sc = getRequest().getSession().getServletContext();
		String webRootDiskPath = sc.getRealPath("/");
		String uploadFolder = "res/img/";
		String picName = UUID.randomUUID().toString();
		String picSuffix = picFileName.substring(picFileName.lastIndexOf("."));
		String picSaveDir = webRootDiskPath + uploadFolder;
		String picSavePath = webRootDiskPath + uploadFolder + picName + picSuffix;
		String picpathInDB = picName + picSuffix;

		try {
			File picOndisk = new File(picSavePath);
			if (!picOndisk.exists()) {
				File dir = new File(picSaveDir);
				dir.mkdirs();
				picOndisk.createNewFile();
			}
			pic.transferTo(picOndisk);
			shop.setPic(picpathInDB);
			shopService.update(shop);

			Shop newShop = shopService.getById(id);
			getRequest().setAttribute("shop", newShop);
		} catch (Exception e) {
			// TODO: handle exception
		}

		return "shop/manage";
	}

	// 跳转到添加评论页面
	@RequestMapping("/addComment")
	public String addComment(@RequestParam("dishId") Long dishId) {
		
		Dish dish = dishService.getById(dishId);
		getRequest().setAttribute("dish", dish);
		return "shop/addComment";
	}
}
