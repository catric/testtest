// ******************************* ʹ��ajax����Led��Ҫ������ *******************************
// ����վ�������
var firehouse = new Array();
// ��ǰ����������վ���
var curid = 0;
// ��ǰ������ҳ��id
var pageid = 0;
// ҳ����ʾʱ����ʱʱ��
var delay = 8000;
// ����վ�����Ƿ����
//var loadorgan = false;

//---------------------- ��ȡ��ǰ����վ�б� ----------------------//
function getOrganID()
{
	//alert("begin");
	// ��ȡӦ�÷�������ַ
	var bigs=document.location.href;
	var name=((bigs.split('//'))[1].split('/'))[0]; 
	var apps=((bigs.split('//'))[1].split('/'))[1]; 
	
	var url = "http://"+ name +"/"+ apps +"/cs/led/LedAction.do?method=get_firehouse_list";
	var data = null;	// ��Ҫ���͵ĲΡ�ֵ��

	// ����ʵ������
	// SendRequest("GET", url, data, setOrganID, "");
	XMLHttp.sendReq("GET", url, data, setOrganID);
}

function setOrganID(response)
{
	try
	{	
		//if (response.error != null || response.value == null || 
		//	(typeof(response.value) == "string" && response.value == "") || 
		//	response.value.text == "") {
		if (response == null || 
			(typeof(response.responseXML.xml) == "string" && response.responseXML.xml == "")) {		
			// û������,�ȴ�10��������Ѱ����
	        setTimeout("getOrganID()", delay);
			return;
		}
		
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
    	xmlDoc.loadXML(response.responseXML.xml);
    	
        var item = xmlDoc.selectNodes("ROOT/SEGMENT");        
        if ((item == null) || (item.length == 0)) {
			// û��������������
	        getOrganID();
        	return;
		}
		
        // �������վԪ��
        firehouse = new Array();
        
        // ͨ��ѭ����ȡ��������վʵ��
        for(var i=0;i<item.length;i++)
        {
            var organid = item[i].selectSingleNode("ORGAN").text;
            if (organid == "null") organid = "";
			var name = item[i].selectSingleNode("NAME").text;
			if (name == "null") name = "";
    		var state = item[i].selectSingleNode("STATE").text;
    		if (state == "null") state = "-1";
    		var soldier = item[i].selectSingleNode("SOLDIER").text;
    		if (soldier == "null") soldier = "0";
    		
    		var leader = item[i].selectSingleNode("LEADER").text;
    		if (leader == "null") leader = "";
    		var frontstaff = item[i].selectSingleNode("FRONTSTAFF").text;
    		if (frontstaff == "null") frontstaff = "";
    		var backstaff = item[i].selectSingleNode("BACKSTAFF").text;
    		if (backstaff == "null") backstaff = "";
    		var messenger = item[i].selectSingleNode("MESSENGER").text;
    		if (messenger == "null") messenger = "";
    		
    		if (firehouse[i]==null) { 
	            firehouse[i] = new posfirehouse(organid, name, state, soldier, leader, frontstaff, backstaff, messenger);
            } else {
            	firehouse[i] = posfirehouse(organid, name, state, soldier, leader, frontstaff, backstaff, messenger)
            }
        }
        
        // ׼������ҳ������        
        GoPage();        
        // ָ���¸���ʾ��ҳ��
        //pageid++;
		//// ��ȡÿ������վ��ʵ�����ݣ�ֱ����Ѱ���
		//getEngineList();		
	}
	catch(exception)
	{
		alert("��Ӧ����վ���ݴ���:" + exception.description);
		return;
	}
}

function posfirehouse(organid, name, state, soldier, leader, frontstaff, backstaff, messenger)
{
	// ����վ���	
	this.OrganID = organid;
	// ����վ����
	this.Name = name;
	// ����վ״̬
	this.State = state;
	// ս������
	this.Soldier = soldier;
	// �ж�ֵ����Ϣ
	this.Leader = leader;
	this.Frontstaff = frontstaff;
	this.Backstaff = backstaff;
	this.Messenger = messenger;
}
//����ֵ���б�
function update_onduty()
{	
		
	// ��ȡӦ�÷�������ַ
	var bigs=document.location.href;
	var name=((bigs.split('//'))[1].split('/'))[0]; 
	var apps= ((bigs.split('//'))[1].split('/'))[1]; 
	
	var url = "http://"+ name +"/"+ apps +
		"/cs/led/LedAction.do?method=update_onduty";
	var data = null;	// ��Ҫ���͵ĲΡ�ֵ��
	// ����ʵ������
	//SendRequest("GET", url, data, setEngineList, "");
	XMLHttp.sendReq("GET", url, data, setOnduty);
}

function setOnduty(response)
{
	
	try
	{
		if (response == null || (typeof(response.responseXML.xml) == "string" && response.responseXML.xml == "")) {
	        curid = 0;
			pageid = 0;
			getOrganID();
			return;
		}
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
    	xmlDoc.loadXML(response.responseXML.xml);    	
        var item = xmlDoc.selectNodes("ROOT/SEGMENT"); 
                
        var frame = "";                
        if ((item != null) && (item.length > 0)) {����
	    //ͨ��ѭ����ȡ��������վʵ��
         	var on_duty_chief = item[0].selectSingleNode("on_duty_chief").text;
	        var on_duty_assis_chief = item[0].selectSingleNode("on_duty_assis_chief").text;
    	    var on_duty_assistant = item[0].selectSingleNode("on_duty_assistant").text;
    	    var assistants = on_duty_assistant.split(" ");
    	    var assistant1 = on_duty_assistant;
    	    var assistant2 = "";
    	    if(assistants.length>1)
    	    {
    	    	assistant1 = assistants[0] +" "+assistants[1]
    	    }
    	    if(assistants.length>2)  
    	   		assistant2 = assistants[2];
        	var on_duty_clierk = item[0].selectSingleNode("on_duty_clierk").text;
        
        	frame += "<table ><th colspan='4'>�ܶ�ֵ��</th><p>&nbsp;</p></th>"
        		  + "<tr><td>��ָ�ӳ���"
        	      + on_duty_chief+"</td></tr>"
        	      + "<tr><td>����ָ�ӳ���ָ�ӳ�����"
        	      + on_duty_assis_chief+" </td></tr>"
        	      + "<tr><td>ֵ������"
        	      + assistant1+"</td></tr>"
        	 if(assistant2!="")
        	 {
        	      frame+= "<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+  assistant2+"</td></tr>"
        	 }
        	 frame += "<tr><td>רְֵ��Ա��"
        	      + on_duty_clierk  +"</td></tr></table >"
        	      
         	var resDiv = document.getElementById('apDiv2');
		    if(resDiv!=null)
		        resDiv.innerHTML = frame
		}
	}
	catch(exception)
	{
		alert("��Ӧ�������ݴ���:" + exception.description);
		return;
	}
}
//---------------------- ��ȡ����ʵ��״�� ----------------------//
function getEngineList()
{	
	// ����û��ȡ������,�����ϸ�����
	if (firehouse[curid] == null) {
		curid = 0;
		pageid = 0;
		getOrganID();
		return;
	}
	
	// ��ȡӦ�÷�������ַ
	var bigs=document.location.href;
	var name=((bigs.split('//'))[1].split('/'))[0]; 
	var apps= ((bigs.split('//'))[1].split('/'))[1]; 
	
	var url = "http://"+ name +"/"+ apps +
		"/cs/led/LedAction.do?method=get_fire_engine_list&organ_id=" + firehouse[curid].OrganID;
	var data = null;	// ��Ҫ���͵ĲΡ�ֵ��
	// ����ʵ������
	//SendRequest("GET", url, data, setEngineList, "");
	XMLHttp.sendReq("GET", url, data, setEngineList);
}

function setEngineList(response)
{
	try
	{
		//if(response.error != null || response.value == null || 
		//	(typeof(response.value) == "string" && response.value == "") || 
		//	response.value.text == "") {
		if (response == null || 
			(typeof(response.responseXML.xml) == "string" && response.responseXML.xml == "")) {
	        curid = 0;
			pageid = 0;
			getOrganID();
			return;
		}
		
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
    	xmlDoc.loadXML(response.responseXML.xml);    	
        var item = xmlDoc.selectNodes("ROOT/SEGMENT"); 
                
        var frame = "";                
        if ((item != null) && (item.length > 0)) {����
	        //ͨ��ѭ����ȡ��������վʵ��
    	    for (var i=0;i<item.length;i++) {
	            var fe_id = item[i].selectSingleNode("FE_ID").text;
    	        var fe_name = item[i].selectSingleNode("FE_NAME").text;
        	    var fe_type = item[i].selectSingleNode("FE_TYPE").text;
            	var squad_no = item[i].selectSingleNode("SQUAD_NO").text;
	            var fe_state = item[i].selectSingleNode("FE_STATE").text;
            
    	       	frame += "<tr><td class='label'>"+ fe_id +"</td>" +
					"<td class='label'>"+ fe_type +"</td>";
				// ��ɫ��ע
				if (fe_state == "����") {
					frame += "<td class='greentxt' align='center'>����</td></tr>";
				} else {
					frame += "<td class='redtxt' align='center'>" +fe_state +"</td></tr>";
				}
        	}
        }
        
       var outtbl = "<table><tr><td class='yellowtxt' colspan='2'><b>" + firehouse[curid].Name + "</b>&nbsp;&nbsp;";
        if (firehouse[curid].State == "-1") {
	        outtbl += "<font class='redtxt'>�ն��쳣</font>";
        } else {
			outtbl += "<font class='greentxt'>�ն�����</font>";
        }
        outtbl += "</td><td class='yellowtxt' width='80'> ս��������</td><td width='78' class='yellowtxt'>"+ firehouse[curid].Soldier +"</td>" +
			"</tr><tr><td width='80'class='greentxt'>�ж�ǰ�ڣ�</td><td width='78' class='yellowtxt'>"+ firehouse[curid].Frontstaff.replace(/\./, " ")  +"</td>" +
		  	"<td width='80'class='greentxt'>�жӺ��ڣ�</td><td width='78' class='yellowtxt'>"+ firehouse[curid].Backstaff.replace(/\./, " ")  +"</td></tr><tr>" +
		  	"<td width='80'class='greentxt'>ֵ��೤��</td><td width='78' class='yellowtxt'>"+ firehouse[curid].Leader.replace(/\./, " ")  +"</td>" +
  			"<td width='80'class='greentxt'>ͨѶԱ��</td><td width='78' class='yellowtxt'>"+ firehouse[curid].Messenger.replace(/\./, " ")  +"</td>" +
			"</tr></table>";
        
        outtbl += "<table class='maintb'><tr><td class='greentxt'>�������</td>" +
			"<td class='greentxt'>��������</td>" +
			"<td class='greentxt'>����״̬</td>" +
			"</tr>" + frame + "</table>";
			
		//alert(frame);
		// �л���ʾ��ǰҳ��
		showPage(outtbl);
		// ׼������ҳ������
		setTimeout("GoPage()", delay);
        // ָ���¸���ʾ��ҳ��
        pageid++;
	}
	catch(exception)
	{
		alert("��Ӧ�������ݴ���:" + exception.description);
		return;
	}
}

//---------------------- ��ȡװ��ʵ��״�� ----------------------//
function getEquipmentList()
{	
	// ����û��ȡ������,�����ϸ�����
	if (firehouse[curid] == null) {
		curid = 0;
		pageid = 0;
		getOrganID();
		return;
	}
	
	// ��ȡӦ�÷�������ַ
	var bigs=document.location.href;
	var name=((bigs.split('//'))[1].split('/'))[0]; 
	var apps= ((bigs.split('//'))[1].split('/'))[1]; 
	
	var url = "http://"+ name +"/"+ apps +
		"/cs/led/LedAction.do?method=get_equipment_list&organ_id=" + firehouse[curid].OrganID;
	var data = null;	// ��Ҫ���͵ĲΡ�ֵ��

	// ����ʵ������
	//SendRequest("GET", url, data, setEquipmentList, "");
	XMLHttp.sendReq("GET", url, data, setEquipmentList);
}

function setEquipmentList(response)
{
	try
	{
		//if(response.error != null || response.value == null || 
		//	(typeof(response.value) == "string" && response.value == "") || 
		//	response.value.text == "") {
		if (response == null || 
			(typeof(response.responseXML.xml) == "string" && response.responseXML.xml == "")) {
			curid = 0;
			pageid = 0;
			getOrganID();
			return;
		}
		
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
    	xmlDoc.loadXML(response.responseXML.xml);    	
        var item = xmlDoc.selectNodes("ROOT/SEGMENT");
       
        var frame = "";
        if ((item != null) && (item.length > 0)) {����
	        //ͨ��ѭ����ȡ��������վʵ��
	        for(var i=0;i<item.length;i++) {
	            var equ_id = item[i].selectSingleNode("EQU_ID").text;
	            var equ_code = item[i].selectSingleNode("EQU_CODE").text;
	            var equ_name = item[i].selectSingleNode("EQU_NAME").text;
	            var equ_num = item[i].selectSingleNode("EQU_NUM").text;
	            var equ_type = item[i].selectSingleNode("EQU_TYPE").text;
	            //var equ_state = item[i].selectSingleNode("EQU_STATE").text;
	            
	           	frame += "<tr><td class='label'>"+ equ_code +"</td>" +
					"<td class='label'>"+ equ_name +"</td>"+
					"<td class='label' align='center'>"+ equ_type +"</td>" +
					"<td class='label' align='center'>"+ equ_num +"</td>";					
				// ��ɫ��ע1 ����-2 ����-3 ά��-4 ����
				//if (equ_state == "����") {
				//	frame += "<td class='redtxt' align='center'>����</td></tr>";
				//} else if (equ_state == "����") {
				//	frame += "<td class='greentxt' align='center'>����</td></tr>";
				//} else {
				//	frame += "<td class='label' align='center'>" + equ_state +"</td></tr>";
				//}
	        }
        }
        
        // MJ+ 08/01/21
        var outtbl = "<table><tr><td class='yellowtxt' colspan='2' width = '100'><b>" + firehouse[curid].Name + "</b></td><td class='yellowtxt' width='160'>";
        if (firehouse[curid].State == "-1") {
	        outtbl += "<font class='redtxt'>�ն��쳣</font>";
        } else {
			outtbl += "<font class='greentxt'>�ն�����</font>";
        }
         
		var arrfs = new Array();
		var arrbs = new Array();
		var arrld = new Array();
		var arrmg = new Array();
		arrfs =  firehouse[curid].Frontstaff.split(",");
		var strfs = "";
		if (arrfs.length > 0) {
			for (i=0; i < arrfs.length; i++)
				strfs += arrfs[i] + "&nbsp;";
		}
			
		arrbs = firehouse[curid].Backstaff.split(",");
		var strbs = "";
		if (arrbs.length > 0) {
			for (i=0; i < arrbs.length; i++)
				strbs += arrbs[i] + "&nbsp;";
		}
			
		arrld = firehouse[curid].Leader.split(",");
		var strld = "";
		if (arrld.length >0) {
			for (i=0; i < arrld.length; i++)
				strld += arrld[i] + "&nbsp;";
		}
		
		arrmg = firehouse[curid].Messenger.split(",");
		var strmg = "";
		if (arrmg.length > 0) {
			for (i=0; i < arrmg.length; i++)
				strmg += arrmg[i] + "&nbsp;";
		}
		
        outtbl += "&nbsp;&nbsp;ս��������</td><td width='78' class='yellowtxt'>"+ firehouse[curid].Soldier +"</td>" +
			"</tr><tr><td width='80'class='greentxt'>�ж�ǰ�ڣ�</td><td width='236' class='yellowtxt' colspan = '3'>"+ strfs +"</td>" +
		  	"</tr><tr><td width='80'class='greentxt'>�жӺ��ڣ�</td><td width='236' class='yellowtxt' colspan = '3'>"+ strbs +"</td>" +
		  	"</tr><tr><td width='80'class='greentxt'>ֵ��೤��</td><td width='236' class='yellowtxt' colspan = '3'>"+ strld +"</td>" +
  			"</tr><tr><td width='80'class='greentxt'>ͨѶԱ��</td><td width='236' class='yellowtxt' colspan = '3'>"+ strmg +"</td>" +
			"</tr></table>";
			
        //var outtbl = "<table><tr><td class='yellowtxt' colspan='2'><b>" + firehouse[curid].Name + "</b>&nbsp;&nbsp;";
        //if (firehouse[curid].State == "-1") {
	    //    outtbl += "<font class='redtxt'>�ն��쳣</font>";
        //} else {
		//	outtbl += "<font class='greentxt'>�ն�����</font>";
        //}
        //outtbl += "</td><td class='yellowtxt' width='80'> ս��������</td><td width='78' class='yellowtxt'>"+ firehouse[curid].Soldier +"</td>" +
		//	"</tr><tr><td width='80'class='greentxt'>�ж�ǰ�ڣ�</td><td width='78' class='yellowtxt'>"+ firehouse[curid].Frontstaff +"</td>" +
		//  	"<td width='80'class='greentxt'>�жӺ��ڣ�</td><td width='78' class='yellowtxt'>"+ firehouse[curid].Backstaff +"</td></tr><tr>" +
		//  	"<td width='80'class='greentxt'>ֵ��೤��</td><td width='78' class='yellowtxt'>"+ firehouse[curid].Leader +"</td>" +
  		//	"<td width='80'class='greentxt'>ͨѶԱ��</td><td width='78' class='yellowtxt'>"+ firehouse[curid].Messenger +"</td>" +
		//	"</tr></table>";
			
	    outtbl += "<table class='maintb'><tr><td class='greentxt'>װ�����</td>" +
			"<td class='greentxt' >װ������</td>" +
			"<td class='greentxt' >װ�����</td>" +
			"<td class='greentxt' >����</td>" +			
			"</tr>" + frame + "</table>";
		
		// �л���ʾ��ǰҳ��
		showPage(outtbl);
		// ׼������ҳ������
		setTimeout("GoPage()", delay);
        // ָ���¸���ʾ��ҳ��
        pageid++;
	}
	catch(exception)
	{
		alert("��Ӧװ�����ݴ���" + exception.description);
		return;
	}
}

// ��ȫ����
function getAd()
{
	frame = "<div align=center><img src='../../images/ad.gif'/></div>";
	// �л���ʾ��ǰҳ��
	showPage(frame);
	// ׼������ҳ������
	//setTimeout("GoPage()", delay);
	setTimeout("getOrganID()",delay);
    // ָ���¸���ʾ��ҳ��
    //pageid++;
}

// ������ת��ʾҳ���������Ϣ
function GoPage()
{
	switch (pageid) {
	case 0:
		// ׼����ʾ������Ϣ
		getEngineList();
		break;
	//����ʾװ��
	//case 1:
	//	// ׼����ʾװ��ʵ��
	//	getEquipmentList();
	//	break;
	//case 2:
	//	// ����Ĺ����Ϣ
	//	getAd();
	//	break;	
	default:
		curid++;
		pageid = 0;
		// ׼����ȡ��һ������վ����
		if (curid > firehouse.length-1)	{
			curid = 0;
			// ����վ�����Ѿ������Ѱ����������վ����			
			//getOrganID();
			//alert("end");
			getAd();
		} else {
			// ������ѵ�¸�����վ��Ϣ
			GoPage();
		}
	}
}

//---------------------- ��ȡָ������ֵ��״�� ----------------------//
function getOnDutyList(organid)
{	
	if ((organid == null) || (organid == ""))
		return;
		
	// ��ȡӦ�÷�������ַ
	var bigs=document.location.href;
	var name=((bigs.split('//'))[1].split('/'))[0]; 
	var apps= ((bigs.split('//'))[1].split('/'))[1]; 
	
	var url = "http://"+ name +"/"+ apps +
		"/cs/led/LedAction.do?method=get_on_duty&organ_id=" + organid;		
	var data = null;	// ��Ҫ���͵ĲΡ�ֵ��

	// ����ʵ������
	//SendRequest("GET", url, data, setOnDutyList, "");
	XMLHttp.sendReq("GET", url, data, setOnDutyList);
}

function setOnDutyList(response)
{
	try
	{
		//if(response.error != null || response.value == null || 
		//	(typeof(response.value) == "string" && response.value == "") || 
		//	response.value.text == "") {
		if (response == null || 
			(typeof(response.responseXML.xml) == "string" && response.responseXML.xml == "")) {
			return;
		}

		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
    	xmlDoc.loadXML(response.responseXML.xml);
    	
        var item = xmlDoc.selectNodes("ROOT/SEGMENT"); 
        // û��������ʾ��״̬
        if ((item == null) || (item.length == 0))
        	return ;
        
        var frame = "";    
        for(var i=0;i<item.length;i++)
        {   
        	// ���δ����쵼,ֵ��ɲ�,ָ������ֵ��,ֵ��೤,�ж�ǰ��,�жӺ���,�ж�ͨ��Ա
        	var duty_charge = item[i].selectSingleNode("DUTY_CHARGE").text;
        	var duty_cadre = item[i].selectSingleNode("DUTY_CADRE").text;
        	var duty_center = item[i].selectSingleNode("DUTY_CENTER").text;        	
        	var squad_leader = item[i].selectSingleNode("SQUAD_LEADER").text;
	        var front_staff = item[i].selectSingleNode("FRONT_STAFF").text;
    	    var back_staff = item[i].selectSingleNode("BACK_STAFF").text;
        	var fh_messenger = item[i].selectSingleNode("FH_MESSENGER").text;
		}
		
		var arrdcg = new Array();
		var arrdcd = new Array();
		var ardct = new Array();

		arrdcg =  duty_charge.split(",");
		var strdcg = "";
		for (i=0; i < arrdcg.length; i++)
			strdcg += arrdcg[i] + "&nbsp;";
			
		arrdcd =  duty_cadre.split(",");
		var strdcd = "";
		for (i=0; i < arrdcd.length; i++)
			strdcd += arrdcd[i] + "&nbsp;";
			
		ardct =  duty_center.split(",");
		var strdct = "";
		for (i=0; i < ardct.length; i++)
			strdct += ardct[i] + "&nbsp;";
				
		frame = "<table><tr><td class='yellowtxt' colspan='2'><b>֧��ֵ�����</b></tr>" +
				"<tr><td width='80'class='greentxt'>�����쵼��</td>" +
				"<td width='236' class='yellowtxt'>"+ strdcg + "</td></tr>" +
				"<tr><td width='80' class='greentxt'>ֵ��ɲ���</td>" +
				"<td width='236' class='yellowtxt'>"+ strdcd + "</td></tr>" +
				"<tr><td width='80' class='greentxt'>ս��ֵ�ࣺ</td>" +
				"<td width='236' class='yellowtxt'>" + strdct + "</td>" +
				"<td></table>";

		// �л���ʾ��ǰҳ��
		showOnduty(frame);		
	}
	catch(exception)
	{
		alert("��Ӧֵ�����ݴ���" + exception.description);
		return;
	}
}

//---------------------- ��ȡʵʱ������Ϣ ----------------------//
function getAlarmInfo()
{	
	// ��ȡӦ�÷�������ַ
	var bigs=document.location.href;
	var name=((bigs.split('//'))[1].split('/'))[0]; 
	var apps= ((bigs.split('//'))[1].split('/'))[1]; 
	
	var url = "http://"+ name +"/"+ apps +
		"/cs/led/LedAction.do?method=get_alarm";		
	var data = null;	// ��Ҫ���͵ĲΡ�ֵ��

	// ����ʵ������
	//SendRequest("GET", url, data, setAlarmInfo, "");
	XMLHttp.sendReq("GET", url, data, setAlarmInfo);
}

function setAlarmInfo(response)
{
	try
	{		
		//if(response.error != null || response.value == null || (typeof(response.value) == "string" && response.value == "") || response.value.text == "") {
		if (response == null || 
			(typeof(response.responseXML.xml) == "string" && response.responseXML.xml == "")) {
			showAlarm("");
			return;
		}
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
    	xmlDoc.loadXML(response.responseXML.xml);
    	
        var item = xmlDoc.selectNodes("ROOT/SEGMENT");
        //if ((item == null) || (item.length == 0))
        //	return ;
        
        var txt = "";
        for(var i=0;i<item.length;i++)
        {   
        	var alarm = item[i].selectSingleNode("ALARM").text;
        	
        	txt += alarm;
		}
		// �л���ʾ��ǰҳ��
		showAlarm(txt);
	}
	catch(exception)
	{
		alert("��Ӧ�������ݴ���" + exception.description);
		return;
	}
}