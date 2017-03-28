package com.oos.mapper;

import com.oos.model.ShopFavorite;
import com.oos.model.ShopFavoriteExample;

import java.util.HashMap;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ShopFavoriteMapper {
	int countByExample(ShopFavoriteExample example);

	int deleteByExample(ShopFavoriteExample example);

	int deleteByPrimaryKey(Integer id);

	int insert(ShopFavorite record);

	int insertSelective(ShopFavorite record);

	List<ShopFavorite> selectByExample(ShopFavoriteExample example);

	ShopFavorite selectByPrimaryKey(Integer id);

	int updateByExampleSelective(@Param("record") ShopFavorite record,
			@Param("example") ShopFavoriteExample example);

	int updateByExample(@Param("record") ShopFavorite record,
			@Param("example") ShopFavoriteExample example);

	int updateByPrimaryKeySelective(ShopFavorite record);

	int updateByPrimaryKey(ShopFavorite record);

	List<ShopFavorite> selectPage(ShopFavoriteExample example);

	// 通过memberId获取店铺收藏分页数据
	List<ShopFavorite> getByMemberId(Long memberId);

	// 取消收藏，通过memberId和shopId删除表中数据
	void deleteByMSId(HashMap<String, Object> map);

	// 通过memberId和shopId查找表中数据
	ShopFavorite getByMSId(HashMap<String, Object> map);
}