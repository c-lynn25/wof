var sp = 0,upper = 0, lower =0,credit=100;
//determining your startposition
//document.write(sp+" ");

function addCredit(x){
    credit += x;
    displayCredits();
}
function removeCredit(x){
	if(credit>=x){
        credit -= x;
        displayCredits();
	}
	else{
        alert("End of game");//Pop up saying that the player has lost or to restart
        displayCredits();
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
	//document.write("surprise amount is: "+amount);
}
function spin() {
    var bet = document.getElementById("betA").value;
    alert("bet is " + bet);
    if (bet <= credit) {
        removeCredit(bet);
    var rand = parseInt(Math.random() * 360);//use random.org for better results
    //document.write(rand+" ");
    sp = (rand + sp) % 360;
    //document.write(sp+" ");

    if (sp % 30 == 0) {
        //document.write("This is a boundary");
        var decider = Math.random();
        //document.write("decider is: "+decider);
        if (decider > 0.5) {
            sp += 1;
        }
        else {
            sp -= 1;
        }
        //document.write("sp is now: "+sp)
    }
    else {
        //document.write("This is not a border");
        //document.write("\n");
    }
    //switch statement determining upper and lower boundaries for the slices so that midpoints are found
    switch (true) {
        case (sp > 0 && sp < 30): upper = 30; lower = 0; removeCredit(500);
            break;
        case (sp > 30 && sp < 60): upper = 60; lower = 30; surprise();
            break;
        case (sp > 60 && sp < 90): upper = 90; lower = 60; addCredit(10000);
            break;
        case (sp > 90 && sp < 120): upper = 120; lower = 90; removeCredit(credit);
            break;
        case (sp > 120 && sp < 150): upper = 150; lower = 120; addCredit(250);
            break;
        case (sp > 150 && sp < 180): upper = 180; lower = 150; removeCredit(credit / 2);
            break;
        case (sp > 180 && sp < 210): upper = 210; lower = 180; addCredit(credit);
            break;
        case (sp > 210 && sp < 240): upper = 240; lower = 210; removeCredit(400);
            break;
        case (sp > 240 && sp < 270): upper = 270; lower = 240; addCredit(800);
            break;
        case (sp > 270 && sp < 300): upper = 300; lower = 270; removeCredit(credit / 2);
            break;
        case (sp > 300 && sp < 330): upper = 330; lower = 300; addCredit(credit);
            break;
        case (sp > 330 && sp < 360): upper = 360; lower = 300; removeCredit(400);
            break;
    }
        sp = (upper + lower) / 2;
    }
    else { alert("Bet is greater than credit!"); }
}

//document.write("sp is now: " + sp + " and your credit is: " + credit);
function displayCredits() {
    document.getElementById("credAmount").innerHTML = credit;
}
function addLiveCredit() {
    addCredit(10);
    displayCredits();
}
function cashout() {
    removeCredit(credit);
    displayCredits();
}
function checkCredit(bet) {
    if (bet > credit) {
        alert("you cannot afford this bet!");
    }
    if (bet = credit) {
        alert("this far may bankrupt you...");
    }
}
function functionAlert(msg, myYes) {
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function () {
        confirmBox.hide();
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
}
function logout() {
    if (credit > 0) {
        alert("You are now logged out - note that you will be automatically cashed out as well.");
        cashout();
        window.location.replace("login.html");
    }
    else {
        alert("Logged out");
        window.location.replace("login.html");
    }
}
