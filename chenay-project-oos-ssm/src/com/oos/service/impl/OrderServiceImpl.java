package com.oos.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oos.mapper.MemberAddressMapper;
import com.oos.mapper.NetOrderDishMapper;
import com.oos.mapper.NetOrderMapper;
import com.oos.model.Dish;
import com.oos.model.Member;
import com.oos.model.MemberAddress;
import com.oos.model.NetOrder;
import com.oos.model.NetOrderDish;
import com.oos.model.Shop;
import com.oos.service.OrderService;
import com.oos.util.PageBean;
import com.oos.vo.CartShopVo;
import com.oos.vo.CartVo;
import com.oos.vo.DishItemVo;
import com.oos.vo.OrderVo;

@Transactional(rollbackFor = Exception.class)
@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private NetOrderMapper netOrderMapper;
	@Autowired
	private NetOrderDishMapper netOrderDishMapper;
	@Autowired
	MemberAddressMapper memberAddressMapper;

	
	public void commitOrder(OrderVo orderVo) {
		// 1.获取要存入的数据
		Member member = orderVo.getMember();
		CartVo cart = orderVo.getCart();
		String receiver = orderVo.getReceiver();
		String address = orderVo.getAddress();

		LinkedHashMap<Long, CartShopVo> cartShops = cart.getCartShops();
		// 2.循环保存订单数据
		for (Iterator<Entry<Long, CartShopVo>> iter = cartShops.entrySet().iterator(); iter
				.hasNext();) {
			Entry<Long, CartShopVo> next = iter.next();
			CartShopVo cartShopVo = next.getValue();
			Shop shop = cartShopVo.getShop();
			LinkedHashMap<Long, DishItemVo> dishItems = cartShopVo.getDishItems();

			NetOrder netOrder = new NetOrder();
			netOrder.setMemberId(member.getId());
			netOrder.setShopId(shop.getId());
			netOrder.setReceiver(receiver);
			netOrder.setAddress(address);
			netOrder.setQty(cartShopVo.getTotalNum());
			netOrder.setTotal(cartShopVo.getTotalPrice());
			netOrder.setFreight(cartShopVo.getTotalFrieght());
			netOrder.setOrderTime(new Date());
			netOrder.setStatus(1);
			// 3.保存订单
			netOrderMapper.insertSelective(netOrder);
			// 4.循环保存订单关联的订单购买项的数据
			for (Iterator<Entry<Long, DishItemVo>> iterDish = dishItems.entrySet().iterator(); iterDish
					.hasNext();) {
				Entry<Long, DishItemVo> nextDish = iterDish.next();
				DishItemVo dishItemVo = nextDish.getValue();
				Dish dish = dishItemVo.getDish();
				int num = dishItemVo.getNum();
				NetOrderDish nod = new NetOrderDish();
				nod.setDishId(dish.getId());
				nod.setOrderId(netOrder.getId());
				nod.setPrice(dish.getPrice());
				nod.setQty(num);
				nod.setShopId(shop.getId());
				// 5.保存订单购买项
				netOrderDishMapper.insertSelective(nod);
			}
		}

	}

	
	public PageBean getOrderByPage(Long memberId, int pageIndex, int pageSize) {
		int total = netOrderMapper.getTotalByMemberId(memberId);
		PageBean pb = new PageBean(total, pageIndex, pageSize);

		pageIndex = pb.getPageIndex();
		pageSize = pb.getPageSize();

		HashMap<String, Object> map = new HashMap<String, Object>();

		map.put("memberId", memberId);

		map.put("orderByClause", "id");
		map.put("start", pageIndex * pageSize);
		map.put("limit", pageSize);

		List<NetOrder> list = netOrderMapper.getOrderByPage(map);
		for (int i = 0; i < list.size(); i++) {
			NetOrder netOrder = list.get(i);
			Long netOrderId = netOrder.getId();
			List<NetOrderDish> netOrderDish = netOrderDishMapper.getByNetOrderId(netOrderId);
			netOrder.setNetOrderDish(netOrderDish);
		}
		pb.setData(list);
		return pb;
	}

	
	public NetOrder getOrderById(Long orderId) {
		NetOrder netOrder = netOrderMapper.selectByPrimaryKey(orderId);
		List<NetOrderDish> netOrderDish = netOrderDishMapper.getByNetOrderId(orderId);
		netOrder.setNetOrderDish(netOrderDish);
		return netOrder;
	}

	
	public List<MemberAddress> getAByMemberId(Long memberId) {
		return memberAddressMapper.getByMemberId(memberId);
	}

}
