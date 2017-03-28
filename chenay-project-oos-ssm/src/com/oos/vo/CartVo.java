package com.oos.vo;

import java.io.Serializable;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map.Entry;

import com.oos.model.Dish;
import com.oos.model.Shop;

public class CartVo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1120448993840363085L;

	// 购物车中所有店铺
	private LinkedHashMap<Long, CartShopVo> cartShops = new LinkedHashMap<Long, CartShopVo>();

	// 获取购物车中菜品的总数量
	public Integer getTotalNum() {
		int totalNum = 0;
		for (Iterator<Entry<Long, CartShopVo>> iter = cartShops.entrySet().iterator(); iter
				.hasNext();) {
			Entry<Long, CartShopVo> next = iter.next();
			CartShopVo cartShopVo = next.getValue();
			Integer num = cartShopVo.getTotalNum();
			totalNum += num;
		}
		return totalNum;
	}

	// 获取购物车中菜品的总金额
	public Double getTotalPrice() {
		double totalPrice = 0;
		for (Iterator<Entry<Long, CartShopVo>> iter = cartShops.entrySet().iterator(); iter
				.hasNext();) {
			Entry<Long, CartShopVo> next = iter.next();
			CartShopVo cartShopVo = next.getValue();
			totalPrice += cartShopVo.getTotalPrice();
		}
		return totalPrice;
	}

	// 获取购物车中店铺的总运费
	public Double getTotalFreight() {
		double totalFreight = 0;
		for (Iterator<Entry<Long, CartShopVo>> iter = cartShops.entrySet().iterator(); iter
				.hasNext();) {
			Entry<Long, CartShopVo> next = iter.next();
			CartShopVo cartShopVo = next.getValue();
			totalFreight += cartShopVo.getTotalFrieght();
		}
		return totalFreight;
	}

	// 获取订单总金额（菜品总价+运费）
	public Double getOrderAmount() {
		return getTotalPrice() + getTotalFreight();
	}

	// 在购物车中添加菜品（可以增加和减少）
	public String addDishItem(Shop shop, Dish dish, int num) {
		Long shopId = shop.getId();
		CartShopVo cartShopVo = cartShops.get(shopId);
		if (cartShopVo == null) {
			cartShopVo = new CartShopVo();
			cartShopVo.setShop(shop);
			cartShops.put(shopId, cartShopVo);
		}
		LinkedHashMap<Long, DishItemVo> dishItems = cartShopVo.getDishItems();
		Long dishId = dish.getId();
		DishItemVo dishItemVo = dishItems.get(dishId);
		if (dishItemVo == null) {
			if (num <= 0) {
				return "不支持当前操作";
			}
			dishItemVo = new DishItemVo();
			dishItemVo.setDish(dish);
			dishItemVo.setNum(num);

			dishItems.put(dishId, dishItemVo);
		} else {
			int oldNum = dishItemVo.getNum();
			int newNum = oldNum + num;
			if (newNum < 1) {
				return "不支持当前操作";
			}
			dishItemVo.setNum(newNum);
		}
		return null;
	}

	// 删除购物车中的菜品
	public String removeDishItem(Shop shop, Dish dish) {
		Long shopId = shop.getId();
		CartShopVo cartShopVo = cartShops.get(shopId);
		if (cartShopVo == null) {
			return "亲,操作失败,请尝试刷新页面";
		}
		LinkedHashMap<Long, DishItemVo> dishItems = cartShopVo.getDishItems();
		Long dishId = dish.getId();
		dishItems.remove(dishId);
		if (dishItems.isEmpty()) {
			cartShops.remove(shopId);
		}
		return null;
	}

	// 获取key为String类型的cartShops
	public LinkedHashMap<String, CartShopVo> getShopItemsForStringKey() {
		LinkedHashMap<String, CartShopVo> map = new LinkedHashMap<String, CartShopVo>();
		for (Iterator<Entry<Long, CartShopVo>> iter = cartShops.entrySet().iterator(); iter
				.hasNext();) {
			Entry<Long, CartShopVo> shopEntry = iter.next();
			Long shopId = shopEntry.getKey();
			CartShopVo shopVo = shopEntry.getValue();
			map.put("" + shopId, shopVo);
		}
		return map;
	}

	// 以下是属性的getter,setter方法及toString方法
	public LinkedHashMap<Long, CartShopVo> getCartShops() {
		return cartShops;
	}

	public void setCartShops(LinkedHashMap<Long, CartShopVo> cartShops) {
		this.cartShops = cartShops;
	}

	@Override
	public String toString() {
		return "CartVo [cartShops=" + cartShops + "]";
	}

}
