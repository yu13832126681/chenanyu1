package com.oos.controller;

import static org.junit.Assert.*;

import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
//import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

import com.oos.model.Dept;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({ "classpath:config/spring-*.xml",
		"classpath:config/springmvc-servlet.xml" })
@Transactional
public class DeptControllerTest {

	@Autowired
	private RequestMappingHandlerAdapter handler;

	@Autowired
	private DeptController deptController;

	@Test
	public void testList() {
		MockHttpServletRequest req = new MockHttpServletRequest();
		MockHttpServletResponse resp = new MockHttpServletResponse();
		req.setRequestURI("/dept/list");
		req.setMethod(HttpMethod.GET.name());
		try {
			HandlerMethod method = new HandlerMethod(deptController, "list",
					int.class, int.class, Model.class);
			ModelAndView mv = handler.handle(req, resp, method);
			System.out.println(mv.getViewName());
			Map<String, Object> model = mv.getModel();
			System.out.println(model);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Test
	public void testAdd() {
		fail("Not yet implemented");
	}

	@Test
	public void testAddSave() {
		MockHttpServletRequest req = new MockHttpServletRequest();
		MockHttpServletResponse resp = new MockHttpServletResponse();
		req.addParameter("dname", "test");
		req.addParameter("ddesc", "test");
		req.addParameter("leader", "test");
		req.addParameter("loc", "test");
		req.setRequestURI("/dept/addSave");
		req.addHeader("X-Requested-With", "XMLHttpRequest");
		req.setMethod(HttpMethod.POST.name());
		try {
			HandlerMethod method = new HandlerMethod(deptController, "addSave",
					Dept.class);
			handler.handle(req, resp, method);
			String content = resp.getContentAsString();
			System.out.println(content);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	@Test
	public void testEdit() {
		fail("Not yet implemented");
	}

	@Test
	public void testEditSave() {
		fail("Not yet implemented");
	}

	@Test
	public void testRemove() {
		fail("Not yet implemented");
	}

}
