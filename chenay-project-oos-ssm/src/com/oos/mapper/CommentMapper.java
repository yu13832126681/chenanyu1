package com.oos.mapper;

import com.oos.model.Comment;
import com.oos.model.CommentExample;

import java.util.HashMap;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface CommentMapper {
	int countByExample(CommentExample example);

	int deleteByExample(CommentExample example);

	int deleteByPrimaryKey(Long id);

	int insert(Comment record);

	int insertSelective(Comment record);

	List<Comment> selectByExample(CommentExample example);

	Comment selectByPrimaryKey(Long id);

	int updateByExampleSelective(@Param("record") Comment record,
			@Param("example") CommentExample example);

	int updateByExample(@Param("record") Comment record, @Param("example") CommentExample example);

	int updateByPrimaryKeySelective(Comment record);

	int updateByPrimaryKey(Comment record);

	List<Comment> selectPage(CommentExample example);

	// 通过shopId查询评论的总数量
	int getTotalByShopId(Long shopId);

	// 查询店铺首页评论的分页数据
	List<Comment> getByPage(HashMap<String, Object> map);
}