package com.oos.mapper;

import com.oos.model.Cart;
import com.oos.model.CartExample;

import java.util.HashMap;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface CartMapper {
	int countByExample(CartExample example);

	int deleteByExample(CartExample example);

	int deleteByPrimaryKey(Long id);

	int insert(Cart record);

	int insertSelective(Cart record);

	List<Cart> selectByExample(CartExample example);

	Cart selectByPrimaryKey(Long id);

	int updateByExampleSelective(@Param("record") Cart record, @Param("example") CartExample example);

	int updateByExample(@Param("record") Cart record, @Param("example") CartExample example);

	int updateByPrimaryKeySelective(Cart record);

	int updateByPrimaryKey(Cart record);

	List<Cart> selectPage(CartExample example);

	// 通过memberId查询cart中shop信息
	List<Cart> getShopByMemberId(Long memberId);

	// 通过memberId和shopId查询cart中dish信息
	List<Cart> getDishBySMId(HashMap<String, Object> map);

	// 修改数量(通过memberId和dishId)？
	void updateNum(HashMap<String, Object> map);

	// 获取购物车(通过memberId和dishId)
	Cart getByMDId(HashMap<String, Object> map);

	// 删除菜品(通过memberId和dishId)
	void deleteByMDId(HashMap<String, Object> map);

	// 获取购物车中菜品总数量(通过memberId)
	int getTotalByMId(Long memberId);

	// 获取已选择的菜品的数量(通过memberId和dishId)
	int getCheckedNum(HashMap<String, Object> map);
}