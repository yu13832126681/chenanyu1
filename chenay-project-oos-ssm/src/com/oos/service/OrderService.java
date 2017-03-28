package com.oos.service;

import java.util.List;

import com.oos.model.MemberAddress;
import com.oos.model.NetOrder;
import com.oos.util.PageBean;
import com.oos.vo.OrderVo;

public interface OrderService {

	// 将订单所涉及的所有数据封装到OrderVo中
	void commitOrder(OrderVo orderVo);

	// 根据会员id获得订单的分页数据
	PageBean getOrderByPage(Long memberId, int pageIndex, int pageSize);

	// 通过orderId查询订单信息
	NetOrder getOrderById(Long orderId);

	// 通过memberId获取收货地址信息
	List<MemberAddress> getAByMemberId(Long memberId);
}
