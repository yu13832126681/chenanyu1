package com.oos.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oos.mapper.EmpMapper;
import com.oos.model.Emp;
import com.oos.service.EmpService;
import com.oos.util.PageBean;
import com.oos.vo.EmpSearchVo;

@Transactional(rollbackFor = Exception.class)
@Service
public class EmpServiceImpl implements EmpService {

	@Autowired
	private EmpMapper empMapper;

	
	public PageBean getByPage(int pageIndex, int pageSize) {
		int total = empMapper.countByExample(null);
		
		PageBean pb = new PageBean(total, pageIndex, pageSize);
		
		pageIndex = pb.getPageIndex();
		pageSize = pb.getPageSize();
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("orderByClause", "id");
		map.put("start", pageIndex * pageSize);
		map.put("limit", pageSize);
		List<Emp> list = empMapper.selectPageByCondition(map);
//		List<Emp> list = empMapper.selectPageByCondition2(map);
		
		pb.setData(list);
		
		return pb;
	}

	
	public PageBean getByPage(EmpSearchVo vo, int pageIndex, int pageSize) {
		int total = empMapper.countByExample(null);
		
		PageBean pb = new PageBean(total, pageIndex, pageSize);
		
		pageIndex = pb.getPageIndex();
		pageSize = pb.getPageSize();
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		map.put("vo", vo);//添加一行代码,传入查询条件封装的对象
		
		map.put("orderByClause", "id");
		map.put("start", pageIndex * pageSize);
		map.put("limit", pageSize);
		List<Emp> list = empMapper.selectPageByCondition(map);
		
		pb.setData(list);
		
		return pb;
	}
	
	
}
