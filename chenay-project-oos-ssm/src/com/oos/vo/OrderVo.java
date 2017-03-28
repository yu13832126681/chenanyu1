package com.oos.vo;

import com.oos.model.Member;

public class OrderVo {

	private CartVo cart;
	private String address;
	private String receiver;

	private Member member;

	public CartVo getCart() {
		return cart;
	}

	public void setCart(CartVo cart) {
		this.cart = cart;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getReceiver() {
		return receiver;
	}

	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

	@Override
	public String toString() {
		return "OrderVo [cart=" + cart + ", address=" + address + ", receiver=" + receiver
				+ ", member=" + member + "]";
	}
}
