package com.oos.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oos.mapper.CommentMapper;
import com.oos.model.Comment;
import com.oos.service.CommentService;
import com.oos.util.PageBean;

@Transactional(rollbackFor = Exception.class)
@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentMapper commentMapper;

	 
	public PageBean getByPage(Long shopId, int pageIndex, int pageSize) {
		int total = commentMapper.getTotalByShopId(shopId);

		PageBean pb = new PageBean(total, pageIndex, pageSize);

		pageIndex = pb.getPageIndex();
		pageSize = pb.getPageSize();

		HashMap<String, Object> map = new HashMap<String, Object>();

		map.put("shopId", shopId);

		map.put("orderByClause", "id");
		map.put("start", pageIndex * pageSize);
		map.put("limit", pageSize);

		List<Comment> list = commentMapper.getByPage(map);

		pb.setData(list);

		return pb;

	}

	// 保存添加的评论
	 
	public void addSave(Comment comment) {
		commentMapper.insertSelective(comment);

	}

}
