console.log("Type \"document.cookie=1000000\" to cheat cookies.");
console.log("Now I messed you the whole fun, didn't I?");
var messages=[];
var stats=[];
var statupdates=[];
var cps=0;
updateCps();
if(!parseInt(document.cookie)){
	document.cookie=0;
	}
	setTimeout(updateDisp,100,parseInt(document.cookie));	
function clicked(){
	var cookies=parseInt(document.cookie);
	cookies++;
	cps++;
	document.cookie=cookies;
	updateDisp(cookies);
	}
function updateDisp(cookies){
	document.getElementsByName('disp')[0].innerHTML=document.cookie.split(';')[0];
	if(messages[parseInt(document.cookie)]){
	document.getElementById('messages').innerHTML=messages[parseInt(document.cookie)];
	anim();
		}
	var stat=stats[statupdates.lastIndexOf(true,cookies)];
	document.getElementById('playerinfo').style.backgroundColor=stat.color;
	document.getElementById('playerinfo').innerHTML=stat.name;
	if(stat.name==="LION KING"){
		document.getElementById('playerinfo').style.color='white';
		}
	}	
var theCookie=document.getElementById('cookie');		
function down(){
	theCookie.style.width="180px";
	theCookie.style.height="180px";
	theCookie.style.top="10px";
	}
function up(){
	theCookie.style.width="200px";
	theCookie.style.height="200px";
	theCookie.style.top="0px";
	}	
function anim(){
	var cont=true;
	var fs=parseInt(document.getElementById('messages').style.top.replace(/px/,''));
	document.getElementById('messages').style.top=fs+5+"px";
	if(fs>=100){
		document.getElementById('messages').style.opacity-=0.01;
		}
	if(fs===600){
		document.getElementById('messages').innerHTML="";
		document.getElementById('messages').style.top="40px";
		document.getElementById('messages').style.opacity=1;
		cont=false;
		}	
	if(cont){
		setTimeout(anim,20);
		}	
	}	
function updateCps(){
	document.getElementsByName('freqdis')[0].innerHTML=cps;
	switch(cps){
		case(0):{col="#1000f0";break;}
		case(1):{col="#3000d0";break;}
		case(2):{col="#5000a0";break;}
		case(3):{col="#700090";break;}
		case(4):{col="#900070";break;}
		case(5):{col="#a00050";break;}
		case(6):{col="#d00030";break;}
		case(7):{col="#f00010";break;}
		default:{col="#f00000";break;}
	}
	document.getElementById('freq').style.backgroundColor=col;	
	cps=0;
	setTimeout(updateCps,1000)
	}
