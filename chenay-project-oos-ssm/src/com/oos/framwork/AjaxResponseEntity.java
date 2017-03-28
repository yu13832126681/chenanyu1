package com.oos.framwork;

import java.util.HashMap;
import java.util.Map;

/**
 * ajax请求返回结果的数据包装类
 * 
 *
 */
public class AjaxResponseEntity {

	private Boolean success;

	private String message;

	private Map<String, Object> data;

	public Boolean getSuccess() {
		return success;
	}

	public AjaxResponseEntity setSuccess(Boolean success) {
		this.success = success;
		return this;
	}

	public String getMessage() {
		return message;
	}

	public AjaxResponseEntity setMessage(String message) {
		this.message = message;
		return this;
	}

	public Map<String, Object> getData() {
		return data;
	}

	public AjaxResponseEntity setData(Map<String, Object> data) {
		this.data = data;
		return this;
	}

	public AjaxResponseEntity addData(String name, Object value) {
		if (data == null) {
			data = new HashMap<String, Object>();
		}
		data.put(name, value);
		return this;
	}

	@Override
	public String toString() {
		return "AjaxResponseEntity [success=" + success + ", message="
				+ message + ", data=" + data + "]";
	}

}
