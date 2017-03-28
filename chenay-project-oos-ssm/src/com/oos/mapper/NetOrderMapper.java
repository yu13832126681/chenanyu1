package com.oos.mapper;

import com.oos.model.NetOrder;
import com.oos.model.NetOrderExample;

import java.util.HashMap;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface NetOrderMapper {
	int countByExample(NetOrderExample example);

	int deleteByExample(NetOrderExample example);

	int deleteByPrimaryKey(Long id);

	int insert(NetOrder record);

	int insertSelective(NetOrder record);

	List<NetOrder> selectByExample(NetOrderExample example);

	NetOrder selectByPrimaryKey(Long id);

	int updateByExampleSelective(@Param("record") NetOrder record,
			@Param("example") NetOrderExample example);

	int updateByExample(@Param("record") NetOrder record, @Param("example") NetOrderExample example);

	int updateByPrimaryKeySelective(NetOrder record);

	int updateByPrimaryKey(NetOrder record);

	List<NetOrder> selectPage(NetOrderExample example);

	// 通过shopId查询店铺总销量（先查的是shopId对应的所有订单信息）
	List<NetOrder> getSaleNumByShopId(Long shopId);

	// 通过memberId查询订单数量
	int getTotalByMemberId(Long memberId);

	// 通过memberId查询所有订单的分页数据
	List<NetOrder> getOrderByPage(HashMap<String, Object> map);

}