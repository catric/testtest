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
function getDepartment(departmentSrc){
	var xmlHttpDepartment = false;

	//����ajax��������	
	if (!xmlHttpDepartment || xmlHttpDepartment == null)
	{
		xmlHttpDepartment = getXmlHttp();
	}
	else
	{
		xmlHttpDepartment.abort();
	}
	
	if (!xmlHttpDepartment)
	{
		alert("��֧��xmlHttp����!");
		hiddenAlikeDiv(inputId);
		return;
	}		

	//�Թؼ��ֽ��б���
    var url = departmentSrc;
	url += "&timestamp="+new Date().getTime(); 
	url= encodeURI(url);
	url= encodeURI(url);
	  
    xmlHttpDepartment.open("GET", url, true);
    xmlHttpDepartment.onreadystatechange = function(){updatePageDepartment(xmlHttpDepartment)};
    xmlHttpDepartment.send(null); 
}

//���½���
function updatePageDepartment(xmlHttp)
{
	if (xmlHttp.readyState < 4)
	{
    	
    }
    if (xmlHttp.readyState == 4)
	{
		if (xmlHttp.status == 200)
		{	  
			loadDepartment(xmlHttp.responseXML);
		}
	}
}

function loadDepartment(doc)
{
	if(doc == null || doc.documentElement == null)
	{
		alert("xml��ʽ����!");
		return;
	}

	var options = "<option value=\"0\">һ������</option>\r\n";

	var root = doc.documentElement;
	var cs = root.childNodes;
	for (var i = 0; i < cs.length; i++) 
	{
		if (cs[i].tagName == "key")
		{			
			options += "<option value=\""+unescape(cs[i].getAttribute("dept_sn"))+"\">"+unescape(cs[i].text)+"</option>\r\n";
		}
	}	
	$("parent_dept").innerHTML = options;
}