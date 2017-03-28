package com.oos.service;

import com.oos.model.Cart;
import com.oos.vo.CartVo;

public interface CartService {
	// 添加到购物车
	void addToCart(Cart cart);

	// 获取购物车数据
	CartVo getByMSId(Long memberId);

	// 修改数量(通过memberId和dishId)？
	void updateNum(Long memberId, Long dishId, int num);

	// 修改购物车
	void update(Cart cart);

	// 获取数量(通过memberId和dishId)
	int getNumByMDId(Long memberId, Long dishId);

	// 删除菜品(通过memberId和dishId)
	void deleteByMDId(Long memberId, Long dishId);

	// 获取购物车中菜品总数量(通过memberId)
	int getTotalByMId(Long memberId);

	// 获取已选择的菜品的数量(通过memberId和dishId)(没使用)
	int getCheckedNum(Long memberId, Long dishId);

	// 获取购物车(通过memberId和dishId)
	Cart getByMDId(Long memberId, Long dishId);

	// 获取价格(通过memberId和dishId)
	double getPriceByMDId(Long memberId, Long dishId);
}
