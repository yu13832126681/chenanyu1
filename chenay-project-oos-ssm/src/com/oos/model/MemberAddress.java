package com.oos.model;

public class MemberAddress {
    private Integer id;

    private Long memberId;

    private String receiver;

    private String address;

    private Integer isDefault;

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

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver == null ? null : receiver.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public Integer getIsDefault() {
        return isDefault;
    }

    public void setIsDefault(Integer isDefault) {
        this.isDefault = isDefault;
    }

	@Override
	public String toString() {
		return "MemberAddress [id=" + id + ", memberId=" + memberId + ", receiver=" + receiver
				+ ", address=" + address + ", isDefault=" + isDefault + "]";
	}
    
}