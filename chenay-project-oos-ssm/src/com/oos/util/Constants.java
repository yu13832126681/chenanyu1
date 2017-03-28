package com.oos.util;

/**
 * <pre>
 * 常量接口,
 * 用于存放项目中用到的常量
 * </pre>
 * 
 * @author Administrator
 * 
 */
public interface Constants {

	/**
	 * 注册时验证码在session中存储的名称
	 */
	String REG_VERIFY_CODE = "session_reg_verifycode";
	/**
	 * 登录时验证码在session中存储的名称
	 */
	String LOGIN_VERIFY_CODE = "session_login_verifycode";

	/**
	 * v7. 找回密码时验证码在session中存储的名称
	 */
	String FETCH_PWD_VERIFY_CODE = "session_fetch_pwd_verifycode";
	/**
	 * 登录之后在session存储会员数据的名称
	 */
	String MEMBER_IN_SESSION = "session_member";

	/**
	 * 在session存储购物车数据的名称
	 */
	String SESSION_CART = "cart";

	/**
	 * 重置密码时使用的秘钥明文
	 */
	String RESET_PWD_KEY = "p2&5*(3%!t^y#j9o";
	/**
	 * 重置密码时链接的失效时间(单位天)
	 */
	long RESET_PWD_EXPIRE = 3;

	/**
	 * 当前web应用的域名
	 */
	String DN = "";

	/**
	 * 发送邮件的邮件服务器
	 */
	String EMAIL_HOST = "smtp.tom.com";
	/**
	 * 发送邮件的邮件用户名
	 */
	String EMAIL_USERNAME = "oos2016@tom.com";
	/**
	 * 发送邮件的邮件密码
	 */
	String EMAIL_PASSWORD = "oos20162016";

	// *储存未确认的订单
	String SESSION_ORDER = "session_order";

	// *登录之后在session存储管理员数据的名称
	String MANAGER_IN_SESSION = "session_manager";
}
