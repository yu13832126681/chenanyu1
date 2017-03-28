package com.oos.mapper;

import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.oos.model.Emp;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:config/spring-*.xml")
public class EmpMapperTest {
	
	@Autowired
	private EmpMapper empMapper;
	
	public void setUp(){
		
	}

	@Test
	public void testCountByExample() {
		fail("Not yet implemented");
	}

	@Test
	public void testDeleteByExample() {
		fail("Not yet implemented");
	}

	@Test
	public void testDeleteByPrimaryKey() {
		fail("Not yet implemented");
	}

	@Test
	public void testInsert() {
		fail("Not yet implemented");
	}

	@Test
	public void testInsertSelective() {
		fail("Not yet implemented");
	}

	@Test
	public void testSelectByExample() {
		fail("Not yet implemented");
	}

	@Test
	public void testSelectByPrimaryKey() {
		fail("Not yet implemented");
	}

	@Test
	public void testUpdateByExampleSelective() {
		fail("Not yet implemented");
	}

	@Test
	public void testUpdateByExample() {
		fail("Not yet implemented");
	}

	@Test
	public void testUpdateByPrimaryKeySelective() {
		fail("Not yet implemented");
	}

	@Test
	public void testUpdateByPrimaryKey() {
		fail("Not yet implemented");
	}

	@Test
	public void testSelectPage() {
		fail("Not yet implemented");
	}

	@Test
	public void testSelectPageByCondition() {
		fail("Not yet implemented");
	}

	@Test
	public void testSelectPageByCondition2() {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("orderByClause", "id");
		map.put("pageIndex", 0);
		map.put("pageSize", 10);
		List<Emp> list = empMapper.selectPageByCondition2(map);
		System.out.println(list);
	}

}
