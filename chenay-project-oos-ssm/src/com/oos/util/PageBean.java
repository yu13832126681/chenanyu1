package com.oos.util;

import java.util.ArrayList;
import java.util.List;

public class PageBean {

	/**
	 * 记录总条数
	 */
	private int total;

	/**
	 * 总页数
	 */
	private int totalPage;

	/**
	 * 当前页码,从0数数
	 */
	private int pageIndex;

	/**
	 * 每页记录条数
	 */
	private int pageSize;

	/**
	 * 上一页页码
	 */
	private int previousIndex;

	/**
	 * 下一页页码
	 */
	private int nextPageIndex;

	/**
	 * 尾页页码
	 */
	private int lastPageIndex;

	/**
	 * 分页的记录数据
	 */
	private List<?> data = new ArrayList<Object>();

	public PageBean(int total, int pageIndex, int pageSize) {
		super();
		this.total = total;
		this.pageIndex = pageIndex;
		this.pageSize = pageSize;
		if (total == 0) {
			this.totalPage = 0;
			this.pageIndex = 0;
			this.nextPageIndex = 0;
			this.lastPageIndex = 0;
			return;
		}
		this.totalPage = total % pageSize == 0 ? (int) (total / pageSize)
				: (int) (total / pageSize) + 1;
		this.pageIndex = pageIndex > totalPage - 1 ? totalPage - 1 : pageIndex;
		this.lastPageIndex = totalPage - 1;
		this.nextPageIndex = pageIndex + 1 > totalPage - 1 ? totalPage - 1
				: pageIndex + 1;
		this.previousIndex = pageIndex - 1 < 0 ? 0 : pageIndex - 1;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public int getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPreviousIndex() {
		return previousIndex;
	}

	public void setPreviousIndex(int previousIndex) {
		this.previousIndex = previousIndex;
	}

	public int getNextPageIndex() {
		return nextPageIndex;
	}

	public void setNextPageIndex(int nextPageIndex) {
		this.nextPageIndex = nextPageIndex;
	}

	public int getLastPageIndex() {
		return lastPageIndex;
	}

	public void setLastPageIndex(int lastPageIndex) {
		this.lastPageIndex = lastPageIndex;
	}

	public List<?> getData() {
		return data;
	}

	public void setData(List<?> data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "PageBean [total=" + total + ", totalPage=" + totalPage
				+ ", pageIndex=" + pageIndex + ", pageSize=" + pageSize
				+ ", previousIndex=" + previousIndex + ", nextPageIndex="
				+ nextPageIndex + ", lastPageIndex=" + lastPageIndex
				+ ", data=" + data + "]";
	}

}
