package com.oos.service;

import java.util.List;

import com.oos.model.Dept;
import com.oos.util.PageBean;

public interface DeptService {

	List<Dept> getAll();
	
	Dept getByPK(Long id);
	
	PageBean getByPage(int pageIndex,int pageSize);
	
	void add(Dept dept);
	
	void update(Dept dept);
	
	void deleteByPK(Long id);
}
