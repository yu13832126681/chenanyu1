package com.oos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.oos.framwork.AjaxResponseEntity;
import com.oos.framwork.BaseController;
import com.oos.model.Dept;
import com.oos.service.DeptService;
import com.oos.util.PageBean;

@Controller
@RequestMapping("/dept")
public class DeptController extends BaseController {

	@Autowired
	private DeptService deptService;

	@RequestMapping("/list")
	public String list(
			@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
			@RequestParam(value = "pageSize", required = false, defaultValue = "10") int pageSize,
			Model model) {
		PageBean pb = deptService.getByPage(pageIndex, pageSize);
		model.addAttribute("pb", pb);
		model.addAttribute("depts", pb.getData());
		return "dept/list";
	}

	@RequestMapping("/list1")
	public String list1(
			@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
			@RequestParam(value = "pageSize", required = false, defaultValue = "10") int pageSize,
			Model model) {
		PageBean pb = deptService.getByPage(pageIndex, pageSize);
		model.addAttribute("pb", pb);
		model.addAttribute("depts", pb.getData());
		return "dept/list1";
	}

	@RequestMapping("/add")
	public String add() {
		return "dept/add";
	}

	@RequestMapping("/add1")
	public String add1() {
		return "dept/add1";
	}

	@RequestMapping("/addSave")
	@ResponseBody
	public AjaxResponseEntity addSave(Dept dept) {
		deptService.add(dept);
		return new AjaxResponseEntity().setSuccess(true).setMessage("操作成功");
	}

	@RequestMapping("/edit")
	public String edit(@RequestParam("id") Long id, Model model) {
		Dept dept = deptService.getByPK(id);
		model.addAttribute("dept", dept);
		return "dept/edit";
	}

	@RequestMapping("/edit1")
	public String edit1(@RequestParam("id") Long id, Model model) {
		Dept dept = deptService.getByPK(id);
		model.addAttribute("dept", dept);
		return "dept/edit1";
	}

	@RequestMapping("editSave")
	@ResponseBody
	public AjaxResponseEntity editSave(Dept dept) {
		deptService.update(dept);
		return new AjaxResponseEntity().setSuccess(true).setMessage("操作成功");
	}

	@RequestMapping("remove")
	@ResponseBody
	public AjaxResponseEntity remove(@RequestParam("id") Long id) {
		deptService.deleteByPK(id);
		return new AjaxResponseEntity().setSuccess(true).setMessage("操作成功");
	}

}
