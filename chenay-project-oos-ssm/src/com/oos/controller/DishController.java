package com.oos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.oos.framwork.BaseController;
import com.oos.model.Dish;
import com.oos.model.Member;
import com.oos.model.Shop;
import com.oos.service.DishService;
import com.oos.service.ShopService;
import com.oos.util.Constants;
import com.oos.util.PageBean;

@Controller
@RequestMapping("/dish")
public class DishController extends BaseController {

	@Autowired
	private DishService dishService;
	@Autowired
	private ShopService shopService;

	// 店铺首页获取菜品分页数据(未使用方法)
	@RequestMapping("/listData1")
	@ResponseBody
	public PageBean listData1(
			@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
			@RequestParam(value = "pageSize", required = false, defaultValue = "5") int pageSize,
			@RequestParam("shopId") Long shopId) {

		PageBean pb = dishService.getByPage(shopId, pageIndex, pageSize);
		return pb;
	}

	// *查询店铺首页菜品的分页数据，过滤掉已删除的和下架的菜品。
	@RequestMapping("/listData")
	@ResponseBody
	public PageBean listDate(
			@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
			@RequestParam(value = "pageSize", required = false, defaultValue = "5") int pageSize,
			@RequestParam("shopId") Long shopId) {
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		Long memberId = null;
		if (member != null) {
			memberId = member.getId();
		}
		PageBean pb = dishService.getByCondition(shopId, 0, 1, pageIndex, pageSize, memberId);
		return pb;
	}

	// 跳转到店铺管理页面展示菜品列表
	@RequestMapping("/shopDishList")
	public String shopDishList() {
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
		// 2.通关memberId获取shop信息，传到前台。
		Shop shop = shopService.getShopByMemberId(member.getId());
		if (shop == null) {
			String indexPath = getRequest().getContextPath() + "/index";
			String html = "<script  language='javascript'>window.top.location='" + indexPath
					+ "'</script>";
			responseHtml(html);
			return null;
		}
		getRequest().setAttribute("shop", shop);

		return "dish/shopDishList";
	}

	// *获取店铺管理的菜单列表
	@RequestMapping("/dishListData")
	public void dishListData(
			@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
			@RequestParam(value = "pageSize", required = false, defaultValue = "6") int pageSize,
			@RequestParam("shopId") Long shopId) {
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		Long memberId = null;
		if (member != null) {
			memberId = member.getId();
		}
		PageBean pb = dishService.getByCondition(shopId, 0, null, pageIndex, pageSize, memberId);
		responseAjax(pb);
	}

	// 加载店铺管理添加菜品页面
	@RequestMapping("/shopDishAdd")
	public String shopDishAdd() {
		return "dish/shopDishAdd";
	}

	// 保存添加的菜品数据
	@RequestMapping("/shopDishAddSave")
	public void shopDishAddSave(Dish dish) {
		// 1.校验是否登录
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "操作失败,请先登录", null);
			return;
		}
		// 2.判断会员是否有店铺
		Shop shop = shopService.getShopByMemberId(member.getId());
		if (shop == null) {
			responseAjax(false, "操作失败,您没有权限", null);
			return;
		}
		dish.setShopId(shop.getId());
		try {
			dishService.addSave(dish);
			responseAjax(true, "添加成功", null);
		} catch (Exception e) {
			responseAjax(false, "添加失败", null);
		}

	}

	// 跳转到修改菜品页面
	@RequestMapping("/shopDishEdit")
	public String shopDishEdit(@RequestParam("id") Long id) {
		// 1.校验是否登录
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "操作失败,请先登录", null);
			return null;
		}
		// 2.通过菜品id获取菜品信息
		Dish dish = dishService.getById(id);
		Shop shop = shopService.getShopByMemberId(member.getId());
		// 3.需要判断当前修改的菜品是否是当前登录会员的店铺的菜品
		if (shop == null || !shop.getId().equals(dish.getShopId())) {
			String indexPath = getRequest().getContextPath() + "/index";
			String html = "<script  language='javascript'>window.top.location='" + indexPath
					+ "'</script>";
			responseHtml(html);
			return null;
		}
		getRequest().setAttribute("dish", dish);
		return "dish/shopDishEdit";
	}

	// 保存修改的菜品数据
	@RequestMapping("/shopDishEditSave")
	public void shopDishEditSave(Dish dish) {
		// 1.校验是否登录
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "操作失败,请先登录", null);
			return;
		}
		Shop shop = shopService.getShopByMemberId(member.getId());
		try {
			String message = dishService.update(dish, shop);
			if (message == null) {
				responseAjax(true, "修改成功", null);
				return;
			}
			responseAjax(true, message, null);
		} catch (Exception e) {
			responseAjax(false, "修改失败", null);
		}
	}

	// 删除菜品
	@RequestMapping("/remove")
	public void remove(@RequestParam("id") Long id) {
		// 1.校验是否登录
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "操作失败,请先登录", null);
			return;
		}
		Shop shop = shopService.getShopByMemberId(member.getId());
		try {
			String message = dishService.delete(id, shop);
			if (message == null) {
				responseAjax(true, "删除成功", null);
				return;
			}
			responseAjax(false, message, null);
		} catch (Exception e) {
			responseAjax(false, "删除失败", null);
		}

	}
}
