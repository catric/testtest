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
function getWeather(weatherSrc){
	var xmlHttpWeather = false;

	//����ajax��������	
	if (!xmlHttpWeather || xmlHttpWeather == null)
	{
		xmlHttpWeather = getXmlHttp();
	}
	else
	{
		xmlHttpWeather.abort();
	}
	
	if (!xmlHttpWeather)
	{
		alert("��֧��xmlHttp����!");
		hiddenAlikeDiv(inputId);
		return;
	}		

	//�Թؼ��ֽ��б���
    var url = weatherSrc;
	url += "&timestamp="+new Date().getTime(); 
	url= encodeURI(url);
	url= encodeURI(url);
	  
    xmlHttpWeather.open("GET", url, true);
    xmlHttpWeather.onreadystatechange = function(){updatePageWeather(xmlHttpWeather)};
    xmlHttpWeather.send(null); 
}

//���½���
function updatePageWeather(xmlHttp)
{
	if (xmlHttp.readyState < 4)
	{
    	
    }
    if (xmlHttp.readyState == 4)
	{
		if (xmlHttp.status == 200)
		{	  
			loadWeather(xmlHttp.responseXML);
		}
	}
}

function loadWeather(doc)
{
	setNoPng();

	if(doc == null || doc.documentElement == null)
	{
		//alert("xml��ʽ����!");
		return;
	}

	var temperature = "";
	var humidity = "";
	var wind_condition="";
	var wind_speed = "";
	var condition = "";
	var condition_dscr = "";

	var low_temp= "";
	var high_temp ="";
	var forecastaction = "";

	var hour = 0;

	var root = doc.documentElement;
	var cs = root.childNodes;
	for (var i = 0; i < cs.length; i++) 
	{
		if (cs[i].tagName == "weather")
		{
			var cschild = cs[i].childNodes;
			for (var j = 0; j < cschild.length; j++) 
			{
				switch (cschild[j].tagName)
				{
					case "temperature"://��ǰ�¶�
						temperature = unescape(cschild[j].text);					
						break;						
					case "humidity"://��ǰʪ��
						humidity = unescape(cschild[j].text);						
						break;	
					case "wind_condition"://��ǰ����
						wind_condition = unescape(cschild[j].text);						
						break;	
					case "wind_speed"://��ǰ����
						wind_speed = unescape(cschild[j].text);					
						break;
					case "condition"://�������
						condition = unescape(cschild[j].text);					
						break;	
					case "condition_dscr"://�����������
						condition_dscr = unescape(cschild[j].text);					
						break;	
					case "hour"://��ʱСʱʱ��
						hour = unescape(cschild[j].text);					
						break;	
				}
			}

			setWeather(temperature,humidity,wind_condition,wind_speed,condition,condition_dscr,hour);
		}

		if (cs[i].tagName == "weatherforecast")
		{
			var cschild = cs[i].childNodes;
			for (var j = 0; j < cschild.length; j++) 
			{
				switch (cschild[j].tagName)
				{
					case "low_temp"://����¶�
						low_temp= unescape(cschild[j].text);									
						break;
					case "high_temp"://����¶�
						high_temp = unescape(cschild[j].text);									
						break;				
					case "forecastcondition"://�������
						forecastcondition = unescape(cschild[j].text);									
						break;
					case "condition_dscr"://�����������
						condition_dscr = unescape(cschild[j].text);					
						break;	
					case "hour"://��ʱСʱʱ��
						hour = unescape(cschild[j].text);					
						break;	
				}
			}

			setWeatherForecast(low_temp,high_temp,forecastcondition,condition_dscr,hour);
		}

		
	}	
}