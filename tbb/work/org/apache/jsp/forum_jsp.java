/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.52
 * Generated at: 2015-01-24 03:49:12 UTC
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
import java.util.*;
import com.tbb.forum.*;

public final class forum_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/header.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Forum", request.getCharacterEncoding()), out, true);
      out.write('\r');
      out.write('\n');
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/body.jsp", out, true);
      out.write("\r\n");
      out.write("\r\n");
 if( sessionUsername != null){
      out.write("\r\n");
      out.write("\t<table width=\"100%\" height=\"20\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">\r\n");
      out.write("\t\t<tr> \r\n");
      out.write("\t\t\t<td height=\"20\" valign=\"top\" class=\"pathBar\">\r\n");
      out.write("\t\t\t\t<a href=\"index.jsp\" class=\"pathBarLink\">");
      out.print( Variable.getForumName() );
      out.write("</a>\r\n");
      out.write("\t\t\t</td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t</table>   \r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_start.jsp", out, true);
      out.write("                   \r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Forum", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("middle", request.getCharacterEncoding()), out, true);
      out.write("\t               \r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Topics", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("middle", request.getCharacterEncoding()), out, true);
      out.write("\t\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Replies", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("middle", request.getCharacterEncoding()), out, true);
      out.write("\t\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Last Post Info", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("middle", request.getCharacterEncoding()), out, true);
      out.write("\t   \r\n");
      out.write("\r\n");
      out.write("\t");
 if(sessionType.equals("Admin")){ 
      out.write("\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Delete Forum", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("1", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("middle", request.getCharacterEncoding()), out, true);
      out.write('\r');
      out.write('\n');
      out.write('	');
 } 
      out.write("\t\r\n");
      out.write("\r\n");
      out.write("\t");

		
		DBConnectie db = new DBConnectie(Variable.getDb(),Variable.getDbLogin(),Variable.getDbPassword());
			
		db.connect();

		ResultSet rs = db.selectQuery(
			"SELECT * FROM forum_forums ORDER BY title");

		while(rs.next()){
			String forum_id = rs.getString("forum_id");
			String title = Utilities.getforumTile(forum_id);
			String info = Utilities.getforumInfo(forum_id);
			String topics = Utilities.getTopics(forum_id);
			String forumReplies = Utilities.getforumReplies(forum_id);
			String lastPostInfo = Utilities.lastPostInfo(forum_id);
	
      out.write("\t\t\t\t\t\t\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_start_body.jsp", out, true);
      out.write("\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("0", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\t\t\t\r\n");
      out.write("\t\t<a href=\"./index.jsp?page=thread&forum_id=");
      out.print( forum_id );
      out.write("\" class=\"forumLink\">");
      out.print( title );
      out.write("</a>\r\n");
      out.write("\t\t<br>\r\n");
      out.write("\t\t<span class=\"forumInfo\">");
      out.print( info );
      out.write("</span>\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("0", request.getCharacterEncoding()), out, true);
      out.write("\t\r\n");
      out.write("\t\t<span class=\"forumTopics\">");
      out.print( topics );
      out.write("</span>\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("0", request.getCharacterEncoding()), out, true);
      out.write("\r\n");
      out.write("\t\t<span class=\"forumReplies\">");
      out.print( forumReplies );
      out.write("</span>\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("0", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t<span class=\"forumPostInfo\">");
      out.print( lastPostInfo );
      out.write("</span>\r\n");
      out.write("\r\n");
      out.write("\t\t");
 if(sessionType.equals("Admin")){ 
      out.write("\r\n");
      out.write("\t\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("0", request.getCharacterEncoding()), out, true);
      out.write("\r\n");
      out.write("\t\t\t<a href=\"servlet/forum.DeleteForum?forum_id=");
      out.print( forum_id );
      out.write("\" class=\"forumDelete\">Delete</a>\r\n");
      out.write("\t\t");
 } 
      out.write("\t \r\n");
      out.write("\t");
 } 
      out.write('\r');
      out.write('\n');
      out.write('	');
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_close_body.jsp", out, true);
      out.write(" \t\t\t\t\r\n");
      out.write("\t");
		


		ResultSet rs2 = db.selectQuery(
			"SELECT MAX(forum_id) forum_id FROM forum_forums");
						
		String lastforum_id = "null";
		while(rs2.next()){
			lastforum_id = rs2.getString("forum_id");
				
			if(lastforum_id == null){
				lastforum_id = "-1";
			}
		}
		
		db.close();       	    
	
      out.write("\t\t\t\r\n");
      out.write("\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_start_title.jsp", out, true);
      out.write(" \r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("&nbsp;", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("5", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("left", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\r\n");
      out.write("\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_close.jsp", out, true);
      out.write(" \r\n");
      out.write("\t<br>\r\n");
      out.write("\t");
 if(sessionType.equals("Admin")){ 
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_start.jsp", out, true);
      out.write(" \r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_title.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("title", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("Add Forum", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("colspan", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("2", request.getCharacterEncoding()) + "&" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("align", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("left", request.getCharacterEncoding()), out, true);
      out.write("\t\t\t\t\t\t\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_start_body.jsp", out, true);
      out.write("\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_body.jsp" + "?" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("width", request.getCharacterEncoding())+ "=" + org.apache.jasper.runtime.JspRuntimeLibrary.URLEncode("200", request.getCharacterEncoding()), out, true);
      out.write("\r\n");
      out.write("\t\t<form action=\"servlet/forum.AddForum\" method=POST name=form>\r\n");
      out.write("\t\t<input type=\"hidden\" name=\"lastforum_id\" value=\"");
      out.print( lastforum_id );
      out.write("\"><br>\r\n");
      out.write("\t\tTitle:<br>\r\n");
      out.write("\t\t<input type=\"text\" name=\"title\" size=\"62\" maxlength=\"60\"><br>\r\n");
      out.write("\t\tForum Information:<br>\r\n");
      out.write("\t\t<textarea name=\"forum_info\" cols=\"47\" rows=\"10\" maxlength=\"500\"></textarea><br>\r\n");
      out.write("\t\t<input type=\"submit\" value=\"Add Forum\"><br>\r\n");
      out.write("\t\t</form>\r\n");
      out.write("\t\t<br>\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_close_body.jsp", out, true);
      out.write("\t\t\t\t \r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "./include/table_close.jsp", out, true);
      out.write('\r');
      out.write('\n');
      out.write('	');
 } 
      out.write("              \r\n");
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
      out.write('\r');
      out.write('\n');
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
