package com.oos.framwork;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

public class ContextPathInitServlet extends HttpServlet {
	private static final long serialVersionUID = 9154047903006043149L;
	
	private static final String CONTEXT_PATH_PARAM = "ctx";

	@Override
	public void init(ServletConfig config) throws ServletException {
		config.getServletContext().setAttribute(CONTEXT_PATH_PARAM,
				config.getServletContext().getContextPath());
	}
}
