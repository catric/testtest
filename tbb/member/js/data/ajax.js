/**
 * XMLHttpRequest Object Pool
 *
 * @author    legend <legendsky@hotmail.com>
 * @Copyright www.ugia.cn
 *
 * @Edit	  majun		2007/09/21
 */ 

var XMLHttp = {
    xmlHttpPool: [],

    _getInstance: function ()
    {
		// ����δ��ʼ��������������
        for (var i = 0; i < this.xmlHttpPool.length; i ++)
        {
            if (this.xmlHttpPool[i].readyState == 0 || this.xmlHttpPool[i].readyState == 4)
            {
                return this.xmlHttpPool[i];
            }
        }

        // IE5�в�֧��push����
        this.xmlHttpPool[this.xmlHttpPool.length] = this._createObj();

        return this.xmlHttpPool[this.xmlHttpPool.length - 1];
    },

    _createObj: function ()
    {
        if (window.XMLHttpRequest)
        {
			// Mozilla �����
            var objXMLHttp = new XMLHttpRequest();
			if (objXMLHttp.overrideMimeType) 
			{
				// ����MiME���
				objXMLHttp.overrideMimeType("text/xml");
			}
        }
        else
        {
            var MSXML = ['MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];
            for(var n = 0; n < MSXML.length; n ++)
            {
                try
                {
                    var objXMLHttp = new ActiveXObject(MSXML[n]);
                    break;
                }
                catch(e)
                {
					// �������֧��.������Ϊ����һ��֧�֣��޴�����
                }
            }
         }          

        // mozillaĳЩ�汾û��readyState����
        if (objXMLHttp.readyState == null)
        {
            objXMLHttp.readyState = 0;

            objXMLHttp.addEventListener("load", function ()
                {
                    objXMLHttp.readyState = 4;

                    if (typeof objXMLHttp.onreadystatechange == "function")
                    {
                        objXMLHttp.onreadystatechange();
                    }
                },  false);
        }

        return objXMLHttp;
    },

    // ��������(����[post,get], ��ַ, ����, �ص�����)
    sendReq: function (method, url, data, callback)
    {
        var objXMLHttp = this._getInstance();
        
		// �ڵ��� send() ��������֮ǰ�������ø����ԣ������������ڻش��������֮����ܲ鿴������
		if(typeof(callback) == 'function') {	
			objXMLHttp.onreadystatechange = function() {
				// �ṩ��ǰ HTML �ľ���״̬
				if (objXMLHttp.readyState == 4 && (objXMLHttp.status == 200 || objXMLHttp.status == 304))
                {
                	callback(objXMLHttp);
                }				
			}
		}
		
        with(objXMLHttp)
        {
            try
            {
                // ���������ֹ����
                if (url.indexOf("?") > 0)
                {
                    url += "&randnum=" + Math.random();
                }
                else
                {
                    url += "?randnum=" + Math.random();
                }

                open(method, url, true);
				
                // �趨������뷽ʽ
                	setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=GBK');
                send(data);
            }
            catch(e)
            {
                alert(e);
            }
        }
    }
};

/*
ʾ���� 
<script type="text/javascript" src="xmlhttp.js"></script>
<script type="text/javascript">
function test(obj)
{
    alert(obj.statusText);
}

XMLHttp.sendReq('GET', 'http://www.ugia.cn/wp-data/test.htm', '', test);
XMLHttp.sendReq('GET', 'http://www.ugia.cn/wp-data/test.htm', '', test);
XMLHttp.sendReq('GET', 'http://www.ugia.cn/wp-data/test.htm', '', test);
XMLHttp.sendReq('GET', 'http://www.ugia.cn/wp-data/test.htm', '', test);

alert('Pool length:' + XMLHttp._objPool.length);
</script>  

���飺
1��������ء��Ĺ�������Ҫ��ǿ������ص�������
2��������ء����ڴ������Ҫ��ǿ������ʹ����ϵĶ����ͷ��ڴ档
3�������������һ�£��Կ������ڷ�������ʱ��������ʱ���µ�������ĺ�õ������
4��Ϊ�˴��븴�úͽ�׳���ص�����Ӧ����֤�Ƿ���Ч��Ҳ���ǻص�����Ӧ�ÿ���Ϊ�գ�����ȱʡ����
*/