package com.oos.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oos.mapper.DeptMapper;
import com.oos.model.Dept;
import com.oos.model.DeptExample;
import com.oos.service.DeptService;
import com.oos.util.PageBean;

@Transactional(rollbackFor = Exception.class)
@Service
public class DeptServiceImpl implements DeptService {

	@Autowired
	private DeptMapper deptMapper;

	 
	public List<Dept> getAll() {
		return deptMapper.selectByExample(null);
	}

	 
	public PageBean getByPage(int pageIndex, int pageSize) {
		DeptExample example = new DeptExample();
		int total = deptMapper.countByExample(null);
		PageBean pb = new PageBean(total, pageIndex, pageSize);
		example.setPageIndex(pb.getPageIndex() * pb.getPageSize());
		example.setPageSize(pb.getPageSize());
		List<Dept> list = deptMapper.selectPage(example);
		pb.setData(list);
		return pb;
	}

	 
	public void add(Dept dept) {
		deptMapper.insertSelective(dept);
	}

	 
	public void update(Dept dept) {
		deptMapper.updateByPrimaryKeySelective(dept);

	}

	 
	public Dept getByPK(Long id) {
		return deptMapper.selectByPrimaryKey(id);
	}

	 
	public void deleteByPK(Long id) {
		deptMapper.deleteByPrimaryKey(id);

	}

}
