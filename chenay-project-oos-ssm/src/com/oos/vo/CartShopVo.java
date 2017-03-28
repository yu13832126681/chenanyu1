package com.oos.vo;

import java.io.Serializable;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map.Entry;

import com.oos.model.Dish;
import com.oos.model.Shop;

public class CartShopVo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4275795866189108070L;

	// 单独的一个店铺的数据
	private Shop shop;

	// 单独一个店铺订购的菜品
	private LinkedHashMap<Long, DishItemVo> dishItems = new LinkedHashMap<Long, DishItemVo>();

	// 获取购物车中单独一个店铺中商品的中数量
	public Integer getTotalNum() {
		int totalNum = 0;
		for (Iterator<Entry<Long, DishItemVo>> iter = dishItems.entrySet().iterator(); iter
				.hasNext();) {
			Entry<Long, DishItemVo> next = iter.next();
			DishItemVo dishItemVo = next.getValue();
			int num = dishItemVo.getNum();
			totalNum += num;
		}
		return totalNum;
	}

	// 获取购物车中单独一个店铺中商品的总价格
	public Double getTotalPrice() {
		double totalPrice = 0;
		for (Iterator<Entry<Long, DishItemVo>> iter = dishItems.entrySet().iterator(); iter
				.hasNext();) {
			Entry<Long, DishItemVo> entry = iter.next();
			DishItemVo dishItemVo = entry.getValue();
			int num = dishItemVo.getNum();
			Dish dish = dishItemVo.getDish();
			Double price = dish.getPrice();
			totalPrice += num * price;
		}
		return totalPrice;
	}

	// 获取购物车中单独一个店铺的总运费
	public Double getTotalFrieght() {
		Double freeFreightAmount = shop.getFreeFreightAmount();
		// 当单独店铺 订购商品的总金额达到了免运费金额,就免运费,即运费为0
		if (getTotalPrice().doubleValue() >= freeFreightAmount.doubleValue()) {
			return 0d;
		}
		// 否则,返回店铺设置的运费
		return shop.getFreight();
	}

	// 获取key为String类型的dishItems
	public LinkedHashMap<String, DishItemVo> getDishItemsForStringKey() {
		LinkedHashMap<String, DishItemVo> map = new LinkedHashMap<String, DishItemVo>();
		for (Iterator<Entry<Long, DishItemVo>> iter = dishItems.entrySet().iterator(); iter
				.hasNext();) {
			Entry<Long, DishItemVo> dishEntry = iter.next();
			Long dishId = dishEntry.getKey();
			DishItemVo dishItem = dishEntry.getValue();
			map.put("" + dishId, dishItem);
		}
		return map;
	}

	// 以下是属性的getter,setter方法及toString方法
	public Shop getShop() {
		return shop;
	}

	public void setShop(Shop shop) {
		this.shop = shop;
	}

	public LinkedHashMap<Long, DishItemVo> getDishItems() {
		return dishItems;
	}

	public void setDishItems(LinkedHashMap<Long, DishItemVo> dishItems) {
		this.dishItems = dishItems;
	}

	@Override
	public String toString() {
		return "CartShopVo [shop=" + shop + ", dishItems=" + dishItems + "]";
	}

}
