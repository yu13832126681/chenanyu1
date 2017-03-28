package com.oos.service;

import com.oos.util.PageBean;
import com.oos.vo.EmpSearchVo;

public interface EmpService {

	PageBean getByPage(int pageIndex,int pageSize);
	PageBean getByPage(EmpSearchVo vo,int pageIndex,int pageSize);
}
