package com.oos.model;

import java.io.Serializable;
import java.util.Date;

public class Dish implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1773956094571775696L;

	private Long id;

	private Long shopId;

	private String dname;

	private String ddesc;

	private Integer status;

	private Integer isDeleted;

	private Double price;

	private Double coupon;

	private Date onSaleDate;

	private Date createTime;

	private Date modifyTime;

	// 添加shop属性
	private Shop shop;

	// 添加收藏状态属性
	private boolean favorite;

	public boolean isFavorite() {
		return favorite;
	}

	public void setFavorite(boolean favorite) {
		this.favorite = favorite;
	}

	public Shop getShop() {
		return shop;
	}

	public void setShop(Shop shop) {
		this.shop = shop;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getShopId() {
		return shopId;
	}

	public void setShopId(Long shopId) {
		this.shopId = shopId;
	}

	public String getDname() {
		return dname;
	}

	public void setDname(String dname) {
		this.dname = dname == null ? null : dname.trim();
	}

	public String getDdesc() {
		return ddesc;
	}

	public void setDdesc(String ddesc) {
		this.ddesc = ddesc == null ? null : ddesc.trim();
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getIsDeleted() {
		return isDeleted;
	}

	public void setIsDeleted(Integer isDeleted) {
		this.isDeleted = isDeleted;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Double getCoupon() {
		return coupon;
	}

	public void setCoupon(Double coupon) {
		this.coupon = coupon;
	}

	public Date getOnSaleDate() {
		return onSaleDate;
	}

	public void setOnSaleDate(Date onSaleDate) {
		this.onSaleDate = onSaleDate;
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
		return "Dish [id=" + id + ", shopId=" + shopId + ", dname=" + dname + ", ddesc=" + ddesc
				+ ", status=" + status + ", isDeleted=" + isDeleted + ", price=" + price
				+ ", coupon=" + coupon + ", onSaleDate=" + onSaleDate + ", createTime="
				+ createTime + ", modifyTime=" + modifyTime + ", shop=" + shop + ", favorite="
				+ favorite + "]";
	}

}