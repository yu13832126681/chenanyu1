package com.oos.service.impl;

import java.util.HashMap;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oos.mapper.MemberMapper;
import com.oos.mapper.SysUserMapper;
import com.oos.model.Member;
import com.oos.model.SysUser;
import com.oos.model.SysUserExample;
import com.oos.service.ManagerService;
import com.oos.util.EncryptUtil;
import com.oos.util.PageBean;

@Transactional(rollbackFor = Exception.class)
@Service
public class ManagerServiceImpl implements ManagerService {

	@Autowired
	private SysUserMapper managerMapper;
	@Autowired
	private MemberMapper memberMapper;

	// 管理员登陆
	
	public SysUser doLogin(SysUser manager) {
		String username = manager.getUsername();
		String password = manager.getPassword();
		// 校验页面填写的用户名和密码是否为空
		if (StringUtils.isEmpty(username) || StringUtils.isEmpty(password)) {
			return null;
		}
		// 比较两个密码是否相同
		SysUser managerOfDB = managerMapper.findByUsername(username);
		String passwordOfDB = managerOfDB.getPassword();
		password = EncryptUtil.md5(password);
		if (!password.equalsIgnoreCase(passwordOfDB)) {
			return null;
		}
		return managerOfDB;
	}

	// 获取member的分页列表
	
	public PageBean findByCondition(String username, int pageIndex, int pageSize) {
		int total = memberMapper.countByExample(null);

		PageBean pb = new PageBean(total, pageIndex, pageSize);

		pageIndex = pb.getPageIndex();
		pageSize = pb.getPageSize();

		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("orderByClause", "id");
		map.put("userName", username);
		map.put("start", pageIndex * pageSize);
		map.put("limit", pageSize);

		List<Member> list = memberMapper.findByCondition(map);
		pb.setData(list);

		return pb;
	}
}
