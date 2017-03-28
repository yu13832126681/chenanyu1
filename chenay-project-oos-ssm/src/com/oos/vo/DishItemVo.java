package com.oos.vo;

import java.io.Serializable;

import com.oos.model.Dish;

public class DishItemVo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8820489566617370496L;

	// 订购的菜品
	private Dish dish;

	// 订购的数量
	private int num;

	public Dish getDish() {
		return dish;
	}

	public void setDish(Dish dish) {
		this.dish = dish;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	@Override
	public String toString() {
		return "DishItemVo [dish=" + dish + ", num=" + num + "]";
	}

}
