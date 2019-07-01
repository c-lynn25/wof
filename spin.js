var box = document.getElementById("box")
var tl = new TimelineLite({ delay: 1 });

tl.to(box, 0.25, { rotation: 20 })
    .to(box, 0.5, { rotation: -20, ease: Power1.easeInOut, repeat: 3, yoyo: true, repeatDelay: 0.5 }, 0.5)
    //end at 0
    .to(box, 0.25, { rotation: 0 }, "+=0.5")