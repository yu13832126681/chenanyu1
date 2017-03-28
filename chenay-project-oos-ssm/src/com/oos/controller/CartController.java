package com.oos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.oos.framwork.BaseController;
import com.oos.model.Cart;
import com.oos.model.Dish;
import com.oos.model.Member;
import com.oos.service.CartService;
import com.oos.service.DishService;
import com.oos.util.Constants;
import com.oos.vo.CartVo;

@Controller
@RequestMapping("/cart")
public class CartController extends BaseController {

	@Autowired
	private DishService dishService;
	@Autowired
	private CartService cartService;

	// *添加菜品到购物车
	@RequestMapping("/addToCart")
	@ResponseBody
	public void addToCart() {

		// 1.判断是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "请先登录", null);
			return;
		}
		Long memberId = member.getId();

		// 2.获取前台的菜品id和数量
		String dishIdStr = getRequest().getParameter("dish_id");
		String dishNumStr = getRequest().getParameter("dish_num");
		Long dishId = Long.valueOf(dishIdStr);
		int num = Integer.parseInt(dishNumStr);

		// 4.校验是否已经有此菜品（已经存在修改数量，没有就创建）
		Cart cartDB = cartService.getByMDId(memberId, dishId);
		if (cartDB == null) {
			// 3.菜品放入购物车（先通过菜品id拿到菜品类再拿到shopId）
			Dish dish = dishService.getById(dishId);
			Long shopId = dish.getShopId();
			Cart cart = new Cart();
			cart.setMemberId(memberId);
			cart.setShopId(shopId);
			cart.setDishId(dishId);
			cart.setNum(num);
			try {
				cartService.addToCart(cart);
				responseAjax(true, "添加成功", null);
			} catch (Exception e) {
				responseAjax(false, "添加失败", null);
			}
		} else {
			try {
				Integer oldNum = cartDB.getNum();
				Integer newNum = oldNum + num;
				cartDB.setNum(newNum);
				cartService.update(cartDB);
				responseAjax(true, "添加成功", null);
			} catch (Exception e) {
				responseAjax(false, "添加失败", null);
			}

		}

	}

	// *获取购物车中菜品的总数量
	@RequestMapping("/getCartTotalNum")
	@ResponseBody
	public int getCartTotalNum() {
		// 1.判断是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			return 0;
		}
		Long memberId = member.getId();
		// 2.获取菜品总数量
		int total = cartService.getTotalByMId(memberId);
		return total;
	}

	// *跳转到购物车界面,购物车数据传到前台
	@RequestMapping("/view")
	public void view() {
		// 1.判断是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "cart/view", null);
		} else {
			responseAjax(true, "cart/view", null);
		}
	}

	@RequestMapping("/view1")
	public String view1() {
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		Long memberId = member.getId();
		CartVo cartVo = cartService.getByMSId(memberId);
		getRequest().setAttribute("cart", cartVo);
		responseAjax(true, "cart/view", null);
		return "cart/view";
	}

	// *改变购物车中菜品的数量（通过“+”、“-”号）
	@RequestMapping("changeItemNum")
	public void changeItemNum() {
		// 1.判断是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "没有登录,请先登录", null);
			return;
		}
		Long memberId = member.getId();
		// 2.拿到前台的数据（菜品id、修改的数量）
		String dishIdStr = getRequest().getParameter("dish_id");
		String dishNumStr = getRequest().getParameter("dish_num");
		Long dishId = Long.valueOf(dishIdStr);
		int dishNum = Integer.parseInt(dishNumStr);

		// 3.获取购物车中菜品的数量
		int oldNum = cartService.getNumByMDId(memberId, dishId);
		// 4.修改数量
		int newNum = oldNum + dishNum;
		if (newNum < 1) {
			responseAjax(false, "数量不能小于1", null);
			return;
		}
		try {
			cartService.updateNum(memberId, dishId, newNum);
			responseAjax(true, "修改成功", null);
		} catch (Exception e) {
			responseAjax(false, "操作失败", null);
		}

	}

	// *单个删除购物车中菜品
	@RequestMapping("removeItem")
	public void removeItem() {
		// 1.判断是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "没有登录,请先登录", null);
			return;
		}
		Long memberId = member.getId();
		// 2.获取前台的菜品id
		String dishIdStr = getRequest().getParameter("dish_id");
		Long dishId = Long.valueOf(dishIdStr);

		// 3.删除菜品
		try {
			cartService.deleteByMDId(memberId, dishId);
			responseAjax(true, "删除成功", null);
		} catch (Exception e) {
			responseAjax(false, "操作失败", null);
		}
	}

	// *批量删除购物车中菜品
	@RequestMapping("removeBatch")
	public void removeBatch() {
		// 1.判断是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "没有登录,请先登录", null);
			return;
		}
		Long memberId = member.getId();
		// 2.获取前台的菜品id
		String dish_idsStr = getRequest().getParameter("dish_ids");
		String[] dish_ids = dish_idsStr.split(",");

		// 3.删除菜品
		for (int i = 0; i < dish_ids.length; i++) {
			Long dishId = Long.valueOf(dish_ids[i]);
			cartService.deleteByMDId(memberId, dishId);
		}
		responseAjax(true, "删除成功", null);
	}

	// *已选择菜品的总数量(通过memberId和 dishId获取)
	@RequestMapping("/getCheckedNum")
	@ResponseBody
	public int getCheckedNum() {
		// 1.判断是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "没有登录,请先登录", null);
			return 0;
		}
		Long memberId = member.getId();
		// 2.获取前台的菜品id
		String dish_idsStr = getRequest().getParameter("dish_ids");
		if (dish_idsStr != "") {
			String[] dish_ids = dish_idsStr.split(",");
			int totalNum = 0;
			for (int i = 0; i < dish_ids.length; i++) {
				Long dishId = Long.valueOf(dish_ids[i]);
				int num = cartService.getNumByMDId(memberId, dishId);
				totalNum += num;
			}
			return totalNum;
		} else {
			return 0;
		}
	}

	// *已选择菜品的总价格(通过memberId和 dishId获取)
	@RequestMapping("/getCheckedPrice")
	@ResponseBody
	public double getCheckedPrice() {
		// 1.判断是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "没有登录,请先登录", null);
			return 0;
		}
		Long memberId = member.getId();
		// 2.获取前台的菜品id
		String dish_idsStr = getRequest().getParameter("dish_ids");
		if (dish_idsStr != "") {
			String[] dish_ids = dish_idsStr.split(",");
			double totalPrice = 0;
			for (int i = 0; i < dish_ids.length; i++) {
				Long dishId = Long.valueOf(dish_ids[i]);
				double price = cartService.getPriceByMDId(memberId, dishId);
				int num = cartService.getNumByMDId(memberId, dishId);
				totalPrice += price * num;
			}
			return totalPrice;
		} else {
			return 0;
		}
	}
}
