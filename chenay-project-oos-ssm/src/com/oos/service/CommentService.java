package com.oos.service;

import com.oos.model.Comment;
import com.oos.util.PageBean;

public interface CommentService {
	
	// 获取评论的分页列表
	PageBean getByPage(Long shopId, int pageIndex, int pageSize);

	// 保存添加的评论
	void addSave(Comment comment);

}
