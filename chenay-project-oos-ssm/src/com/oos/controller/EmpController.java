package com.oos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.oos.framwork.BaseController;
import com.oos.model.Dept;
import com.oos.service.DeptService;
import com.oos.service.EmpService;
import com.oos.util.PageBean;
import com.oos.vo.EmpSearchVo;

@Controller
@RequestMapping("/emp")
public class EmpController extends BaseController {

	@Autowired
	private EmpService empService;
	
	@Autowired
	private DeptService deptService;

	@RequestMapping("/list")
	public String list(
			@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
			@RequestParam(value = "pageSize", required = false, defaultValue = "10") int pageSize,
			EmpSearchVo searchVo,
			Model model) {
//		PageBean pb = empService.getByPage(pageIndex, pageSize);
		PageBean pb = empService.getByPage(searchVo,pageIndex, pageSize);
		model.addAttribute("pb", pb);
		model.addAttribute("emps", pb.getData());
		model.addAttribute("searchVo", searchVo);
		
		List<Dept> depts = deptService.getAll();
		model.addAttribute("depts", depts);
		
		return "emp/list";
	}
}
