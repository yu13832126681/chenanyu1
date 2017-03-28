package com.oos.mapper;

import com.oos.model.Member;
import com.oos.model.MemberExample;
import com.oos.model.SysUser;

import java.util.HashMap;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MemberMapper {
	int countByExample(MemberExample example);

	int deleteByExample(MemberExample example);

	int deleteByPrimaryKey(Long id);

	int insert(Member record);

	int insertSelective(Member record);

	List<Member> selectByExample(MemberExample example);

	Member selectByPrimaryKey(Long id);

	int updateByExampleSelective(@Param("record") Member record,
			@Param("example") MemberExample example);

	int updateByExample(@Param("record") Member record, @Param("example") MemberExample example);

	int updateByPrimaryKeySelective(Member record);

	int updateByPrimaryKey(Member record);

	List<Member> selectPage(MemberExample example);

	// 通过username查询member信息
	Member findByUsername(String username);

	// 通过email查询member信息
	Member findByEmail(String email);

	// 通过条件查询member的分页列表
	List<Member> findByCondition(HashMap<String, Object> map);

}