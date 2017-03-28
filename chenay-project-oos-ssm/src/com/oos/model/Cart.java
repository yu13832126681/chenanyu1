package com.oos.model;

public class Cart {
	private Long id;

	private Long memberId;

	private Long shopId;

	private Long dishId;

	private Integer num;

	// 添加shop属性
	private Shop shop;
	// 添加dish属性
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

	public Long getMemberId() {
		return memberId;
	}

	public void setMemberId(Long memberId) {
		this.memberId = memberId;
	}

	public Long getShopId() {
		return shopId;
	}

	public void setShopId(Long shopId) {
		this.shopId = shopId;
	}

	public Long getDishId() {
		return dishId;
	}

	public void setDishId(Long dishId) {
		this.dishId = dishId;
	}

	public Integer getNum() {
		return num;
	}

	public void setNum(Integer num) {
		this.num = num;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + ", memberId=" + memberId + ", shopId=" + shopId + ", dishId="
				+ dishId + ", num=" + num + ", shop=" + shop + ", dish=" + dish + "]";
	}

}