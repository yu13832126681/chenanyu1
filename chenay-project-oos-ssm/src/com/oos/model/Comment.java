package com.oos.model;

import java.util.Date;

import com.oos.model.Member;

public class Comment {
	private Long id;

	private Long dishId;

	private Long memberId;

	private Integer score;

	private String content;

	private Integer isDeleted;

	private Date writeTime;

	private Date modifyTime;

	// 添加Dish和Member属性
	private Member member;

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getDishId() {
		return dishId;
	}

	public void setDishId(Long dishId) {
		this.dishId = dishId;
	}

	public Long getMemberId() {
		return memberId;
	}

	public void setMemberId(Long memberId) {
		this.memberId = memberId;
	}

	public Integer getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content == null ? null : content.trim();
	}

	public Integer getIsDeleted() {
		return isDeleted;
	}

	public void setIsDeleted(Integer isDeleted) {
		this.isDeleted = isDeleted;
	}

	public Date getWriteTime() {
		return writeTime;
	}

	public void setWriteTime(Date writeTime) {
		this.writeTime = writeTime;
	}

	public Date getModifyTime() {
		return modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

	@Override
	public String toString() {
		return "Comment [id=" + id + ", dishId=" + dishId + ", memberId=" + memberId + ", score="
				+ score + ", content=" + content + ", isDeleted=" + isDeleted + ", writeTime="
				+ writeTime + ", modifyTime=" + modifyTime + ", member=" + member + "]";
	}

}