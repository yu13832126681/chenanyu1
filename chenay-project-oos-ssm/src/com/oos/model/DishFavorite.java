package com.oos.model;

public class DishFavorite {
	private Long id;

	private Long memberId;

	private Long dishId;

	// 添加dish属性
	private Dish dish;

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

	public Long getDishId() {
		return dishId;
	}

	public void setDishId(Long dishId) {
		this.dishId = dishId;
	}

	@Override
	public String toString() {
		return "DishFavorite [id=" + id + ", memberId=" + memberId + ", dishId=" + dishId
				+ ", dish=" + dish + "]";
	}

}