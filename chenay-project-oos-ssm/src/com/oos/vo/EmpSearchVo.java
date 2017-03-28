package com.oos.vo;

import java.util.Date;


public class EmpSearchVo {

	private Long deptId;
	
	private String ename;
	
	private Integer gender;
	
	private Date birthdateMin;
	
	private Date birthdateMax;

	public Long getDeptId() {
		return deptId;
	}

	public void setDeptId(Long deptId) {
		this.deptId = deptId;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public Integer getGender() {
		return gender;
	}

	public void setGender(Integer gender) {
		this.gender = gender;
	}

	public Date getBirthdateMin() {
		return birthdateMin;
	}

	public void setBirthdateMin(Date birthdateMin) {
		this.birthdateMin = birthdateMin;
	}

	public Date getBirthdateMax() {
		return birthdateMax;
	}

	public void setBirthdateMax(Date birthdateMax) {
		this.birthdateMax = birthdateMax;
	}

	@Override
	public String toString() {
		return "EmpSearchVo [deptId=" + deptId + ", ename=" + ename
				+ ", gender=" + gender + ", birthdateMin=" + birthdateMin
				+ ", birthdateMax=" + birthdateMax + "]";
	}
	
}
