package com.oos.util;

import java.io.StringWriter;
import java.text.SimpleDateFormat;

import org.codehaus.jackson.map.ObjectMapper;

public class JacksonJsonUtil {

	private static final ThreadLocal<ObjectMapper> om = new ThreadLocal<ObjectMapper>() {

		@Override
		protected ObjectMapper initialValue() {
			return getObjectMapper();
		}

	};

	private static ObjectMapper getObjectMapper() {
		ObjectMapper inst = new ObjectMapper();
		inst.setDateFormat(DateFormatUtil.getYmdHmsFormat());
		return inst;
	}

	public static String object2Json(Object o) {
		return object2Json(o, null);
	}

	public static <T> T json2Object(String json, Class<T> clazz) {
		return json2Object(json, clazz, null);
	}

	/**
	 * 将对象转变为json字符串
	 * 
	 * @param o
	 * @param datePattern 时间格式
	 * @return
	 */
	public static String object2Json(Object o, String datePattern) {
		ObjectMapper objectMapper = om.get();
		if (datePattern != null) {
			SimpleDateFormat df = DateFormatUtil.getDateFormat(datePattern);
			objectMapper.setDateFormat(df);
		}
		StringWriter sw = new StringWriter();
		try {
			om.get().writeValue(sw, o);
			String json = sw.toString();
			return json;
		} catch (Exception e) {
			return null;
		} finally {
			if (datePattern != null) {
				objectMapper.setDateFormat(DateFormatUtil.getYmdHmsFormat());
			}
		}
	}

	/**
	 * 将json字符串转变为对象
	 * 
	 * @param json
	 * @param clazz
	 *            对象类型
	 * @param datePattern 时间格式
	 * @return
	 */
	public static <T> T json2Object(String json, Class<T> clazz,
			String datePattern) {
		ObjectMapper objectMapper = om.get();
		if (datePattern != null) {
			SimpleDateFormat df = DateFormatUtil.getDateFormat(datePattern);
			objectMapper.setDateFormat(df);
		}
		try {
			T obj = objectMapper.readValue(json, clazz);
			return obj;
		} catch (Exception e) {
			throw new RuntimeException(
					"JacksonJsonUtil call json2Object failed ");
		} finally {
			if (datePattern != null) {
				objectMapper.setDateFormat(DateFormatUtil.getYmdHmsFormat());
			}
		}
	}
}
