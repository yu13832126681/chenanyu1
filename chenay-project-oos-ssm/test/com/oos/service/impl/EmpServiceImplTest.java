package com.oos.service.impl;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.oos.service.EmpService;
import com.oos.util.PageBean;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:config/spring-*.xml")
public class EmpServiceImplTest {
	
	@Autowired
	private EmpService empService;

	@Test
	public void testGetByPageIntInt() {
		PageBean pb = empService.getByPage(0, 10);
		System.out.println(pb);
	}

	@Test
	public void testGetByPageEmpSearchVoIntInt() {
		fail("Not yet implemented");
	}

}
