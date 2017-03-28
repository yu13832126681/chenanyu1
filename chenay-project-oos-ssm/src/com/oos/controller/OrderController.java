package com.oos.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.oos.framwork.BaseController;
import com.oos.model.Cart;
import com.oos.model.Dish;
import com.oos.model.Member;
import com.oos.model.MemberAddress;
import com.oos.model.NetOrder;
import com.oos.model.Shop;
import com.oos.service.CartService;
import com.oos.service.OrderService;
import com.oos.util.Constants;
import com.oos.util.PageBean;
import com.oos.vo.CartVo;
import com.oos.vo.OrderVo;

@Controller
@RequestMapping("/order")
public class OrderController extends BaseController {

	@Autowired
	private OrderService orderService;
	@Autowired
	private CartService cartService;

	// 把选中的菜品放入cartVo中
	@RequestMapping("/toCatr")
	public void toCatr() {
		// 先删除session中的cartVo(?)
		getRequest().getSession().removeAttribute(Constants.SESSION_ORDER);
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
		Long memberId = member.getId();

		// 2.获取前台的dishId数据加入cartVo
		String dish_idsStr = getRequest().getParameter("dish_ids");
		String[] dish_ids = dish_idsStr.split(",");

		CartVo cartVo = new CartVo();
		getRequest().getSession().setAttribute(Constants.SESSION_ORDER, cartVo);

		for (int i = 0; i < dish_ids.length; i++) {
			Long dishId = Long.valueOf(dish_ids[i]);
			Cart cart = cartService.getByMDId(memberId, dishId);
			Shop shop = cart.getShop();
			Dish dish = cart.getDish();
			Integer num = cart.getNum();
			cartVo.addDishItem(shop, dish, num);
		}
		responseAjax(true);
	}

	// 跳转到提交订单页面
	@RequestMapping("/confirm")
	public String confirm() {
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
		// 2.获取会员的地址列表传到前台
		List<MemberAddress> address = orderService.getAByMemberId(member.getId());
		getRequest().setAttribute("address", address);
		// 3.
		return "order/confirm";
	}

	// 提交订单
	@RequestMapping("/commit")
	public void commit(NetOrder netOrder) {

		HttpSession session = getRequest().getSession();

		// 1.判断是否登录超时
		Member member = (Member) session.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "登录超时,请重新登录", null);
			return;
		}
		CartVo cart = (CartVo) session.getAttribute(Constants.SESSION_ORDER);

		// 2.校验购物车是否有数据
		if (cart == null || cart.getTotalNum() == null || cart.getTotalNum() == 0) {
			responseAjax(false, "您还没有购买任何菜品", null);
			return;
		}

		// 3.获取前台收货人和收货地址（校验是否为空）
		String receiver = netOrder.getReceiver();
		String address = netOrder.getAddress();
		if (receiver == "" || address == "") {
			responseAjax(false, "收货人或收货地址信息不能为空", null);
			return;
		}

		// 4.生成订单
		OrderVo orderVo = new OrderVo();
		orderVo.setAddress(address);
		orderVo.setReceiver(receiver);
		orderVo.setMember(member);
		orderVo.setCart(cart);

		try {
			// 5.提交订单
			orderService.commitOrder(orderVo);
			// 6.购买成功,清空购物车的数据
			session.removeAttribute(Constants.SESSION_CART);
			responseAjax(true, "生成订单成功", null);
		} catch (Exception e) {
			responseAjax(false, "生成订单失败", null);
		}
	}

	// 跳转到订单确认页面
	@RequestMapping("/list")
	public String list(
			@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
			@RequestParam(value = "pageSize", required = false, defaultValue = "3") int pageSize) {
		HttpSession session = getRequest().getSession();

		// 1.判断是否登录超时
		Member member = (Member) session.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "登录超时,请重新登录", null);
			return "member/login";
		}
		// 2.获取订单数据
		Long memberId = member.getId();
		PageBean pb = orderService.getOrderByPage(memberId, pageIndex, pageSize);
		getRequest().setAttribute("pb", pb);
		return "order/list";
	}

	// 跳转到订单详情页面
	@RequestMapping("/detail")
	public String detail() {
		String orderIdStr = getRequest().getParameter("orderId");
		Long orderId = Long.valueOf(orderIdStr);
		NetOrder order = orderService.getOrderById(orderId);
		getRequest().setAttribute("order", order);
		return "order/detail";
	}
}
