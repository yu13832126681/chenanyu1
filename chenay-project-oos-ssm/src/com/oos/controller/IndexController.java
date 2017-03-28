package com.oos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	// 跳转到首页
	@RequestMapping("/index")
	public String index() {
		return "index";
	}
}
