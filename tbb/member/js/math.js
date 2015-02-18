//WZW.Math.add = add;				//add(n1,n2) = n1+n2
//WZW.Math.subtract = subtract;	//subtract(n1,n2) = n1-n2
//WZW.Math.multiply = multiply;	//multiply(n1,n2) = n1*n2
//WZW.Math.divide = divide;		//divide(n1,n2) = n1/n2
//WZW.Math.mod = mod;				//mod(n1,n2) = n1%n2
//WZW.Math.round = round;			//round(n1,n2) = n1����n2λС��

//�������: n1 + n2
function add(n1,n2)
{
	if (isNaN(n1) || isNaN(n2))
	{
		return 0;
	}
	var rate = rateMax(n1,n2);
	return ((___parseInt(n1*rate) + ___parseInt(n2*rate))/rate);
}

//�������: n1 - n2
function subtract(n1,n2)
{
	if (isNaN(n1) || isNaN(n2))
	{
		return 0;
	}
	var rate = rateMax(n1,n2);
	return ((___parseInt(n1*rate) - ___parseInt(n2*rate))/rate);
}

//�������: n1 * n2
function multiply(n1,n2)
{
	if (isNaN(n1) || isNaN(n2))
	{
		return 0;
	}
	var rate = rateMax(n1,n2);
	return ((___parseInt(n1*rate) * ___parseInt(n2*rate))/Math.pow(rate,2));
}

//�������: n1 / n2
function divide(n1,n2)
{
	if (isNaN(n1) || isNaN(n2))
	{
		return 0;
	}
	var rate = rateMax(n1,n2);
	return ((___parseInt(n1*rate) / ___parseInt(n2*rate))/rate);
}

//�������ȡ��: n1 % n2
function mod(n1,n2)
{
	if (isNaN(n1) || isNaN(n2))
	{
		return 0;
	}
	var rate = rateMax(n1,n2);
	return ((___parseInt(n1*rate) % ___parseInt(n2*rate))/rate);
}

//�������뱣��С��: n1����n2λС��
function round(n1,n2){
	if (isNaN(n1))
	{
		return 0;
	}
	if (isNaN(n2) || n2 < 0)
	{
		n2 = 0;
	}
	return Math.round(parseFloat(n1) * Math.pow(10,n2))/Math.pow(10,n2);
}

//��������תΪ����Ӧ�÷Ŵ�ı���
function rate(n)
{	
	if (isNaN(n))
	{
		return 1;
	}

	var n = n.toString();

	if (n.indexOf(".") == -1)
	{
		return 1;
	}	
	return Math.pow(10,___parseInt(n.length - n.indexOf(".") - 1));
}

//������������תΪ����Ӧ�÷Ŵ�ı��������ֵ
function rateMax(n1,n2)
{
	if (rate(n1) > rate(n2))
	{
		return rate(n1);
	}

	return rate(n2);
}

//����ת��������
function ___parseInt(n)
{
	if (isNaN(n))
	{
		return 0;
	}
	return parseInt(n,10);
}