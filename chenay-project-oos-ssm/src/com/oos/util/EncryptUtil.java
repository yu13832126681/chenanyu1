package com.oos.util;

import java.io.UnsupportedEncodingException;

import org.springframework.util.DigestUtils;

public class EncryptUtil {

	public static String md5(String str){
		try {
			String md5 = DigestUtils.md5DigestAsHex(str.getBytes("UTF-8"));
			return md5;
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException("md5加密字符串"+str+"失败");
		}
	}
}
