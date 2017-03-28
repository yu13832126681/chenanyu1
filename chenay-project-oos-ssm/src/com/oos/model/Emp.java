package com.oos.model;

import java.io.Serializable;
import java.util.Date;

public class Emp implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = -4837262296545530734L;

	private Long id;

    private Long deptId;

    private String ename;

    private Integer gender;

    private Date birthdate;

    private String skill;

    private Date enterDate;

    private Date createTime;

    private Date modifyTime;
    
    private Dept dept;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
        this.ename = ename == null ? null : ename.trim();
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill == null ? null : skill.trim();
    }

    public Date getEnterDate() {
        return enterDate;
    }

    public void setEnterDate(Date enterDate) {
        this.enterDate = enterDate;
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
    
	public Dept getDept() {
		return dept;
	}

	public void setDept(Dept dept) {
		this.dept = dept;
	}

	@Override
	public String toString() {
		return "Emp [id=" + id + ", deptId=" + deptId + ", ename=" + ename
				+ ", gender=" + gender + ", birthdate=" + birthdate
				+ ", skill=" + skill + ", enterDate=" + enterDate
				+ ", createTime=" + createTime + ", modifyTime=" + modifyTime
				+ ", dept=" + dept + "]";
	}

}