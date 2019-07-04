(($) => {
    var wheel = $('#wheel');
    var bet = $('#betAmount');
    var arrow = $('#arrow');
    var info = $("#info");
    var credit=100;
    var prize = 0;

    var sound = new Howl({
      src: ['https://www.wheeloffortune.com/Content/Assets//so-many-ways-to-play/downloads/wheel_spin.mp3'],
      volume: 0.5
    });
    
    var numItems = 12;
    var arc = 360 / numItems; // 30
    
    TweenLite.set(wheel, { rotation: 360 });
    
    var prizes = [
      900,
      -8,
      7,
      -6,
      5,
      -4,
      3,
      -2,
      1,
      -12,
      11,
      -10
    ];
    
    arrow.on('click', () => {
  
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

      if(prize > 0)
      info.html( prize +" Credits Won!!");
      else
      info.html( "Sorry, you lost "+ bet +" Credits.");
      
      addCredit(prize)
  
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
     
    function displayCredits() {
        document.getElementById("credAmount").innerHTML = credit;
    }
  
  })(jQuery)
  
  
