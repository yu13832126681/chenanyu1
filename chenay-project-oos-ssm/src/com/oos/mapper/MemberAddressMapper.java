package com.oos.mapper;

import com.oos.model.MemberAddress;
import com.oos.model.MemberAddressExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MemberAddressMapper {
	int countByExample(MemberAddressExample example);

	int deleteByExample(MemberAddressExample example);

	int deleteByPrimaryKey(Integer id);

	int insert(MemberAddress record);

	int insertSelective(MemberAddress record);

	List<MemberAddress> selectByExample(MemberAddressExample example);

	MemberAddress selectByPrimaryKey(Integer id);

	int updateByExampleSelective(@Param("record") MemberAddress record,
			@Param("example") MemberAddressExample example);

	int updateByExample(@Param("record") MemberAddress record,
			@Param("example") MemberAddressExample example);

	int updateByPrimaryKeySelective(MemberAddress record);

	int updateByPrimaryKey(MemberAddress record);

	List<MemberAddress> selectPage(MemberAddressExample example);

	// 通过memberId获取地址的列表信息
	List<MemberAddress> getByMemberId(Long memberId);

	// 取消默认地址
	void deleteDefault(Integer isDefault);
}