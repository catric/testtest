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
function getTerminal(terminalSrc){
	var xmlHttpTerminal = false;

	//����ajax��������	
	if (!xmlHttpTerminal || xmlHttpTerminal == null)
	{
		xmlHttpTerminal = getXmlHttp();
	}
	else
	{
		xmlHttpTerminal.abort();
	}
	
	if (!xmlHttpTerminal)
	{
		alert("��֧��xmlHttp����!");
		hiddenAlikeDiv(inputId);
		return;
	}		

	//�Թؼ��ֽ��б���
    var url = terminalSrc;
	url += "&timestamp="+new Date().getTime(); 
	url= encodeURI(url);
	url= encodeURI(url);
	  
    xmlHttpTerminal.open("GET", url, true);
    xmlHttpTerminal.onreadystatechange = function(){updatePageTerminal(xmlHttpTerminal)};
    xmlHttpTerminal.send(null); 
}

//���½���
function updatePageTerminal(xmlHttp)
{
	if (xmlHttp.readyState < 4)
	{
    	
    }
    if (xmlHttp.readyState == 4)
	{
		if (xmlHttp.status == 200)
		{	  
			loadTerminal(xmlHttp.responseXML);
		}
	}
}

function loadTerminal(doc)
{
	if(doc == null || doc.documentElement == null)
	{
		alert("xml��ʽ����!");
		return;
	}

	var root = doc.documentElement;
	var cs = root.childNodes;
	for (var i = 0; i < cs.length; i++) 
	{
		if (cs[i].tagName == "terminal")
		{
			var cschild = cs[i].childNodes;
			for (var j = 0; j < cschild.length; j++) 
			{
				switch (cschild[j].tagName)
				{
					case "terminalstate"://״̬
						try
						{
							$("terminalstate").innerHTML = unescape(cschild[j].text);
						}
						catch (ex)
						{
						}
						break;	
				}
			}
		}
	}	
}