//����ʹ�õ�js 


//�ı��ж�����
function changeFireHouseType()
{
	//��ȡ�ж�����ֵ
	var fireHouseTypeValue = document.objForm.fireHouseType.value;
	
	//��ȡ�����ж����͵��ж��б���䵽�ؼ�
	document.objForm.fireHouseList.length = 0;
	
	for (var i=0;i<vFireHouseList.length;i++)
	{
		if (vFireHouseList[i][2] == fireHouseTypeValue)
		{
			document.objForm.fireHouseList.options[document.objForm.fireHouseList.length]=new Option(vFireHouseList[i][1],vFireHouseList[i][0]); 
		}
	}
	
	if (document.objForm.fireHouseList.length > 0)
	{
		document.objForm.fireHouseList[0].selected = true;		
	}
	changeFireHouseList();
}

//�ı��ж�
function changeFireHouseList()
{
	document.objForm.fireEngineList.length = 0;
	document.objForm.equipmentList.length = 0;

	if (document.objForm.fireHouseList.selectedIndex != -1)
	{
		//��ȡ�ж�����ֵ
    	var fireHouseListValue = document.objForm.fireHouseList.value;
    	
    	//��ȡ�����жӵĿ��ó����б���䵽�ؼ�    	
    	for (var i=0;i<vFireEngineList.length;i++)
    	{
    		if (vFireEngineList[i][0] == fireHouseListValue && vFireEngineList[i][3] == true)
    		{
    			document.objForm.fireEngineList.options[document.objForm.fireEngineList.length]=new Option(vFireEngineList[i][2],vFireEngineList[i][1]); 
    		}
    	}
		
		//��ȡ�����жӵĿ���װ���б���䵽�ؼ�    	
    	for (var i=0;i<vEquipmentList.length;i++)
    	{
    		if (vEquipmentList[i][0] == fireHouseListValue && vEquipmentList[i][3] == true)
    		{
    			document.objForm.equipmentList.options[document.objForm.equipmentList.length]=new Option(vEquipmentList[i][2],vEquipmentList[i][1]); 
    		}
    	}
		
		if (document.objForm.fireEngineList.length > 0)
    	{
    		document.objForm.fireEngineList[0].selected = true;		
    	}
		
		if (document.objForm.equipmentList.length > 0)
    	{			
    		document.objForm.equipmentList[0].selected = true;		
    	}
	}	
}

//���ó���״̬
function setFireEngineStatus(fe_id,flag)
{
	for (i=0;i<vFireEngineList.length;i++)
	{
		if (vFireEngineList[i][1] == fe_id)
		{
			vFireEngineList[i][3] = flag;
		}
	}	
}

//����װ��״̬
function setEquipmentStatus(equ_id,flag)
{
	for (i=0;i<vEquipmentList.length;i++)
	{
		if (vEquipmentList[i][1] == equ_id)
		{
			vEquipmentList[i][3] = flag;
		}
	}	
}

//�����ɳ�����װ�����Ƴ�ָ�ɰ�ť�Ŀ���״̬
function setButtonEnable()
{
	if (document.objForm.fireEngineList.selectedIndex == -1)
    {
    	document.getElementById("btnAppointFireEngine").disabled = true;		
    }
	else
	{
		document.getElementById("btnAppointFireEngine").disabled = false;		
	}

	if (document.objForm.equipmentList.selectedIndex == -1)
    {
    	document.getElementById("btnAppointEquipment").disabled = true;		
    }
	else
	{
		document.getElementById("btnAppointEquipment").disabled = false;		
	}

	if (!tree.getSelected())
	{
		document.getElementById("btnCancelAppoint").disabled = true;		
	}
	else
	{
		document.getElementById("btnCancelAppoint").disabled = false;
	}
}

//�����ж�ID��ȡ�жӶ���
function getFireHouseById(organ_id)
{
	for (var i=0;i<vFireHouseList.length;i++)
	{
		if (vFireHouseList[i][0] == organ_id)
		{
			return vFireHouseList[i];
		}
	}
	return null;
}

//���ݳ���ID��ȡ��������
function getFireEngineById(fe_id)
{
	for (var i=0;i<vFireEngineList.length;i++)
	{
		if (vFireEngineList[i][1] == fe_id)
		{
			return vFireEngineList[i];
		}
	}
	return null;
}

//����װ��ID��ȡװ������
function getEquipmentById(equ_id)
{
	for (var i=0;i<vEquipmentList.length;i++)
	{
		if (vEquipmentList[i][1] == equ_id)
		{
			return vEquipmentList[i];
		}
	}
	return null;
}


//��ʼ������
function init()
{
	changeFireHouseType();
	//ÿ100���������ɳ�����װ����ť�Ŀ���״̬
	setInterval("setButtonEnable()",100);
}

//��ʼ��
init();

/**====================================������========================================================**/
//���Ľڵ����ͣ�0 �ж� 1 ���� 2 װ�� 3 ����Tag 4 װ��Tag
//�����ж�id��ȡ��Ӧ�Ľ��
function getFireHouseNode(organ_id)
{
	var obj = null;
	//����һ���ڵ�
	for(var i=0; i<tree.childNodes.length; i++)//�����ӽڵ�
	{
	  if (tree.childNodes[i].value == organ_id && tree.childNodes[i].type == 0)
	  {	
		 return tree.childNodes[i];
	  }
	}
	return obj;
}

//�����ж�id��ȡ��Ӧ�ĳ���Tag�ڵ�
function getFireEngineTagNode(organ_id)
{
	var obj = null;
	
	var fireHouseNode = getFireHouseNode(organ_id);
	if (fireHouseNode == null)
	{
		return null;
	}

	//���������ڵ�
	for(var i=0; i<fireHouseNode.childNodes.length; i++)//�����ӽڵ�
	{
	  if (fireHouseNode.childNodes[i].value == organ_id && fireHouseNode.childNodes[i].type == 3)
	  {	
		 return fireHouseNode.childNodes[i];
	  }
	}
	return obj;
}

//�����ж�id��ȡ��Ӧ��װ��Tag�ڵ�
function getEquipmentTagNode(organ_id)
{
	var obj = null;
	
	var fireHouseNode = getFireHouseNode(organ_id);
	if (fireHouseNode == null)
	{
		return null;
	}

	//���������ڵ�
	for(var i=0; i<fireHouseNode.childNodes.length; i++)//�����ӽڵ�
	{
	  if (fireHouseNode.childNodes[i].value == organ_id && fireHouseNode.childNodes[i].type == 4)
	  {	
		 return fireHouseNode.childNodes[i];
	  }
	}
	return obj;
}

//�ɳ�����
function appointFireEngine()
{
	var obj = document.objForm.fireEngineList;

	if (obj.selectedIndex == -1)
	{
		alert("������ѡ��һ��Ҫָ�ɵĳ���!");
		return;
	}

	for (var i=0;i<obj.length;i++)
	{
		if (obj[i].selected == true)
		{
			var fireEngine = getFireEngineById(obj[i].value);
			if (fireEngine != null)
			{
				var fireHouse = getFireHouseById(fireEngine[0]);
				if (fireHouse != null)
				{
					var fireHouseNode = getFireHouseNode(fireHouse[0]);					
					if (fireHouseNode == null)
					{
						fireHouseNode =  new WebFXTreeItem(fireHouse[1]+"@@"+fireHouse[0]+"@@0","javascript:void(0);");
						tree.add(fireHouseNode);
					}
					var fireEngineTagNode = getFireEngineTagNode(fireHouse[0]);
					if (fireEngineTagNode == null)
					{
						fireEngineTagNode =  new WebFXTreeItem("��������@@"+fireHouse[0]+"@@3","javascript:void(0);");
						fireHouseNode.add(fireEngineTagNode);
					}
					var fireEngineNode = new WebFXTreeItem(fireEngine[2]+"@@"+fireEngine[1]+"@@1","javascript:void(0);");
					fireEngineTagNode.add(fireEngineNode);

					//���ĵ�ǰ����Ϊ������
					setFireEngineStatus(fireEngine[1],false);
					//�Ƴ�����
					obj.options[i] = null;
					i= i-1;
				}
			}
		}		
	}
	tree.expandAll();

	if (obj.length > 0)
    {
    	obj[0].selected = true;		
    }
}

//��װ������
function appointEquipment()
{
	var obj = document.objForm.equipmentList;

	if (obj.selectedIndex == -1)
	{
		alert("������ѡ��һ��Ҫָ�ɵ�װ��!");
		return;
	}

	for (var i=0;i<obj.length;i++)
	{
		if (obj[i].selected == true)
		{
			var equipment = getEquipmentById(obj[i].value);
			if (equipment != null)
			{
				var fireHouse = getFireHouseById(equipment[0]);
				if (fireHouse != null)
				{
					var fireHouseNode = getFireHouseNode(fireHouse[0]);					
					if (fireHouseNode == null)
					{
						fireHouseNode =  new WebFXTreeItem(fireHouse[1]+"@@"+fireHouse[0]+"@@0","javascript:void(0);");
						tree.add(fireHouseNode);
					}
					var equipmentTagNode = getEquipmentTagNode(fireHouse[0]);
					if (equipmentTagNode == null)
					{
						equipmentTagNode =  new WebFXTreeItem("����װ��@@"+fireHouse[0]+"@@4","javascript:void(0);");
						fireHouseNode.add(equipmentTagNode);
					}
					var equipmentNode = new WebFXTreeItem(equipment[2]+"@@"+equipment[1]+"@@2","javascript:void(0);");
					equipmentTagNode.add(equipmentNode);

					//���ĵ�ǰװ��Ϊ������
					setEquipmentStatus(equipment[1],false);
					//�Ƴ�װ��
					obj.options[i] = null;
					i= i-1;
				}
			}
		}		
	}
	tree.expandAll();

	if (obj.length > 0)
    {
    	obj[0].selected = true;		
    }
}

//�Ƴ�ָ�� nodeType 0 �ж� 1 ���� 2 װ�� 3 ����Tag 4 װ��Tag
function cancelAppoint()
{
	if (!tree.getSelected())
	{
		alert("������ѡ��һ���ڵ��Ȼ���Ƴ�ָ��!");
		return;
	}
	try
	{
		//��ȡ�ڵ�
		var node = tree.getSelected();
		switch (node.type)
		{
			case "0":
				//���ó���״̬
				for (var i=0;i<vFireEngineList.length;i++)
				{
					if (vFireEngineList[i][0] = node.value)
					{						
						setFireEngineStatus(vFireEngineList[i][1],true);
					}
				}
				//����װ��״̬
				for (var i=0;i<vEquipmentList.length;i++)
				{
					if (vEquipmentList[i][0] = node.value)
					{
						setEquipmentStatus(vEquipmentList[i][1],true);
					}
				}
				tree.getSelected().remove();				
				break;
			case "1":
				//���ó���״̬
				for (var i=0;i<vFireEngineList.length;i++)
				{
					if (vFireEngineList[i][1] = node.value)
					{						
						setFireEngineStatus(vFireEngineList[i][1],true);
						//�鿴����Tag�»���û�г�����û�оͽ���ɾ��
						var fireEngineTagNode = getFireEngineTagNode(vFireEngineList[i][0]);
						if (fireEngineTagNode != null)
						{
							fireEngineTagNode.remove();			
						}
						
						break;
					}
				}				
				tree.getSelected().remove();				
				break;
		}
		//����ǰȡ���ĳ�����ԭ���ؼ���
		changeFireHouseList();
	}
	catch(ex)
	{}
}