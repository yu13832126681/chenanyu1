package com.oos.model;

import java.util.Date;
import java.util.List;

public class NetOrder {
	private Long id;

	private Long memberId;

	private Long shopId;

	private Integer qty;

	private Double total;

	private String address;

	private String receiver;

	private Double freight;

	private Date orderTime;

	private Integer status;

	// 增加订单购买项属性
	private List<NetOrderDish> netOrderDish;

	public List<NetOrderDish> getNetOrderDish() {
		return netOrderDish;
	}

	public void setNetOrderDish(List<NetOrderDish> netOrderDish) {
		this.netOrderDish = netOrderDish;
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

	public Long getShopId() {
		return shopId;
	}

	public void setShopId(Long shopId) {
		this.shopId = shopId;
	}

	public Integer getQty() {
		return qty;
	}

	public void setQty(Integer qty) {
		this.qty = qty;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address == null ? null : address.trim();
	}

	public String getReceiver() {
		return receiver;
	}

	public void setReceiver(String receiver) {
		this.receiver = receiver == null ? null : receiver.trim();
	}

	public Double getFreight() {
		return freight;
	}

	public void setFreight(Double freight) {
		this.freight = freight;
	}

	public Date getOrderTime() {
		return orderTime;
	}

	public void setOrderTime(Date orderTime) {
		this.orderTime = orderTime;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "NetOrder [id=" + id + ", memberId=" + memberId + ", shopId=" + shopId + ", qty="
				+ qty + ", total=" + total + ", address=" + address + ", receiver=" + receiver
				+ ", freight=" + freight + ", orderTime=" + orderTime + ", status=" + status
				+ ", NetOrderDish=" + netOrderDish + "]";
	}

}