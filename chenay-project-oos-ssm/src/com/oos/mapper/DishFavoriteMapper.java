package com.oos.mapper;

import com.oos.model.DishFavorite;
import com.oos.model.DishFavoriteExample;

import java.util.HashMap;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface DishFavoriteMapper {
	int countByExample(DishFavoriteExample example);

	int deleteByExample(DishFavoriteExample example);

	int deleteByPrimaryKey(Long id);

	int insert(DishFavorite record);

	int insertSelective(DishFavorite record);

	List<DishFavorite> selectByExample(DishFavoriteExample example);

	DishFavorite selectByPrimaryKey(Long id);

	int updateByExampleSelective(@Param("record") DishFavorite record,
			@Param("example") DishFavoriteExample example);

	int updateByExample(@Param("record") DishFavorite record,
			@Param("example") DishFavoriteExample example);

	int updateByPrimaryKeySelective(DishFavorite record);

	int updateByPrimaryKey(DishFavorite record);

	List<DishFavorite> selectPage(DishFavoriteExample example);

	// 通过memberId获取菜品收藏数量
	int getTotalByMemberId(Long memberId);

	// 通过memberId获取菜品收藏分页数据
	List<DishFavorite> getPageByMemberId(HashMap<String, Object> map);

	// 取消收藏，通过memberId和dishId删除表中数据
	void deleteByMDId(HashMap<String, Object> map);

	// 查询是否被收藏通过memberId和dishId
	DishFavorite selectByMDId(HashMap<String, Object> map);
}