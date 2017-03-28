package com.oos.model;

public class NetOrderDish {
	private Long id;

	private Long shopId;

	private Long orderId;

	private Long dishId;

	private Double price;

	private Integer qty;

	// 添加实体类属性
	private Shop shop;
	private Dish dish;

	public Shop getShop() {
		return shop;
	}

	public void setShop(Shop shop) {
		this.shop = shop;
	}

	public Dish getDish() {
		return dish;
	}

	public void setDish(Dish dish) {
		this.dish = dish;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getShopId() {
		return shopId;
	}

	public void setShopId(Long shopId) {
		this.shopId = shopId;
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

	public Long getDishId() {
		return dishId;
	}

	public void setDishId(Long dishId) {
		this.dishId = dishId;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getQty() {
		return qty;
	}

	public void setQty(Integer qty) {
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "NetOrderDish [id=" + id + ", shopId=" + shopId + ", orderId=" + orderId
				+ ", dishId=" + dishId + ", price=" + price + ", qty=" + qty + ", shop=" + shop
				+ ", dish=" + dish + "]";
	}

}