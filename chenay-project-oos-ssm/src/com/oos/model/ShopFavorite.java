package com.oos.model;

public class ShopFavorite {
	private Integer id;

	private Long memberId;

	private Long shopId;

	// 添加shop属性
	private Shop shop;

	public Shop getShop() {
		return shop;
	}

	public void setShop(Shop shop) {
		this.shop = shop;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Long getMemberId() {
		return memberId;
	}

	public void setMemberId(Long memberId) {
		this.memberId = memberId;
	}

	public Long getShopId() {
		return shopId;
	}

	public void setShopId(Long shopId) {
		this.shopId = shopId;
	}

	@Override
	public String toString() {
		return "ShopFavorite [id=" + id + ", memberId=" + memberId + ", shopId=" + shopId
				+ ", shop=" + shop + "]";
	}

}