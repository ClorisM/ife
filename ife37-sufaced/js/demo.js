var pP=document.getElementById("promptPage");
var bg=document.getElementById("bg");
var btn=document.getElementById("btn");
var isdraging=false;
var startX=startY=X=Y=endX=endY=0;
var title=document.getElementById("promptPage-title");
    btn.onclick=function(){
    var pPbg=document.createElement("div"); 
	document.body.appendChild(pPbg);
	pPbg.id="pPbg";
	 pP.style.display="block";
    }
 var cl=document.getElementById("close");
    cl.onclick=function(){
    pP.style.display="none";
	document.body.removeChild(pPbg);
    }
   title.onmousedown=function(){
    startX=pageX;
	startY=pageY;
	X=startX-promptPage.offsetleft;
	
}


 
// JavaScript Document