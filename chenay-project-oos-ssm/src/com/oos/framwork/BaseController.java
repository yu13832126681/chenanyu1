package com.oos.framwork;

import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.ModelAttribute;

import com.oos.util.JacksonJsonUtil;

public class BaseController {

	private HttpServletRequest request;

	private HttpServletResponse response;

	/**
	 * <pre>
	 * 把@ModelAttribute放在方法的注解上的作用:
	 * 使得该Controller的所有方法在调用前，先执行此@ModelAttribute方法
	 * 
	 * 编写Controller继承BaseController就会先执行该方法,获得request,response
	 * </pre>
	 * 
	 * @param request
	 * @param response
	 */
	@ModelAttribute
	public void setReqAndRes(HttpServletRequest request,
			HttpServletResponse response) {
		this.request = request;
		this.response = response;
	}

	/**
	 * 获得HttpServletRequest
	 * 
	 * @return
	 */
	public HttpServletRequest getRequest() {
		return request;
	}

	/**
	 * 获得HttpServletResponse
	 * 
	 * @return
	 */
	public HttpServletResponse getResponse() {
		return response;
	}

	/**
	 * 获得HttpSession
	 * 
	 * @return
	 */
	public HttpSession getSession() {
		return this.request.getSession();
	}

	/**
	 * 获得ServletContext
	 * 
	 * @return
	 */
	public ServletContext getServletContext() {
		return getSession().getServletContext();
	}

	/**
	 * 获得web应用部署后的根目录的硬盘路径
	 * 
	 * @return
	 */
	public String getContextRealPath() {
		return getServletContext().getRealPath("/");
	}

	/**
	 * <pre>
	 * 获得web应用部署后的实际的硬盘路径
	 * path为从web根目录文件夹 开始算的路径
	 * </pre>
	 * 
	 * @return
	 */
	public String getContextRealPath(String path) {
		return getServletContext().getRealPath(path);
	}

	/**
	 * 服务端返回html内容
	 * @param html
	 */
	public void responseHtml(String html) {
		try {
			response.setContentType("text/html;charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(html);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 将对象转为json格式数据
	 * 
	 * @param response
	 * @param o
	 */
	public void responseAjax(Object o) {
		try {
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(JacksonJsonUtil.object2Json(o));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * <pre>
	 * 返回json格式的操作结果
	 * {"success":true|false,"message":"",data:{}}
	 * </pre>
	 * 
	 * @param success
	 * @param message
	 * @param data
	 */
	public void responseAjax(boolean success, String message,
			Map<String, Object> data) {
		AjaxResponseEntity are = new AjaxResponseEntity().setSuccess(success)
				.setMessage(message).setData(data);
		responseAjax(are);
	}

	public void responseAjaxSuccess() {
		AjaxResponseEntity are = new AjaxResponseEntity().setSuccess(true)
				.setMessage("操作成功");
		responseAjax(are);
	}

	public void responseAjaxFailure() {
		AjaxResponseEntity are = new AjaxResponseEntity().setSuccess(false)
				.setMessage("操作失败");
		responseAjax(are);
	}

	// /**
	// * 获得HttpServletRequest对象
	// * @return
	// */
	// public HttpServletRequest getRequest() {
	// return ((ServletRequestAttributes)
	// RequestContextHolder.getRequestAttributes()).getRequest();
	// }
	//
	// /**
	// * 获得HttpSession对象
	// * @return
	// */
	// public ServletContext getServletContext() {
	// return getRequest().getSession().getServletContext();
	// }
	//
	// /**
	// * 得到easyui分页的分页参数<br/>
	// * 返回int[],第1个是pageIndex,第2格式pageSize
	// *
	// * @return
	// */
	// public int[] getEasyuiPageParams(HttpServletRequest request) {
	// int pageIndex = 0;
	// int pageSize = 5;
	// String page = request.getParameter("pageIndex");
	// String rows = request.getParameter("pageSize");
	// try {
	// pageIndex = Integer.parseInt(page) - 1;
	// pageSize = Integer.parseInt(rows);
	// } catch (Exception e) {
	// }
	// return new int[] { pageIndex, pageSize };
	// }

}
