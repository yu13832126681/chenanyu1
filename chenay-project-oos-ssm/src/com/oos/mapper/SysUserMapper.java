package com.oos.mapper;

import com.oos.model.SysUser;
import com.oos.model.SysUserExample;

import java.util.HashMap;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SysUserMapper {
	int countByExample(SysUserExample example);

	int deleteByExample(SysUserExample example);

	int deleteByPrimaryKey(Long id);

	int insert(SysUser record);

	int insertSelective(SysUser record);

	List<SysUser> selectByExample(SysUserExample example);

	SysUser selectByPrimaryKey(Long id);

	int updateByExampleSelective(@Param("record") SysUser record,
			@Param("example") SysUserExample example);

	int updateByExample(@Param("record") SysUser record, @Param("example") SysUserExample example);

	int updateByPrimaryKeySelective(SysUser record);

	int updateByPrimaryKey(SysUser record);

	List<SysUser> selectPage(SysUserExample example);

	// 通过username查询manager信息
	SysUser findByUsername(String username);

}