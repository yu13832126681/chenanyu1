package com.oos.model;

import java.io.Serializable;
import java.util.Date;

public class Dept implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 7798595179608666062L;

	private Long id;

    private String dname;

    private String ddesc;

    private String leader;

    private String loc;

    private Date createTime;

    private Date modifyTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getLeader() {
        return leader;
    }

    public void setLeader(String leader) {
        this.leader = leader == null ? null : leader.trim();
    }

    public String getLoc() {
        return loc;
    }

    public void setLoc(String loc) {
        this.loc = loc == null ? null : loc.trim();
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
		return "Dept [id=" + id + ", dname=" + dname + ", ddesc=" + ddesc
				+ ", leader=" + leader + ", loc=" + loc + ", createTime="
				+ createTime + ", modifyTime=" + modifyTime + "]";
	}
    
}