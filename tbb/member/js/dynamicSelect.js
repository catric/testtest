function move(left,right){
	if (left == null) {alert("Դ����Ϊ��"); return;}
	if (right == null) {alert("Ŀ�Ķ���Ϊ��"); return;}
	if (left.selectedIndex == -1) {alert("������ѡ��һ����Ŀ!");return;}
	
	var index = 0;
	
	while (left.length > 0 && left.selectedIndex > -1)
	{
		index = left.selectedIndex;
		
		var opt = new Option(left.options[index].text, left.options[index].value);
		
		left.options[index] = null;		
		right.options[right.length] = opt;
	}	
}

function selectAllOptions(obj){
	if (obj == null) {alert("����Ϊ��"); return;}
	for (i=0;i<obj.length;i++)
	{
		obj.options[i].selected = true;
	}
}