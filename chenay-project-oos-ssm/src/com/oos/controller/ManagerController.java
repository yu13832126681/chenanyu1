package com.oos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.oos.framwork.BaseController;
import com.oos.model.Member;
import com.oos.model.SysUser;
import com.oos.service.ManagerService;
import com.oos.util.Constants;
import com.oos.util.PageBean;

@Controller
@RequestMapping("/manager")
public class ManagerController extends BaseController {

	@Autowired
	private ManagerService managerService;

	// 跳转到登陆页面
	@RequestMapping("/login")
	public String login() {
		// 清除session中的登陆用的验证码
		getRequest().getSession().removeAttribute(Constants.LOGIN_VERIFY_CODE);
		return "manager/login";
	}

	// 登陆，保存管理员信息到session
	@RequestMapping("/doLogin")
	public void doLogin(SysUser sysUser) {
		// 1.校验验证码（前台错误三次才后有验证码）
		String verifyCodeSession = (String) getRequest().getSession().getAttribute(
				Constants.LOGIN_VERIFY_CODE);
		if (verifyCodeSession != null) {
			String verifyCode = getRequest().getParameter("verifycode");
			if (verifyCode == null || !verifyCode.equalsIgnoreCase(verifyCodeSession)) {
				responseAjax(false, "登陆失败,验证码不正确", null);
				return;
			}
		}
		// 2.登陆，获取管理员信息存入session
		SysUser managerOfDB = managerService.doLogin(sysUser);
		if (managerOfDB == null) {
			responseAjax(false, "用户名或密码不正确", null);
			return;
		}
		getRequest().getSession().setAttribute(Constants.MANAGER_IN_SESSION, managerOfDB);
		responseAjax(true, "登录成功", null);
		return;
	}

	// 登陆成功后跳转到会员信息页面
	@RequestMapping("/memberList")
	public String memberList() {

		return "manager/memberList";
	}

	// 加载会员信息分页数据
	@RequestMapping("/memberListData")
	@ResponseBody
	public PageBean memberListData(
			@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
			@RequestParam(value = "pageSize", required = false, defaultValue = "10") int pageSize,
			@RequestParam(value = "username", required = false) String username) {
		if (username == "") {
			username = null;
		}
		PageBean pb = managerService.findByCondition(username, pageIndex, pageSize);
		return pb;
	}

	// 注销，从session中删除用户信息
	@RequestMapping("/logout")
	public String logout() {
		getRequest().getSession().removeAttribute(Constants.MANAGER_IN_SESSION);
		return "index";
	}

	// 跳转到申请店铺提交材料页面
	@RequestMapping("/applyShop")
	public String applyShop() {
		// 1.校验是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			String loginPath = getRequest().getContextPath() + "/member/login";
			String html = "<script  language='javascript'>window.top.location='" + loginPath
					+ "'</script>";
			responseHtml(html);
			return null;
		}
		return "manager/applyShop";
	}
}
