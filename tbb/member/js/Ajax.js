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


//ajax��������������callbackFun������ֵ
function ajaxMethod(ajaxUrl,responseSuccess,responseFailure)
{
    var xmlHttp = false;
    //����ajax��������	
	if (!xmlHttp || xmlHttp == null)
	{
		xmlHttp = getXmlHttp();
	}
	else
	{
		xmlHttp.abort();
	}
	
	if (!xmlHttp)
	{
		alert("��֧��xmlHttp����!");
		return;
	}	
	
	//�Թؼ��ֽ��б���
    var url = ajaxUrl + "&timestamp="+new Date().getTime(); 
	url= encodeURI(url);
	url= encodeURI(url);
	  
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = function(){response(xmlHttp,responseSuccess,responseFailure)};
    xmlHttp.send(null); 	
}

//������Ӧ�¼�
function response(xmlHttp,responseSuccess,responseFailure)
{
    if (xmlHttp.readyState == 4)
	{
	    if (xmlHttp.status == 200)
		{
		    if (responseSuccess != null)
		    {
		        responseSuccess(xmlHttp);
		    }
		}
		else
		{
		    if (responseFailure != null)
		    {
		        responseFailure();
		    }
		    else
		    {
		        defaultFailure();
		    }
		}
	}
}

function defaultFailure()
{
    alert("ϵͳ����00!");
}