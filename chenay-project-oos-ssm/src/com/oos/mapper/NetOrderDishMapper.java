package com.oos.mapper;

import com.oos.model.NetOrderDish;
import com.oos.model.NetOrderDishExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface NetOrderDishMapper {
	int countByExample(NetOrderDishExample example);

	int deleteByExample(NetOrderDishExample example);

	int deleteByPrimaryKey(Long id);

	int insert(NetOrderDish record);

	int insertSelective(NetOrderDish record);

	List<NetOrderDish> selectByExample(NetOrderDishExample example);

	NetOrderDish selectByPrimaryKey(Long id);

	int updateByExampleSelective(@Param("record") NetOrderDish record,
			@Param("example") NetOrderDishExample example);

	int updateByExample(@Param("record") NetOrderDish record,
			@Param("example") NetOrderDishExample example);

	int updateByPrimaryKeySelective(NetOrderDish record);

	int updateByPrimaryKey(NetOrderDish record);

	List<NetOrderDish> selectPage(NetOrderDishExample example);

	// 根据netOrderId,查询订单购买项的表,获得订单购买项
	List<NetOrderDish> getByNetOrderId(Long netOrderId);
}