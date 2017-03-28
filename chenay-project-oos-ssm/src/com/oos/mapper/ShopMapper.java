package com.oos.mapper;

import com.oos.model.Shop;
import com.oos.model.ShopExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ShopMapper {
	int countByExample(ShopExample example);

	int deleteByExample(ShopExample example);

	int deleteByPrimaryKey(Long id);

	int insert(Shop record);

	int insertSelective(Shop record);

	List<Shop> selectByExample(ShopExample example);

	Shop selectByPrimaryKey(Long id);

	int updateByExampleSelective(@Param("record") Shop record, @Param("example") ShopExample example);

	int updateByExample(@Param("record") Shop record, @Param("example") ShopExample example);

	int updateByPrimaryKeySelective(Shop record);

	int updateByPrimaryKey(Shop record);

	List<Shop> selectPage(ShopExample example);

	// 通过shopId获取shop信息（包含member属性）（未使用）
	Shop getById(Long id);

	// 通过MemberId获取shop信息
	Shop getByMemberId(Long memberId);
}