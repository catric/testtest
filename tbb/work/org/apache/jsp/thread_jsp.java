/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.52
 * Generated at: 2015-01-24 04:34:28 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import com.tbb.forum.*;

public final class thread_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
 String sessionUsername = (String)session.getAttribute("username"); 
      out.write('\r');
      out.write('\n');
 String sessionPassword = (String)session.getAttribute("password"); 
      out.write('\r');
      out.write('\n');
 String sessionType = (String)session.getAttribute("type"); 
      out.write("\r\n");
      out.write("\r\n");
 String forum_id = request.getParameter("forum_id"); 
      out.write(" \r\n");
      out.write("\r\n");
      out.write(" ");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/header.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Read Thread", request.getCharacterEncoding()), out, true);
      out.write("\t \r\n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/body.jsp", out, true);
      out.write('\r');
      out.write('\n');
 if( sessionUsername != null){
      out.write("\r\n");
      out.write("\t<table width=\"100%\" height=\"20\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">\r\n");
      out.write("\t\t<tr> \r\n");
      out.write("\t\t\t<td height=\"20\" valign=\"top\" class=\"pathBar\">\r\n");
      out.write("\t\t\t\t<a href=\"./index.jsp\" class=\"pathBarLink\">");
      out.print( Variable.getForumName() );
      out.write("</a><span class=\"pathBarSeperator\"> > </span>\r\n");
      out.write("\t\t\t\t<a href=\"./index.jsp?page=thread&forum_id=");
      out.print( forum_id );
      out.write("\" class=\"pathBarLink\">");
      out.print( Utilities.getforumTile(forum_id) );
      out.write("</a>\r\n");
      out.write("\t\t\t</td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t</table>\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_start.jsp", out, true);
      out.write("                   \r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Topic Title", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("middle", request.getCharacterEncoding()), out, true);
      out.write("\t               \r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Topic Starter", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("middle", request.getCharacterEncoding()), out, true);
      out.write("\t\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Post On", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("middle", request.getCharacterEncoding()), out, true);
      out.write("\t\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Replies", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("middle", request.getCharacterEncoding()), out, true);
      out.write('\r');
      out.write('\n');
      out.write('	');
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Views", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("middle", request.getCharacterEncoding()), out, true);
      out.write('\r');
      out.write('\n');
      out.write('	');
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Last Action", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("middle", request.getCharacterEncoding()), out, true);
      out.write("\t   \t    \t                   \r\n");
      out.write("\t");
 if(sessionType.equals("Admin")){ 
      out.write("\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Delete Message", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("middle", request.getCharacterEncoding()), out, true);
      out.write('\r');
      out.write('\n');
      out.write('	');
 } 
      out.write("\t \r\n");
      out.write("\r\n");
      out.write("\t");

	DBConnectie db = new DBConnectie(Variable.getDb(),Variable.getDbLogin(),Variable.getDbPassword());
			
	db.connect();

	ResultSet rs = db.selectQuery("SELECT DISTINCT thread_id FROM forum_message WHERE forum_id=\""+ forum_id +"\" ORDER BY thread_id DESC");

	while(rs.next()){
		String thread_id = rs.getString("thread_id");
				
		ResultSet rs2 = db.selectQuery(
			"SELECT * "+
			"FROM forum_message "+
			"WHERE forum_id=\"" + forum_id + "\" " + 
			"AND thread_id=\""+ thread_id + "\" " +
			"AND reply_id =\"0\"");
								
		while(rs2.next()){
			String title = Utilities.getThreadTile(forum_id,thread_id);
			String user = rs2.getString("user");
			String date_time = rs2.getString("date_time");
	
      out.write("\r\n");
      out.write("\t\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_start_body.jsp", out, true);
      out.write("\r\n");
      out.write("\t\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("0", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t<a href=\"./index.jsp?page=message&forum_id=");
      out.print( forum_id );
      out.write("&thread_id=");
      out.print( thread_id );
      out.write("&start=0\">");
      out.print( title );
      out.write("</a>");
      out.print( Utilities.getMorePages(Utilities.getReplies(forum_id,thread_id),forum_id,thread_id,true) );
      out.write("\r\n");
      out.write("\t\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("0", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t");
      out.print( user );
      out.write("\t\r\n");
      out.write("\t\t\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("0", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t");
      out.print( date_time );
      out.write("\t\r\n");
      out.write("\t\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("0", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t");
      out.print( Utilities.getReplies(forum_id,thread_id) );
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("0", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t");
      out.print( Utilities.getViews(forum_id,thread_id) );
      out.write("\r\n");
      out.write("\t\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("0", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t");
      out.print( Utilities.lastActionInfo(forum_id,thread_id) );
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t");
 if(sessionType.equals("Admin")){ 
      out.write("\r\n");
      out.write("\t\t\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("0", request.getCharacterEncoding()), out, true);
      out.write("\r\n");
      out.write("\t\t\t\t<a href=\"servlet/forum.DeleteThread?forum_id=");
      out.print( forum_id );
      out.write("&thread_id=");
      out.print( thread_id );
      out.write("\">Delete</a>\r\n");
      out.write("\t\t\t");
 } 
      out.write("\r\n");
      out.write("\t\t");
 } 
      out.write('\r');
      out.write('\n');
      out.write('	');
 } 
      out.write('\r');
      out.write('\n');
      out.write('	');
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_close_body.jsp", out, true);
      out.write(" \r\n");
      out.write("\t");
		
		ResultSet rs3 = db.selectQuery(
			"SELECT MAX(thread_id) thread_id FROM forum_threads");
						
		String lastThread_id = "null";
		while(rs3.next()){
			lastThread_id = rs3.getString("thread_id");
						
			if(lastThread_id == null){
				lastThread_id = "-1";
			}
		}
		
		db.close();       	    
	
      out.write("\t\t\t\t\t\t\t\r\n");
      out.write("\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_start_title.jsp", out, true);
      out.write(" \r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("<a href=\"./index.jsp\">Back</a>", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("7", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("left", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_close.jsp", out, true);
      out.write(" \r\n");
      out.write("\t<br>\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_start.jsp", out, true);
      out.write(" \r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Add Thread", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("3", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("left", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\t\t\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_start_body.jsp", out, true);
      out.write('\r');
      out.write('\n');
      out.write('	');
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("200", request.getCharacterEncoding()), out, true);
      out.write("\r\n");
      out.write("\t<form action=\"servlet/forum.AddThread\" method=\"POST\" name=\"formmessage\">\r\n");
      out.write("\t<input type=\"hidden\" name=\"forum_id\" value=\"");
      out.print( forum_id );
      out.write("\">\r\n");
      out.write("\t<input type=\"hidden\" name=\"lastThread_id\" value=\"");
      out.print( lastThread_id );
      out.write("\">\r\n");
      out.write("\t<input type=\"hidden\" name=\"user\" value=\"");
      out.print( sessionUsername );
      out.write("\">\r\n");
      out.write("\tTitle:<br>\r\n");
      out.write("\t<input type=\"text\" name=\"title\" size=\"62\" maxlength=\"60\"><br>\r\n");
      out.write("\tMessage:<br>\r\n");
      out.write("\t<textarea name=\"message\" cols=\"47\" rows=\"10\" maxlength=3000></textarea><br>\r\n");
      out.write("\t<input type=\"submit\" value=\"submit\"><br>\r\n");
      out.write("\t</form>\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("200", request.getCharacterEncoding()), out, true);
      out.write('\r');
      out.write('\n');
      out.write('	');
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/textStyle.jsp", out, true);
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("200", request.getCharacterEncoding()), out, true);
      out.write('\r');
      out.write('\n');
      out.write('	');
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/emoticons.jsp", out, true);
      out.write('\r');
      out.write('\n');
      out.write('	');
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_close_body.jsp", out, true);
      out.write("\t\t\t\t \r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_close.jsp", out, true);
      out.write(' ');
      out.write('\r');
      out.write('\n');
 }else { 
      out.write("\r\n");
      out.write("\t<br>\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_start.jsp", out, true);
      out.write(" \r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Error", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("left", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\t\t\t\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_start_body.jsp", out, true);
      out.write('\r');
      out.write('\n');
      out.write('	');
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("200", request.getCharacterEncoding()), out, true);
      out.write("\r\n");
      out.write("\tYou have to login first !\r\n");
      out.write("\t<br>\r\n");
      out.write("\t<br>\r\n");
      out.write("\t<a href=\"./register.jsp\">Register</a>\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_close_body.jsp", out, true);
      out.write("\t\t\t\t \r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_close.jsp", out, true);
      out.write('\r');
      out.write('\n');
 } 
      out.write("   \r\n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/footer.jsp", out, true);
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
