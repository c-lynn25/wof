var sp = 0,upper = 0, lower =0,credit=100;
//determining your startposition
document.write(sp+" ");
var rand = parseInt(Math.random()*360);//use random.org for better results
document.write(rand+" ");
sp = (rand+sp)%360;
document.write(sp+" ");

if(sp%5==0 || sp==112){
	document.write("This is a boundary");
	var decider = Math.random();
	document.write("decider is: "+decider);
	if(decider > 0.5){
		sp+=1;
	}
	else{
		sp-=1;
	}
	document.write("sp is now: "+sp)
}
else{
	document.write("This is not a border");
	document.write("\n");
}
//functions to be used in the switch statements
function addCredit(x){
	credit+=x;
}
function removeCredit(x){
	if(credit>x){
		credit-=x;
	}
	else{
		alert("End of game");//Pop up saying that the player has lost or to restart
	}
}
function surprise(){
	var s = Math.random();
	var amount = parseInt(Math.random()*500);
	if (s>0.5){
		addCredit(amount);
	}
	else{
		removeCredit(amount);
	}
	document.write("surprise amount is: "+amount);
}
//switch statement determining upper and lower boundaries for the slices so that midpoints are found
switch(true){
	case (sp>0 && sp<45): upper = 45; lower = 0; removeCredit(500);
	break;
	case (sp>45 && sp<90): upper = 90; lower = 45; surprise();
	break;
	case (sp>90 && sp<112): upper = 112; lower = 90; addCredit(10000);
	break;
	case (sp>112 && sp<135): upper = 135; lower = 112; removeCredit(credit);
	break;
	case (sp>135 && sp<180): upper = 180; lower = 135; addCredit(250);
	break;
	case (sp>180 && sp<225): upper = 225; lower = 180; removeCredit(credit/2);
	break;
	case (sp>225 && sp<270): upper = 270; lower = 225; addCredit(credit);
	break;
	case (sp>270 && sp<315): upper = 315; lower = 270; removeCredit(400);
	break;
	case (sp>315 && sp<360): upper = 360; lower = 315; addCredit(800);
	break;
	}
sp=(upper+lower)/2;
document.write("sp is now: "+sp+" and your credit is: "+credit);