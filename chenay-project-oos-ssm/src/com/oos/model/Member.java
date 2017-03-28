package com.oos.model;

import java.util.Date;

public class Member {
	private Long id;

	private String username;

	private String password;

	private String email;

	private Integer isSeller;

	private Integer isForbidden;

	private Integer isFrozen;

	private Date regTime;

	private Date activateTime;

	private String loginIp;

	private Date loginTime;

	private Date modifyTime;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username == null ? null : username.trim();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password == null ? null : password.trim();
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email == null ? null : email.trim();
	}

	public Integer getIsSeller() {
		return isSeller;
	}

	public void setIsSeller(Integer isSeller) {
		this.isSeller = isSeller;
	}

	public Integer getIsForbidden() {
		return isForbidden;
	}

	public void setIsForbidden(Integer isForbidden) {
		this.isForbidden = isForbidden;
	}

	public Integer getIsFrozen() {
		return isFrozen;
	}

	public void setIsFrozen(Integer isFrozen) {
		this.isFrozen = isFrozen;
	}

	public Date getRegTime() {
		return regTime;
	}

	public void setRegTime(Date regTime) {
		this.regTime = regTime;
	}

	public Date getActivateTime() {
		return activateTime;
	}

	public void setActivateTime(Date activateTime) {
		this.activateTime = activateTime;
	}

	public String getLoginIp() {
		return loginIp;
	}

	public void setLoginIp(String loginIp) {
		this.loginIp = loginIp == null ? null : loginIp.trim();
	}

	public Date getLoginTime() {
		return loginTime;
	}

	public void setLoginTime(Date loginTime) {
		this.loginTime = loginTime;
	}

	public Date getModifyTime() {
		return modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

	@Override
	public String toString() {
		return "Member [id=" + id + ", username=" + username + ", password=" + password
				+ ", email=" + email + ", isSeller=" + isSeller + ", isForbidden=" + isForbidden
				+ ", isFrozen=" + isFrozen + ", regTime=" + regTime + ", activateTime="
				+ activateTime + ", loginIp=" + loginIp + ", loginTime=" + loginTime
				+ ", modifyTime=" + modifyTime + "]";
	}

}