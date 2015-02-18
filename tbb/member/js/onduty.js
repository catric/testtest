//���÷���
/*=======================���ú���===========================================*/
//�õ�htmlҳ����id��ʶΪid��Ԫ��
function $()
{
	var elements = new Array();
	for (var i = 0; i < arguments.length; i++)
	{
		var element = arguments[i];
		if (typeof element == 'string')
		{
			element = document.getElementById(element);
			if (arguments.length == 1)	return element;
			elements.push(element);
		}
	}
	return elements;
}

//�ַ����Ƿ�Ϊ��
function isEmpty(strInput)
{
	if (null == strInput)
	{
		return true;
	}

	if (strInput.replace(/(^[ |��|\s]*)|([ |��|\s]*$)/g,"").length == 0)
	{
		return true;
	}
	return false;
}

//��ȡxmlHttp
function getXmlHttp()
{
    var _xmlHttp = false;
	try 
	{
        _xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } 
    catch (ex)
    {
        try
        {
            _xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (ex) 
        {
            _xmlHttp = false;
        }
    }

    if (!_xmlHttp && typeof(XMLHttpRequest) != "undefined")
    {
        try
        {
            _xmlHttp = new XMLHttpRequest();
        }
        catch (ex) 
        {
            _xmlHttp = false;
        }
    }
    
    return _xmlHttp;
}

/*=======================����ֵ��ȡ����===========================================*/
function getOnDuty(onDutySrc){
	var xmlHttpOnDuty = false;

	//����ajax��������	
	if (!xmlHttpOnDuty || xmlHttpOnDuty == null)
	{
		xmlHttpOnDuty = getXmlHttp();
	}
	else
	{
		xmlHttpOnDuty.abort();
	}
	
	if (!xmlHttpOnDuty)
	{
		alert("��֧��xmlHttp����!");
		hiddenAlikeDiv(inputId);
		return;
	}		

	//�Թؼ��ֽ��б���
    var url = onDutySrc;
	url += "&timestamp="+new Date().getTime(); 
	url= encodeURI(url);
	url= encodeURI(url);
	  
    xmlHttpOnDuty.open("GET", url, true);
    xmlHttpOnDuty.onreadystatechange = function(){updatePageOnDuty(xmlHttpOnDuty)};
    xmlHttpOnDuty.send(null); 
}

//���½���
function updatePageOnDuty(xmlHttp)
{
	if (xmlHttp.readyState < 4)
	{
    	
    }
    if (xmlHttp.readyState == 4)
	{
		if (xmlHttp.status == 200)
		{	  
			loadOnDuty(xmlHttp.responseXML);
		}
	}
}

function loadOnDuty(doc)
{
	if(doc == null || doc.documentElement == null)
	{
		//alert("xml��ʽ����!");
		return;
	}

	var on_duty_charge = "";
	var on_duty_charge_name = "";

	var on_duty_cadre = "";
	var on_duty_cadre_name = "";

	var on_duty_commander= "";
	var on_duty_commander_name = "";

	var on_duty_center = "";
	var on_duty_center_name = "";

	var on_duty_pro = "";
	var on_duty_pro_name = "";

	var fh_front_staff = "";
	var fh_front_staff_name = "";

	var fh_back_staff = "";
	var fh_back_staff_name = "";

	var fh_squad_leader = "";
	var fh_squad_leader_name = "";

	var fh_messenger = "";
	var fh_messenger_name = "";

	var root = doc.documentElement;
	var cs = root.childNodes;
	for (var i = 0; i < cs.length; i++) 
	{
		if (cs[i].tagName == "center")
		{
			var cschild = cs[i].childNodes;
			for (var j = 0; j < cschild.length; j++) 
			{
				switch (cschild[j].tagName)
				{
					case "on_duty_charge"://ֵ���쵼
						on_duty_charge = unescape(cschild[j].text);							
						break;		
					case "on_duty_charge_name":
						on_duty_charge_name = unescape(cschild[j].text);					
						break;		
					case "on_duty_cadre"://����ֵ��
						on_duty_cadre = unescape(cschild[j].text);						
						break;	
					case "on_duty_cadre_name":
						on_duty_cadre_name = unescape(cschild[j].text);						
						break;	
					case "on_duty_commander"://ָ�ӳ�
						on_duty_commander = unescape(cschild[j].text);						
						break;	
					case "on_duty_commander_name":
						on_duty_commander_name = unescape(cschild[j].text);						
						break;	
					case "on_duty_center"://ս��ֵ��
						on_duty_center = unescape(cschild[j].text);						
						break;	
					case "on_duty_center_name":
						on_duty_center_name = unescape(cschild[j].text);						
						break;	
					case "on_duty_pro"://רְֵ��
						on_duty_pro = unescape(cschild[j].text);						
						break;	
					case "on_duty_pro_name":
						on_duty_pro_name = unescape(cschild[j].text);						
						break;	
				}
			}

			setOnDuty(on_duty_charge,on_duty_charge_name,on_duty_cadre,on_duty_cadre_name,on_duty_commander,on_duty_commander_name,on_duty_center,on_duty_center_name,on_duty_pro,on_duty_pro_name);
		}

		if (cs[i].tagName == "firehouse")
		{
			var cschild = cs[i].childNodes;
			for (var j = 0; j < cschild.length; j++) 
			{
				switch (cschild[j].tagName)
				{
					case "fh_front_staff"://�ж�ǰ��
						fh_front_staff= unescape(cschild[j].text);									
						break;
					case "fh_front_staff_name":
						fh_front_staff_name= unescape(cschild[j].text);									
						break;
					case "fh_back_staff"://�жӺ���
						fh_back_staff = unescape(cschild[j].text);									
						break;				
					case "fh_back_staff_name":
						fh_back_staff_name = unescape(cschild[j].text);									
						break;				
					case "fh_squad_leader"://ֵ��೤
						fh_squad_leader = unescape(cschild[j].text);									
						break;
					case "fh_squad_leader_name":
						fh_squad_leader_name = unescape(cschild[j].text);									
						break;
					case "fh_messenger"://�ж�ͨ��Ա
						fh_messenger = unescape(cschild[j].text);					
						break;	
					case "fh_messenger_name":
						fh_messenger_name = unescape(cschild[j].text);					
						break;
				}
			}

			setOnDuty(fh_front_staff,fh_front_staff_name, fh_back_staff,fh_back_staff_name, fh_squad_leader,fh_squad_leader_name,fh_messenger,fh_messenger_name);
		}

		
	}	
}