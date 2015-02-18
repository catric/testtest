/****
ѭ��������
����˵��:
		ID		"marquee"	����ID		(��ѡ)
		Width		(760)	�������ӿ��	(��ѡ,Ĭ��ֵΪ������ʼ���õĿ��)
		Height		(52)	�������Ӹ߶�	(��ѡ,Ĭ��ֵΪ������ʼ���õĸ߶�)
		Timer		(50)	��ʱ��		(��ѡ,Ĭ��ֵΪ30,��ֵԽС,�������ٶ�Խ��,1000=1��,���鲻С��20)
		Step		(1)		�����Ĳ���	(��ѡ,Ĭ��ֵΪ2,��ֵԽ��,����Խ��)
		WaitTime	(3000)	��ʼʱ�ĵȴ�ʱ��(��ѡ,Ĭ�ϻ�0Ϊ���ȴ�,1000=1��)
		DelayTime	(5000)	��Ъͣ���ӳ�ʱ��(��ѡ,Ĭ��Ϊ0��ͣ��,1000=1��)
		ScrollStep	(52)	��Ъ�������	(��ѡ,Ĭ��Ϊ������/�߶�)
****/
function Marquee(ID, Width, Height, Timer, Step, WaitTime, DelayTime, ScrollStep)
{
	// ָ��Ĭ��ֵ
	this.Width = this.Height = this.WaitTime = this.DelayTime = this.ScrollStep = this.CTL = 0;
	this.Timer = 30;
	this.Step = 1;
	this.textBuf = "";	// �����ϴ���ʾ���ı�
	this.textHeight = 0;	// �������ǰ�ı�����ʵ�߶�
	
	// ��ȡ����
	this.ID = document.getElementById(arguments[0]);
	if(!this.ID) {
		return;
	}		
	if(typeof arguments[1] == "number")this.Width = arguments[1];
	if(typeof arguments[2] == "number")this.Height = arguments[2];
	if(typeof arguments[3] == "number")this.Timer = arguments[3];
	if(typeof arguments[4] == "number")this.Step = arguments[4];
	if(typeof arguments[5] == "number")this.WaitTime = arguments[5];
	if(typeof arguments[6] == "number")this.DelayTime = arguments[6];	
	if(typeof arguments[7] == "number")this.ScrollStep = arguments[7]

	// ���ع�����
	this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
	this.ID.noWrap = true;
	this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
	
	// �жϲ����Ϸ�
	if ((arguments.length >= 7) && (this.Step > 0))
		this.Start();
}

// ������ʾ����
Marquee.prototype.InitHtml = function(text)
{
	// �����ı�����ֹ����
	this.ID.innerHTML = text;
	// ����Դ������ʵ�߶�
	this.textHeight = this.ID.scrollHeight;
	// ������ʾ�����ӹ���
	if (this.textHeight > this.Height) {
		this.ID.innerHTML = text + text;		
	}
	this.ID.scrollTop = 0;
}

// ����������ʱ��
Marquee.prototype.Start = function()
{
	if(this.Timer < 20)this.Timer = 20;
	// ͳһ�������ߴ�
	if(this.Width == 0)
		this.Width = parseInt(this.ID.style.width);
	if(this.Height == 0)
		this.Height = parseInt(this.ID.style.height);

	this.ID.style.width = this.Width;
	this.ID.style.height = this.Height;

	var mqobj = this;
	var timer = this.Timer;
	var waittime = this.WaitTime;
	var delaytime = this.DelayTime;
	
	mqobj.StartID = function()
		{
			mqobj.Scroll();
		}
	
	mqobj.Continue = function()
		{
			clearInterval(mqobj.TimerID);
			mqobj.Stop = 0;
			mqobj.CTL = 0;
			mqobj.TimerID = setInterval(mqobj.StartID, timer);
		}

	mqobj.Pause = function()
		{
			mqobj.Stop = 1;
			clearInterval(mqobj.TimerID);
			setTimeout(mqobj.Continue, delaytime);
		}
	
	mqobj.Begin = function()	
		{			
			// ÿ��timer����mqobj.StartID�¼�
			mqobj.TimerID = setInterval(mqobj.StartID, timer);
		}

	// �ȴ�1����������
	setTimeout(mqobj.Begin, waittime);
}

// �������λ��
Marquee.prototype.Scroll = function()
{
	this.CTL += this.Step;
	if ((this.CTL >= this.ScrollStep) && (this.DelayTime > 0)) {
		this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
		this.Pause();
		return;
	} else {
		this.ID.scrollTop += this.Step;
		if (this.ID.scrollHeight > this.textHeight + this.Height) {
		/*	if (this.ID.scrollTop >= (this.textHeight + this.Height))
			{			
				this.ID.scrollTop = 0;
			}
		} else { */
			if (this.ID.scrollTop >= this.textHeight + (this.Height - this.ScrollStep))
			{	
				//this.Pause();		
				this.ID.scrollTop = 0;				
			}
		}
	}
	
/*			
	if (this.ID.scrollTop >= this.textHeight) {
		// ������
		this.ID.scrollTop = 0;		
	} else {
		// ��������
		this.ID.scrollTop += this.Step;
	}
	
	document.getElementById("a").value="scrollTop:"+ this.ID.scrollTop + 
		" CTL:"+ this.CTL +
		" scrollHeight:" + this.ID.scrollHeight + 
		" textHeight:" + this.textHeight +
		" clientHeight:"+ this.ID.clientHeight +
		" ScrollStep:"+ this.ScrollStep;	
*/
}