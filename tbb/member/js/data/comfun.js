// *********************************** ���ú��� ***********************************

//��ȡXML�ĵ��нڵ��ֵ
window.getNodeValue=function(obj,tag)
{
	return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

// �Ƴ������ַ�
function String.prototype.Trim() 
{
	return this.replace(/(^\s*)|(\s*$)/g,"");
}
