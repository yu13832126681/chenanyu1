<%@page import="java.io.PrintWriter"%>
<%@page import="java.io.StringWriter"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isErrorPage="true"%>
<%if(exception==null){
	ErrorData ed = pageContext.getErrorData();
	if(ed!=null){
		out.println(ed.getStatusCode()+" NOT FOUND<hr>");
		out.println("请求路径"+ed.getRequestURI()+"<br/>");
	}	
}else{%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>服务器出现异常</title>
</head>
<body>
	出错了！
	<% 
	ErrorData ed = pageContext.getErrorData();
	if(ed!=null){
		out.println(ed.getStatusCode()+" NOT FOUND<hr>");
		out.println("请求路径"+ed.getRequestURI()+"<br/>");
	}
	%>
	<br> 发生了以下的错误：
	<hr>
	<font color=red>
		<hr> getMessage():<br> <%=exception.getMessage()%><br>
		<hr> getLocalizedMessage():<br> <%=exception.getLocalizedMessage()%><br>
		<hr> PrintStatckTrace():<br> 
	<%
	 	StringWriter sw = new StringWriter();
	 	PrintWriter pw = new PrintWriter(sw);
	 	exception.printStackTrace(pw);
	 	out.println(sw);
	 %>
 	<br/> 
 	</font>
	
</body>
</html>
<%}%>