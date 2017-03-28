package com.oos.service;

import com.oos.model.SysUser;
import com.oos.util.PageBean;

public interface ManagerService {

	// 管理员登陆
	SysUser doLogin(SysUser manager);

	// 获取member的分页列表
	PageBean findByCondition(String username, int pageIndex, int pageSize);
}
