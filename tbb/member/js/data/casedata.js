// ******************************* ʹ��ajax����Led��Ҫ������ *******************************
function getCase()
{
	// ��ȡӦ�÷�������ַ
	var bigs=document.location.href;
	var name=((bigs.split('//'))[1].split('/'))[0]; 
	var apps=((bigs.split('//'))[1].split('/'))[1]; 
		
	var url = "http://"+ name +"/"+ apps +"/cs/led/LedAction.do?method=get_all_case_list";
	var data = '';	// ��Ҫ���͵ĲΡ�ֵ��
	// ����ʵ������
	//SendRequest("GET", url, data, setCase, "");
	XMLHttp.sendReq("GET", url, data, setCase);	
}

function setCase(response)
{
	try
	{		
		//if(response.error != null || response.value == null || 
		//	(typeof(response.value.xml) == "string" && response.value == "") || response.value.text == "") {
		if (response == null || 
			(typeof(response.responseXML.xml) == "string" && response.responseXML.xml == "")) {
			showCase(null, null);
			return;
		}

		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
    	xmlDoc.loadXML(response.responseXML.xml);

    	//ѡ���ڵ�
        var item = xmlDoc.selectNodes("ROOT/SEGMENT"); 
        // û����ʱ�Ĵ���
        if ((item == null) && (item.length == 0)) {
			showCase(null, null);
			return;
		}

        // ����������󰸼�����        
        var caseframe = ""; 
        //ͨ��ѭ���������
        var timeArray = new Array();
        var stringArray = new Array();

        for(var i=0;i<item.length;i++)
        {
            var curr = item[i].selectSingleNode("CURR").text;
            if (curr == "null") curr = "";
			var addr = item[i].selectSingleNode("ADDR").text;
			if (addr == "null") addr = "";
			var type = item[i].selectSingleNode("TYPE").text;
			if (type == "null") type = "";
			var tele = item[i].selectSingleNode("TELE").text;
			if (tele == "null") tele = "";
			var area = item[i].selectSingleNode("AREA").text;
			if (area == "null") area = "";
			
			timeArray[i] = curr;
			
			caseframe = "<td><span id='scrolltime" + i + "'>" + curr + "</span></td><td>" + addr;
            if (type != "") caseframe += '(' + type + ')';
            caseframe += '<span class="greentxt">' + tele + '</span></td><td>' + area + '</td>';
			stringArray[i] = caseframe;
        }
        
		// ��ʾ��ȡ������
	    showCase(timeArray, stringArray);
	}
	catch(exception)
	{
		alert("��Ӧ�������ݴ���:"+ exception.description);
		return;
	}
}

//---------------------- ��ȡ����ͳ������ ----------------------//
function getCaseNum()
{
	// ��ȡӦ�÷�������ַ
	var bigs=document.location.href;
	var name=((bigs.split('//'))[1].split('/'))[0]; 
	var apps=((bigs.split('//'))[1].split('/'))[1]; 
		
	var url = "http://"+ name +"/"+ apps +"/cs/led/LedAction.do?method=get_case_count";
	var data = null;	// ��Ҫ���͵ĲΡ�ֵ��

	// ����ʵ������
	
	//SendRequest("GET", url, data, caseNumCallback, "");	
	XMLHttp.sendReq("GET", url, data, setCaseCount);	
}

function setCaseCount(response)
{
	try
	{	
		//if(response.error != null || response.value == null || 
		//	 (typeof(response.value.xml) == "string" && response.value == "") || response.value.text == "") {		
		if (response == null || 
			(typeof(response.responseXML.xml) == "string" && response.responseXML.xml == "")) {		
			return;
		}
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
    	xmlDoc.loadXML(response.responseXML.xml);
    	
    	//ѡ���ڵ�
        var item = xmlDoc.selectNodes("ROOT/SEGMENT"); 
        //û����ʱ�Ĵ���
        if ((item == null) || (item.length == 0)) return;
        
        // ����������󰸼�����        
        var caseframe = ""; 
        //ͨ��ѭ���������
        for(var i=0;i<item.length;i++)
        {
            var fire = item[i].selectSingleNode("FIRE").text;
            if (fire == "null") fire = "";
			var rescue = item[i].selectSingleNode("RESCUE").text;
			if (rescue == "null") rescue = "";
			var duty = item[i].selectSingleNode("DUTY").text;
			if (duty == "null") duty = "";
			var social = item[i].selectSingleNode("SOCIAL").text;
			if (social == "null") social = "";
			var other = item[i].selectSingleNode("OTHER").text;
			if (other == "null") other = "";
			
			//alert(fire + "-" + rescue + "-" + duty + "-" + social + "-" + other)			
			var count = parseInt(fire,10) + parseInt(rescue,10) + parseInt(duty,10) + 
				parseInt(social,10) + parseInt(other,10);
			if (i == 0)
			{
            	caseframe += "<td align='left'>ȫ�� "+ count + "��</td>";            	
            } else {
            	caseframe += "<td align='left'>&nbsp;&nbsp;���� "+ count + "��</td>";
            }
            //var allother = parseInt(duty,10) + parseInt(social,10) + parseInt(other,10);
            caseframe += "<td align='left'>���� "+ fire + "��</td>"+
            	"<td align='left'>��Ԯ "+ rescue + "��</td>"+
            	"<td align='left'>���� "+ other + "��</td>";
        }
        
		// ��ʾ��ȡ������
		if (caseframe != "") {
		    setCaseNum(caseframe);			    
		}
	}
	catch(exception)
	{
		alert("��Ӧͳ�ư������ݴ���:"+ exception.description);
		return;
	}
}

//---------------------- ��ȡ��ӭ�� ----------------------//
function getWelcomeInfo()
{	
	// ��ȡӦ�÷�������ַ
	var bigs=document.location.href;
	var name=((bigs.split('//'))[1].split('/'))[0]; 
	var apps= ((bigs.split('//'))[1].split('/'))[1]; 
	
	var url = "http://"+ name +"/"+ apps +
		"/cs/led/LedAction.do?method=get_welcome";		
	var data = null;	// ��Ҫ���͵ĲΡ�ֵ��

	// ����ʵ������
	//SendRequest("GET", url, data, setWelcomeInfo, "");
	XMLHttp.sendReq("GET", url, data, setWelcomeInfo);		
}

function setWelcomeInfo(response)
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
        
        var welcome = "";
        var font = 0;
        //var fontsize = 0;
        var fontcolor = 0;
        var direct = 0;		// Ĭ��        
        for(var i=0;i<item.length;i++)
        {
        	welcome = item[i].selectSingleNode("WELCOME").text;
        	font =  parseInt(item[i].selectSingleNode("FONT").text,10);
        	//fontsize = parseInt(item[i].selectSingleNode("FONTSIZE").text,10);
        	fontcolor = parseInt(item[i].selectSingleNode("FONTCOLOR").text,10);
        	direct = parseInt(item[i].selectSingleNode("DIRECT").text, 10);        	
		}
		
		// �л���ʾ��ǰҳ��
		showWelcome(welcome, font, fontcolor, direct);
	}
	catch(exception)
	{
		alert("��Ӧ��ӭ���ݴ���");
		return;
	}
}