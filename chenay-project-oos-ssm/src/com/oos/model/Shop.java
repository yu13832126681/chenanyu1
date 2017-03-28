package com.oos.model;

import java.io.Serializable;
import java.util.Date;

public class Shop implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 6567713417360450815L;

	private Long id;

	private Long memberId;

	private String sname;

	private String address;

	private String tel;

	private Integer status;

	private Double freight;

	private Double freeFreightAmount;

	private Integer waitMinutes;

	private Date createTime;

	private Date modifyTime;

	// 增加Member属性
	private Member member;
	// 增加pic属性
	private String pic;

	public String getPic() {
		return pic;
	}

	public void setPic(String pic) {
		this.pic = pic;
	}

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

	public Long getMemberId() {
		return memberId;
	}

	public void setMemberId(Long memberId) {
		this.memberId = memberId;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname == null ? null : sname.trim();
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address == null ? null : address.trim();
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel == null ? null : tel.trim();
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Double getFreight() {
		return freight;
	}

	public void setFreight(Double freight) {
		this.freight = freight;
	}

	public Double getFreeFreightAmount() {
		return freeFreightAmount;
	}

	public void setFreeFreightAmount(Double freeFreightAmount) {
		this.freeFreightAmount = freeFreightAmount;
	}

	public Integer getWaitMinutes() {
		return waitMinutes;
	}

	public void setWaitMinutes(Integer waitMinutes) {
		this.waitMinutes = waitMinutes;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getModifyTime() {
		return modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

	@Override
	public String toString() {
		return "Shop [id=" + id + ", memberId=" + memberId + ", sname=" + sname + ", address="
				+ address + ", tel=" + tel + ", status=" + status + ", freight=" + freight
				+ ", freeFreightAmount=" + freeFreightAmount + ", waitMinutes=" + waitMinutes
				+ ", createTime=" + createTime + ", modifyTime=" + modifyTime + ", member="
				+ member + ", pic=" + pic + "]";
	}

}