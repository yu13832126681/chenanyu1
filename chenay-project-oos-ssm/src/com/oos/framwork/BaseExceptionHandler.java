package com.oos.framwork;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import com.oos.util.JacksonJsonUtil;

/**
 * <pre>
 * 全局的异常处理类
 * 区分ajax请求和普通请求
 * </pre>
 * 
 * 
 */
@Component
public class BaseExceptionHandler implements HandlerExceptionResolver {

	private static final Logger log = Logger
			.getLogger(BaseExceptionHandler.class);
	
	public ModelAndView resolveException(HttpServletRequest req,
			HttpServletResponse resp, Object obj, Exception ex) {
		// 输出日志信息
		if (log.isDebugEnabled()) {
			String message = String.format("请求路径%s,发生异常:\n",
					req.getRequestURI());
			log.debug(message);
			// StringBuilder sb = new StringBuilder();
			// StackTraceElement[] stackTrace = ex.getStackTrace();
			// for (int i = 0; i < stackTrace.length && i< 100; i++) {
			// StackTraceElement ele = stackTrace[i];
			// sb.append(ele.toString());
			// }
//			Writer result = new StringWriter();
//			PrintWriter printWriter = new PrintWriter(result);
//			ex.printStackTrace(printWriter);
//			log.debug(printWriter.toString());
			ex.printStackTrace();
		}
		// 如果是ajax请求
		if (req.getHeader("X-Requested-With") != null
				&& req.getHeader("X-Requested-With").indexOf("XMLHttpRequest") > -1) {
			AjaxResponseEntity are = new AjaxResponseEntity().setSuccess(false)
					.setMessage("操作失败");
			String json = JacksonJsonUtil.object2Json(are);
//			try {
//				resp.getWriter().write(json);
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//			return null;
			
			return new ModelAndView(Constants.ERROR_AJAX_PAGE,"json",json);
		}
		return null;
	}

}