package com.oos.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.oos.framwork.BaseController;
import com.oos.model.DishFavorite;
import com.oos.model.Member;
import com.oos.model.MemberAddress;
import com.oos.model.ShopFavorite;
import com.oos.service.MemberService;
import com.oos.util.Constants;
import com.oos.util.EncryptUtil;
import com.oos.util.PageBean;

@SuppressWarnings("unchecked")
@Controller
@RequestMapping("/member")
public class MemberController extends BaseController {

	@Autowired
	private MemberService memberService;

	// 跳转到注册页面
	@RequestMapping("/reg")
	public String reg() {
		return "member/reg";
	}

	// 注册提交之前判断用户名是否已经存在
	@RequestMapping("/checkUsername")
	@ResponseBody
	public String checkUsername() {
		String username = getRequest().getParameter("username");
		Member member = memberService.findByUsername(username);
		if (member == null) {
			return "1";
		} else {
			return "0";
		}
	}

	// 注册提交之前判断邮箱是否已经存在
	@RequestMapping("/checkEmail")
	@ResponseBody
	public String checkEmail() {
		String email = getRequest().getParameter("email");
		Member member = memberService.findByEmail(email);
		if (member == null) {
			return "1";
		} else {
			return "0";
		}
	}

	// 提交注册
	@RequestMapping("/doReg")
	@ResponseBody
	public Map<String, Object> doReg(Member member) {
		Map<String, Object> map = new HashMap<String, Object>();
		// 1.校验验证码
		String verifyCode = getRequest().getParameter("verifycode");
		String verifyCodeSession = (String) getRequest().getSession().getAttribute(
				Constants.REG_VERIFY_CODE);
		if (verifyCode == null || verifyCodeSession == null
				|| !verifyCode.equalsIgnoreCase(verifyCodeSession)) {
			map.put("success", false);
			map.put("message", "注册失败,验证码不正确");
			return map;
		}

		// 2.提交
		try {
			String message = memberService.doReg(member);
			if (message == null) {
				map.put("success", true);
				map.put("message", "注册成功");
				return map;
			} else {
				map.put("success", false);
				map.put("message", message);
				return map;
			}
		} catch (Exception e) {
			e.printStackTrace();
			map.put("success", false);
			map.put("message", "注册失败");
			return map;
		}
	}

	// 跳转到登陆页面
	@RequestMapping("/login")
	public String login() {
		// 清除session中的登陆用的验证码
		getRequest().getSession().removeAttribute(Constants.LOGIN_VERIFY_CODE);

		String url = getRequest().getParameter("url");
		getRequest().setAttribute("url", url);
		return "member/login";
	}

	// 登陆，保存用户信息到session
	@RequestMapping("/doLogin")
	@ResponseBody
	public Map<String, Object> doLogin(Member member) {
		Map<String, Object> map = new HashMap<String, Object>();
		// 1.校验验证码（前台错误三次才后有验证码）
		String verifyCodeSession = (String) getRequest().getSession().getAttribute(
				Constants.LOGIN_VERIFY_CODE);
		if (verifyCodeSession != null) {
			String verifyCode = getRequest().getParameter("verifycode");
			if (verifyCode == null || !verifyCode.equalsIgnoreCase(verifyCodeSession)) {
				map.put("success", false);
				map.put("message", "注册失败,验证码不正确");
				return map;
			}
		}
		// 2.登陆，获取会员信息存入session
		Member memberOfDB = memberService.doLogin(member);
		if (memberOfDB == null) {
			map.put("success", false);
			map.put("message", "用户名或密码不正确");
			return map;
		}
		getRequest().getSession().setAttribute(Constants.MEMBER_IN_SESSION, memberOfDB);
		map.put("success", true);
		map.put("message", "登录成功");
		return map;
	}

	// 注销，从session中删除用户信息
	@RequestMapping("/logout")
	public String logout() {
		getRequest().getSession().removeAttribute(Constants.MEMBER_IN_SESSION);
		return "index";
	}

	// 跳转到忘记密码页面
	@RequestMapping("/forgetPassword")
	public String forgetPassword() {
		return "member/forgetPassword";
	}

	// 找回密码，处理找回密码提交的请求
	@RequestMapping("/doFetchPassword")
	public void doFetchPassword(Member member) {
		String verifycode = getRequest().getParameter("verifycode");
		String username = member.getUsername();
		String email = member.getEmail();
		// 1.校验验证码
		String verifycodeInSession = (String) getRequest().getSession().getAttribute(
				Constants.FETCH_PWD_VERIFY_CODE);
		if (verifycode == null || verifycodeInSession == null
				|| !verifycodeInSession.equalsIgnoreCase(verifycode)) {
			responseAjax(false, "验证码不正确", null);
			return;
		}
		// 2.校验用户名和邮箱是否为空
		if (StringUtils.isBlank(username) || StringUtils.isBlank(email)) {
			responseAjax(false, "用户名或邮箱为空", null);
			return;
		}
		// 3.校验用户名是否存在
		Member memberDB = memberService.findByUsername(username);
		if (memberDB == null) {
			responseAjax(false, "用户名不存在", null);
			return;
		}
		// 4.校验邮箱是否正确
		if (memberDB.getEmail() == null
				|| !memberDB.getEmail().equalsIgnoreCase(memberDB.getEmail())) {
			responseAjax(false, "邮箱不正确", null);
			return;
		}
		// 5.向会员的邮箱发送找回密码的邮件
		HttpServletRequest req = getRequest();
		String dns = Constants.DN;
		if (StringUtils.isBlank(dns)) {
			dns = req.getScheme() + "://" + req.getServerName() + ":" + req.getServerPort();

		}
		String link = dns + req.getContextPath() + "/member/setPassword";
		// 当前时间毫秒数
		String timestamp = "" + System.currentTimeMillis();
		// 生成的密钥字符串
		String key = username + Constants.RESET_PWD_KEY + timestamp;
		key = EncryptUtil.md5(key);

		// 链接的参数
		String linkParams = "username=" + username + "&timestamp=" + timestamp + "&key=" + key;
		// 最终的链接字符串
		link = link + "?" + linkParams;
		// 发送邮件
		boolean status = sendEmail(email, link);
		if (status) {
			responseAjax(true, "发送邮件成功", null);
		} else {
			responseAjax(false, "发送找回密码的邮件失败,请重试", null);
		}
	}

	// 发送邮件代码
	private boolean sendEmail(String email, String link) {
		JavaMailSenderImpl sender = new JavaMailSenderImpl();
		sender.setHost(Constants.EMAIL_HOST);
		sender.setUsername(Constants.EMAIL_USERNAME);
		sender.setPassword(Constants.EMAIL_PASSWORD);
		// (什么意思？)
		sender.setProtocol("smtp");
		sender.setPort(25);
		Properties javaMailProperties = new Properties();
		javaMailProperties.put("mail.smtp.auth", "true");
		javaMailProperties.put("mail.smtp.timeout", "25000");

		sender.setJavaMailProperties(javaMailProperties);
		MimeMessage message = sender.createMimeMessage();
		try {
			MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "utf-8");
			messageHelper.setTo(email);
			messageHelper.setFrom(Constants.EMAIL_USERNAME);
			messageHelper.setSubject("OOS会员找回密码");
			messageHelper.setText("<html><head></head><body><h1>" + "点击<a href=\"" + link
					+ "\">这里</a>找回密码,在3天内有效" + "</h1></body></html>", true);
			sender.send(message);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}

	// 跳转到邮件发送成功提示页面
	@RequestMapping("/fetchPassword")
	public String fetchPassword() {
		String email = getRequest().getParameter("email");
		getRequest().setAttribute("email", email);
		return "member/fetchPassword";
	}

	// 重置密码
	@RequestMapping("/setPwd")
	public String setPassword(Member member) {
		String username = member.getUsername();// 前端传过来的用户名
		String password = member.getPassword();// 前端传过来的重置密码
		String timestamp = getRequest().getParameter("timestamp");// 前端传过来的时间戳
		String key = getRequest().getParameter("key");// 前端传过来的秘钥

		String message = null;// 重置密码的错误消息,如果失败,不为null,如果成功为null

		// 校验用户名,时间戳,秘钥,密码不为空
		if (StringUtils.isNotBlank(username) && StringUtils.isNotBlank(timestamp)
				&& StringUtils.isNotBlank(key) && StringUtils.isNotBlank(password)) {
			// 校验重置密码的链接是否已经失效,
			Date now = new Date();
			long linkTime = 0;
			try {
				linkTime = Long.parseLong(timestamp);
			} catch (Exception e) {
				// TODO: handle exception
			}
			if (now.getTime() - linkTime <= Constants.RESET_PWD_EXPIRE * 24 * 3600 * 1000) {
				// 校验秘钥是否正确
				String validKey = username + Constants.RESET_PWD_KEY + timestamp;
				validKey = EncryptUtil.md5(validKey);
				if (validKey.equalsIgnoreCase(key)) {
					try {
						memberService.resetPassword(member);
					} catch (Exception e) {
						message = "重置密码失败,请重试";
					}

				} else {
					message = "重置密码失败,您当前不能操作";
				}
			} else {
				message = "重置密码失败,链接已经失效";
			}

		} else {
			message = "重置密码失败,表单填写不正确";
		}
		getRequest().setAttribute("message", message);
		return "member/doSetPwd";
	}

	// *跳转到店铺收藏页面(把分页数据传到前台)
	@RequestMapping("/shopFavoriteList")
	public String shopFavoriteList() {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
			return null;
		}
		// 2.获取分页数据
		List<ShopFavorite> shopFavorite = memberService.getFByMemberId(member.getId());
		getRequest().setAttribute("shopFavorite", shopFavorite);

		return "member/shopFavoriteList";
	}

	// *取消店铺收藏
	@RequestMapping("/abolishFavorite")
	public void abolishFavorite() {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
		}
		// 2.根据memberId和shopId删除表中数据
		Long memberId = member.getId();
		String shopIdStr = getRequest().getParameter("shopId");
		Long shopId = Long.valueOf(shopIdStr);
		try {
			memberService.deleteByMSId(memberId, shopId);
			responseAjax(true);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	// *添加店铺收藏
	@RequestMapping("/addFavoriteShop")
	public void addFavoriteShop() {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
			return;
		}
		// 2.获取前台数据，添加到数据库中
		String shopIdStr = getRequest().getParameter("shopId");
		Long shopId = Long.valueOf(shopIdStr);
		ShopFavorite shopFavorite = new ShopFavorite();
		shopFavorite.setMemberId(member.getId());
		shopFavorite.setShopId(shopId);
		try {
			memberService.addFavoriteShop(shopFavorite);
			responseAjax(true, "收藏成功", null);
		} catch (Exception e) {
			responseAjax(false, "收藏失败", null);
		}
	}

	// *跳转到收货地址列表
	@RequestMapping("/addressList")
	public String addressList() {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
			return null;
		}
		// 2.通过memberId获取地址的列表信息
		List<MemberAddress> address = memberService.getAByMemberId(member.getId());
		getRequest().setAttribute("address", address);
		return "member/addressList";
	}

	// *加载添加收货地址页面
	@RequestMapping("/addressAdd")
	public String addressAdd() {
		return "member/addressAdd";
	}

	// *保存添加的地址数据
	@RequestMapping("/addressAddSave")
	public void addressAddSave(MemberAddress address) {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
		}
		address.setMemberId(member.getId());
		// 2.如果添加的为默认地址，先把之前的默认地址取消,如果为空先设为0
		if (address.getIsDefault() == null) {
			address.setIsDefault(0);
		}
		if (address.getIsDefault() == 1) {
			memberService.deleteDefault(1);
			try {
				memberService.addressAdd(address);
				responseAjax(true, "添加成功", null);
			} catch (Exception e) {
				responseAjax(false, "添加失败", null);
			}
		} else {
			try {
				memberService.addressAdd(address);
				responseAjax(true, "添加成功", null);
			} catch (Exception e) {
				responseAjax(false, "添加失败", null);
			}

		}
	}

	// *加载修改地址页面
	@RequestMapping("/addressEdit")
	public String addressEdit(@RequestParam("id") Integer id) {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
		}
		// 2.通过id获取地址信息
		MemberAddress address = memberService.getByAddressId(id);
		getRequest().setAttribute("address", address);
		return "member/addressEdit";
	}

	// *保存修改的地址数据(修改时没有传memberId)
	@RequestMapping("/addressEditSave")
	public void addressEditSave(MemberAddress address) {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
		}
		address.setMemberId(member.getId());
		// 2.如果修改的不为默认地址，先把IsDefault设为0
		if (address.getIsDefault() == null) {
			address.setIsDefault(0);
		}
		try {
			memberService.addressEditSave(address);
			responseAjax(true, "修改成功", null);
		} catch (Exception e) {
			responseAjax(false, "修改失败", null);
		}
	}

	// *删除地址(删除时没有传memberId)
	@RequestMapping("/addressRemove")
	public void addressRemove(@RequestParam("id") Integer id) {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
		}
		// 2.根据id和memberId删除地址
		try {
			memberService.addressRemove(id);
			responseAjax(true, "删除成功", null);
		} catch (Exception e) {
			responseAjax(false, "删除失败", null);
		}
	}

	// *点击多选框设置默认地址
	@RequestMapping("/keepDefault")
	public void keepDefault(@RequestParam("id") Integer id) {
		memberService.deleteDefault(1);
		MemberAddress address = memberService.getByAddressId(id);
		address.setIsDefault(1);
		try {
			memberService.addressEditSave(address);
			responseAjax(true);
		} catch (Exception e) {
			responseAjax(false);
		}
	}

	// *跳转到菜品收藏页面
	@RequestMapping("/dishFavoriteList")
	public String dishFavoriteList(
			@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
			@RequestParam(value = "pageSize", required = false, defaultValue = "2") int pageSize) {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
			return null;
		}
		Long memberId = member.getId();
		PageBean pb = memberService.getDishFavoriteByMemberId(memberId, pageIndex, pageSize);

		List<DishFavorite> list = (List<DishFavorite>) pb.getData();
		getRequest().setAttribute("dishFavorite", list);
		getRequest().setAttribute("pb", pb);
		return "member/dishFavoriteList";
	}

	// 取消菜品收藏
	@RequestMapping("/abolishDishFavorite")
	public void abolishDishFavorite() {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
		}
		// 2.根据memberId和dishId删除表中数据
		Long memberId = member.getId();
		String dishIdStr = getRequest().getParameter("dishId");
		Long dishId = Long.valueOf(dishIdStr);
		try {
			memberService.deleteByMDId(memberId, dishId);
			responseAjax(true);
		} catch (Exception e) {

		}
	}

	// *添加菜品收藏
	@RequestMapping("/addFavoriteDish")
	public void addFavoriteDish() {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
			return;
		}
		// 2.获取前台数据，添加到数据库中
		String dishIdStr = getRequest().getParameter("dishId");
		Long dishId = Long.valueOf(dishIdStr);
		DishFavorite dishFavorite = new DishFavorite();
		dishFavorite.setMemberId(member.getId());
		dishFavorite.setDishId(dishId);
		try {
			memberService.addFavoriteDish(dishFavorite);
			responseAjax(true, "收藏成功", null);
		} catch (Exception e) {
			responseAjax(false, "收藏失败", null);
		}
	}

	// *取消店铺收藏
	@RequestMapping("/abolishFavoriteDish")
	public void abolishFavoriteDish() {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
		}
		// 2.根据memberId和shopId删除表中数据
		Long memberId = member.getId();
		String dishIdStr = getRequest().getParameter("dishId");
		Long dishId = Long.valueOf(dishIdStr);
		try {
			memberService.deleteByMDId(memberId, dishId);
			responseAjax(true);
		} catch (Exception e) {

		}
	}
}
