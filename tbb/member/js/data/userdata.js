//---------------------- ��ȡ��ӭ�� ----------------------//
function getUserHtml()
{	
	// ��ȡӦ�÷�������ַ
	var bigs=document.location.href;
	var name=((bigs.split('//'))[1].split('/'))[0]; 
	var apps= ((bigs.split('//'))[1].split('/'))[1]; 
	
	var url = "http://"+ name +"/"+ apps +
		"/cs/led/LedAction.do?method=get_userhtml";		
	var data = null;	// ��Ҫ���͵ĲΡ�ֵ��

	// ����ʵ������
	//SendRequest("GET", url, data, setWelcomeInfo, "");
	XMLHttp.sendReq("GET", url, data, setUserHtml);		
}

function setUserHtml(response)
{
	try
	{		
		if (response == null || 
			(typeof(response.responseXML.xml) == "string" && response.responseXML.xml == "")) {
			// (typeof(response.value.xml) == "string" && response.value == "") || response.value.text == "") {		
			//showWelcome("", "left");
			return;
		}

		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
    	xmlDoc.loadXML(response.responseXML.xml);
    	
        var item = xmlDoc.selectNodes("ROOT/SEGMENT");
        //if ((item == null) || (item.length == 0))
        //	return ;
        
        var userhtml = "";
        for(var i=0;i<item.length;i++)
        {
        	userhtml = item[i].selectSingleNode("USERHTML").text;    	
		}
		
		// �л���ʾ��ǰҳ��
		showUser(userhtml);
	}
	catch(exception)
	{
		alert("��Ӧ�Զ���ű�����");
		return;
	}
}