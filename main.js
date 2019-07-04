(($) => {
    var wheel = $('#wheel');
    var bet = $('#betAmount');
    var spin =$('#btnSpin');
    var addCred = $('#addCred');
    var cashout = $('#cashout');
    var info = $("#resAmount");
    var credit=100;
    var prize = 0;

    var spinner = new Howl({
      src: ['https://www.wheeloffortune.com/Content/Assets//so-many-ways-to-play/downloads/wheel_spin.mp3'],
      volume: 0.5
    });

    var coin_in = new Howl({
      src: ['ka-ching.mp3'],
      volume: 0.5
    });

    var coin_out = new Howl({
      src: ['cashout.wav'],
      volume: 3
    });
    
    var numItems = 12;
    var arc = 360 / numItems; // 30
    
    TweenLite.set(wheel, { rotation: 360 });
    
    var prizes = [
      0,
      1000,
      -500,
      500,
      300,
      400,
      200,
      300,
      -200,
      600,
      200,
       700
    ];
    
     addCred.on('click', () => {
  
      coin_in.play();
      
     
    })

    cashout.on('click', () => {
  
      coin_out.play();
       
    })
     
    spin.on('click', () => {
  
      sound.play();
      
      // var random = Math.floor(Math.random() * 8000) + 6000;
       var random = Math.floor(Math.random() * 800) + 600;
       var tl = new TimelineMax();
       tl.to(wheel, 7, { rotation:  "+=" + random, transformOrigin: "50% 50%", ease: Back.easeOut.config(1) })
  
       TweenLite.to(tl, 4, {timeScale:0, ease: Power1.easeOut, delay: 3, onComplete: puaseAud })
       
    })
    
    TweenLite.ticker.addEventListener("tick", update);
    
    function puaseAud(){
      sound.stop(0); 
      
     //Zoom out results
    TweenMax.to(info, 1, {scale:1.5, ease:Bounce.easeOut})
    TweenMax.to(info, 0.2, {scale:1, delay:0.4})

    if(prize > 0){
      info.html( prize +" Credits Won!!");
      addCredit(prize)
    }
    else{
      info.html( "Lost the bet."+bet+" and "+ prize+" Credits.");
      addCredit(prize)
    }
  
    }
  
    function update() {
    console.log(wheel)
    console.log(wheel[0])  
      var elem = wheel[0]._gsTransform.rotation;     // 60
    
      var angle = elem - (360 * Math.floor(elem / 360));     // 60 
      var index = Math.floor((360 - angle) / arc) % prizes.length; // (300 /30) % 12 = 0  
      prize = prizes[index];
      
      
      //info.html( " current prize = " + prize +" ,index = "+index);
    }
       
    //pauseTween && pauseTween.kill();
  
      function addCredit(x) {
        if (x < 0) {
            if (credit < Math.abs(x)) {
                credit = 0;
                displayCredits();
                alert("You've lost all your credits, please try again!");
            }
        }
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
     
    function displayCredits() {
        document.getElementById("credAmount").innerHTML = credit;
    }
  
  })(jQuery)
  
  
