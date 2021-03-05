

function start(){
 t=new logo(300,450,-90,"can1");
 t2=new logo(100,50,0,"can1");
 t.c.lineWidth=1;
t.c.strokeStyle="firebrick";
//sq(t);t.fd(50);t.rt(40);sq(t);

v(150,t,lev);
//t.rt(90);
w(25,t,lev);
//sqs(t2,8,20);
chaos(t2,50);
}

function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }

 /*function fig(){
	 let ch=event.key;
	 if(ch=='a'){clear_Can();trirec(tKey,200,5);}
 if(ch=='b'){clear_Can();tKey.set1(100,100,0);sqs(tKey,5,30);}
 }*/