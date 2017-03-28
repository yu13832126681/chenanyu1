package com.oos.framwork;

import java.util.Date;

import org.springframework.core.convert.converter.Converter;

import com.oos.util.DateFormatUtil;

public class DateConvertor implements Converter<String, Date> {

	public Date convert(String text) {
		if (text == null) {
			return null;
		}
		text = text.trim();
		try {
			if (DateFormatUtil.YYYY_MM_DD.length() == text.length()) {
				return DateFormatUtil.getYmdFormat().parse(text);
			}

			if (DateFormatUtil.YYYY_MM_DD_HH_MM_SS.length() == text.length()) {
				return DateFormatUtil.getYmdHmsFormat().parse(text);
			}

		} catch (Exception e) {

		}
		return null;
	}

}
