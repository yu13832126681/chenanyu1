package com.oos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.oos.framwork.BaseController;
import com.oos.model.Comment;
import com.oos.model.Member;
import com.oos.service.CommentService;
import com.oos.util.Constants;
import com.oos.util.PageBean;

@Controller
@RequestMapping("/comment")
public class CommentController extends BaseController {

	@Autowired
	private CommentService commentService;

	// 店铺首页获取评论分页数据
	@RequestMapping("/listData")
	// @ResponseBody
	public void listData(
			@RequestParam(value = "pageIndex", required = false, defaultValue = "0") int pageIndex,
			@RequestParam(value = "pageSize", required = false, defaultValue = "5") int pageSize,
			@RequestParam("shopId") Long shopId) {

		PageBean pb = commentService.getByPage(shopId, pageIndex, pageSize);

		responseAjax(pb);
	}

	// 保存添加的评论
	@RequestMapping("/addSave")
	public void addSave(Comment comment) {
		// 1.判断是否登陆
		Member member = (Member) getRequest().getSession()
				.getAttribute(Constants.MEMBER_IN_SESSION);
		if (member == null) {
			responseAjax(false, "请先登录", null);
			return;
		}
		// 2.保存评论内容
		String scoreStr = getRequest().getParameter("score");
		int score = Integer.parseInt(scoreStr);
		comment.setScore(score);
		comment.setIsDeleted(0);
		comment.setMemberId(member.getId());
		try {
			commentService.addSave(comment);
			responseAjax(true);
		} catch (Exception e) {
			// TODO: handle exception
		}

	}
}
