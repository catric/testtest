package com.tbb.message;

public abstract class AbstractMessagePerformed implements Runnable
{
	  protected static IMessage messageProxy = MessageAdapter.getInstance();
	  private Boolean isptp = null;
	  private String messageTarget=null;
	  protected String message=null;
	  protected String classCode=null;
	  protected String subclassCode=null;
	  public abstract void Performed();
	  
	  //调用子类的消息处理方法
	  public void run()
	  {
		  Performed();    
	  }
	  
	  public void InitMessage(Boolean isptp,String messageTarget,String message,
	                          String classCode,String subclassCode)
	  {
	    //以下修改判断是保证以下变量只能被初始化一次
	    if (this.isptp == null)
	    {
	      this.isptp = isptp;
	    }
	    //消息目标
	    if (this.messageTarget == null)
	    {  
	      this.messageTarget = messageTarget;
	    }  
	    //待处理消息的内容
	    if (this.message==null)
	    {
	      this.message = message;;
	    }
	    //大类代码
	    if (this.classCode==null)
	    {
	      this.classCode = classCode;
	    }
	    //小类代码
	    if (this.subclassCode == null)
	    {
	      this.subclassCode=subclassCode;
	    }
	    
	  }
	  
	  protected void send(String messagetext)
	  {
	    try
	    {
	      //判断消息是否是点对点的消息
	      if (isptp.booleanValue() == true)
	      {
	        messageProxy.sendPtP(messageTarget,message);
	      }
	      else
	      {
	        messageProxy.publish(messageTarget,message);  
	      }      
	    }
	    catch(MessageException e)
	    {
	       System.out.println(e.getMessage());
	    }
	  }
}
