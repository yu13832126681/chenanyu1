package com.oos.service;

import com.oos.model.Dish;
import com.oos.model.Shop;
import com.oos.util.PageBean;

public interface DishService {

	// 获取店铺首页菜单的分页数据
	PageBean getByPage(Long shopId, int pageIndex, int pageSize);

	// 通过菜品id获取菜品
	Dish getById(Long id);

	// 查询店铺首页菜品的分页数据，过滤掉已删除的和下架的菜品。
	PageBean getByCondition(Long shopId, Integer isDeleted, Integer status, int pageIndex,
			int pageSize,Long memberId);

	// 保存添加的菜品数据
	void addSave(Dish dish);

	// 保存修改的菜品数据
	String update(Dish dish, Shop shop);

	// 删除菜品
	String delete(Long dishId, Shop shop);
}
