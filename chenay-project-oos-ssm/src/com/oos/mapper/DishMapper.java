package com.oos.mapper;

import com.oos.model.Dish;
import com.oos.model.DishExample;

import java.util.HashMap;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface DishMapper {
	int countByExample(DishExample example);

	int deleteByExample(DishExample example);

	int deleteByPrimaryKey(Long id);

	int insert(Dish record);

	int insertSelective(Dish record);

	List<Dish> selectByExample(DishExample example);

	Dish selectByPrimaryKey(Long id);

	int updateByExampleSelective(@Param("record") Dish record, @Param("example") DishExample example);

	int updateByExample(@Param("record") Dish record, @Param("example") DishExample example);

	int updateByPrimaryKeySelective(Dish record);

	int updateByPrimaryKey(Dish record);

	List<Dish> selectPage(DishExample example);

	// 通过shopId查询菜品数量
	int getTotalByShopId(Long shopId);

	// 查询店铺首页菜品的分页数据
	List<Dish> getByPage(HashMap<String, Object> map);

	// 通过shopId查询菜品数量，过滤掉已删除的和下架的菜品。
	int getTotalByCondition(HashMap<String, Object> map);

	// 查询店铺首页菜品的分页数据，过滤掉已删除的和下架的菜品。
	List<Dish> getByCondition(HashMap<String, Object> map);

	// 通过dishId查询dish和shop连表信息
	Dish getByDishId(Long dishId);
}