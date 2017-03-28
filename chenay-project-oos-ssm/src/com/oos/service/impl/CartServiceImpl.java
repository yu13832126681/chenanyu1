package com.oos.service.impl;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oos.mapper.CartMapper;
import com.oos.model.Cart;
import com.oos.model.Dish;
import com.oos.model.Shop;
import com.oos.service.CartService;
import com.oos.vo.CartShopVo;
import com.oos.vo.CartVo;
import com.oos.vo.DishItemVo;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartMapper cartMapper;

	 
	public void addToCart(Cart cart) {
		cartMapper.insertSelective(cart);

	}

	 
	public CartVo getByMSId(Long memberId) {

		CartVo cartVo = new CartVo();
		LinkedHashMap<Long, CartShopVo> cartShops = cartVo.getCartShops();

		List<Cart> shopList = cartMapper.getShopByMemberId(memberId);
		for (int i = 0; i < shopList.size(); i++) {
			Cart cartShop = shopList.get(i);
			Shop shop = cartShop.getShop();
			Long shopId = shop.getId();

			CartShopVo cartShopVo = new CartShopVo();
			cartShops.put(shopId, cartShopVo);

			cartShopVo.setShop(shop);
			LinkedHashMap<Long, DishItemVo> dishItems = cartShopVo.getDishItems();
			cartShopVo.setDishItems(dishItems);

			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("memberId", memberId);
			map.put("shopId", shopId);

			List<Cart> dishList = cartMapper.getDishBySMId(map);
			for (int j = 0; j < dishList.size(); j++) {
				Cart cartDish = dishList.get(j);
				Dish dish = cartDish.getDish();
				Long dishId = cartDish.getDishId();
				int num = cartDish.getNum();
				DishItemVo dishItemVo = new DishItemVo();
				dishItemVo.setDish(dish);
				dishItemVo.setNum(num);
				dishItems.put(dishId, dishItemVo);
			}
		}
		return cartVo;
	}

	 
	public void updateNum(Long memberId, Long dishId, int num) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("memberId", memberId);
		map.put("dishId", dishId);
		map.put("num", num);
		cartMapper.updateNum(map);
	}

	 
	public int getNumByMDId(Long memberId, Long dishId) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("memberId", memberId);
		map.put("dishId", dishId);
		Cart cart = cartMapper.getByMDId(map);
		int num = cart.getNum();
		return num;
	}

	 
	public void deleteByMDId(Long memberId, Long dishId) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("memberId", memberId);
		map.put("dishId", dishId);
		cartMapper.deleteByMDId(map);

	}

	 
	public int getTotalByMId(Long memberId) {
		int total = cartMapper.getTotalByMId(memberId);
		return total;
	}

	 
	public int getCheckedNum(Long memberId, Long dishId) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("memberId", memberId);
		map.put("dishId", dishId);
		int num = cartMapper.getCheckedNum(map);
		return num;
	}

	 
	public Cart getByMDId(Long memberId, Long dishId) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("memberId", memberId);
		map.put("dishId", dishId);
		Cart cart = cartMapper.getByMDId(map);
		return cart;
	}

	 
	public void update(Cart cart) {
		cartMapper.updateByPrimaryKeySelective(cart);
		
	}

	 
	public double getPriceByMDId(Long memberId, Long dishId) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("memberId", memberId);
		map.put("dishId", dishId);
		Cart cart = cartMapper.getByMDId(map);
		Double price = cart.getDish().getPrice();
		return price;
	}

}
