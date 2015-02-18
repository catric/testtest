// ������

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

//�Ƿ�����Ч��������
function isValidNaturalNum(strInput)
{
	var myReg = /^[1-9]\d*$/; 
	if(myReg.test(strInput)) 
	{
		return true;
	}
	return false;
}

//�Ƿ�����Ч������
function isValidInt(strInput)
{
	var myReg = /^((0)|([1-9]\d*))$/; 
	if(myReg.test(strInput)) 
	{
		return true;
	}
	return false;
}

//�Ƿ�����Ч�ĸ�������ֵ���磺10 �� 10.23 �� 10.2345
function isValidFloat(strInput)
{
	var myReg = /^(([1-9]\d*(\.\d{1,4})?)|(0\.\d{1,4})|(0))$/; 
	if(myReg.test(strInput)) 
	{
		if (parseFloat(strInput)>0)
		{
			return true;
		}	
	}
	return false;
}

//�Ƿ�����Ч���¶�
function isValidTemperature(strInput)
{
	var myReg = /^(0|(-?[1-9]\d?))$/; 
	if(myReg.test(strInput)) 
	{
		return true;
	}
	return false;
}

//�Ƿ�����Ч�ĵ绰���� 
function isValidTeleNo(strInput)
{
	var myReg = /^[(0-9)|(*#)]{3,15}$/; 
	if(myReg.test(strInput)) 
	{
		return true;
	}
	return false;
}

//�Ƿ�����Ч���ڸ�ʽ���磺2006-1-1 ��2006-01-01
function isValidDate(strInput)
{
	var myReg = /^\d{4}-((0?[1-9])|(1[0-2]))-\d{1,2}$/; 
	if(myReg.test(strInput)) 
	{
		var ymd=strInput.split("-");
		var year=parseInt(ymd[0],10);  //�Ӳ���10��ʮ���ƴ�����Ȼ���԰˽��ƴ���
		var month=parseInt(ymd[1],10); //�Ӳ���10��ʮ���ƴ�����Ȼ���԰˽��ƴ���
		var day=parseInt(ymd[2],10);  //�Ӳ���10��ʮ���ƴ�����Ȼ���԰˽��ƴ���
		if(month>12 || month<1) return false;
		if(day>31 || day<1) return false;

		var maxDay=new Array(12);      //ÿ�µ��������
		if(month==1) maxDay[0]=31;
		if(month==2) maxDay[1]=28;
		if(month==3) maxDay[2]=31;
		if(month==4) maxDay[3]=30;
		if(month==5) maxDay[4]=31;
		if(month==6) maxDay[5]=30;
		if(month==7) maxDay[6]=31;
		if(month==8) maxDay[7]=31;
		if(month==9) maxDay[8]=30;
		if(month==10) maxDay[9]=31;
		if(month==11) maxDay[10]=30;
		if(month==12) maxDay[11]=31;
		//����
		if((year%4==0 && year%100!=0) || (year%400==0)) maxDay[1]=29;
		if(maxDay[month-1]<day) return false;

		return true;
	}
	return false;
}

//�Ƿ�����Ч����ʱ���ʽ���磺2006-1-1 0:0 ��2006-01-01 00:00
function isValidDateTime(strInput)
{
	var myReg = /^\d{4}-((0?[1-9])|(1[0-2]))-\d{1,2}\s((0?[0-9])|(1[0-9])|(2[0-3])):([0-5]?[0-9])$/; 
	if(myReg.test(strInput)) 
	{
		var ymd=strInput.substr(0,strInput.indexOf(" ")).split("-");
		var year=parseInt(ymd[0],10);  //�Ӳ���10��ʮ���ƴ�����Ȼ���԰˽��ƴ���
		var month=parseInt(ymd[1],10); //�Ӳ���10��ʮ���ƴ�����Ȼ���԰˽��ƴ���
		var day=parseInt(ymd[2],10);  //�Ӳ���10��ʮ���ƴ�����Ȼ���԰˽��ƴ���
		if(month>12 || month<1) return false;
		if(day>31 || day<1) return false;

		var maxDay=new Array(12);      //ÿ�µ��������
		if(month==1) maxDay[0]=31;
		if(month==2) maxDay[1]=28;
		if(month==3) maxDay[2]=31;
		if(month==4) maxDay[3]=30;
		if(month==5) maxDay[4]=31;
		if(month==6) maxDay[5]=30;
		if(month==7) maxDay[6]=31;
		if(month==8) maxDay[7]=31;
		if(month==9) maxDay[8]=30;
		if(month==10) maxDay[9]=31;
		if(month==11) maxDay[10]=30;
		if(month==12) maxDay[11]=31;
		//����
		if((year%4==0 && year%100!=0) || (year%400==0)) maxDay[1]=29;
		if(maxDay[month-1]<day) return false;

		return true;
	}
	return false;
}

//�Ƿ�����Ч��E-mail�ַ���
function isValidEmail(strInput)
{
	var myReg = /@.*\.[a-z]{2,6}/; 
	if(myReg.test(strInput)) 
	{
		return true;
	}
	return false;
}

