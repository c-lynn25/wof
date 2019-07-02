// OM animation with Greensock  ---------------------------------

$(document).ready(function () {
    //  Setup variables
    var wheel = $(".wheel"),
        active = $(".active");

    $btnPlay = $("#btnPlay"),
        $btnSlowMo = $("#btnSlowMo");

    //  Random degree
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var deg = getRandomInt(720, 2400);
    var repeatN = Math.floor(deg / 360);
    console.log(deg, repeatN);

    //  Creating the Timeline
    var indicator = new TimelineMax({});
    var spinWheel = new TimelineMax();
    indicator.to(active, 0.13, { rotation: -10, transformOrigin: "65% 36%", ease: Power1.easeOut })
        .to(active, 0.13, { rotation: 3, backgroundColor: 'red', transformOrigin: "65% 36%", ease: Power1.easeOut })


    //  Indicator animation
    // for(var i=0; i < repeatN; i++){
    //   indicator.time(i);
    // }


    //  Luckywheel animation
    spinWheel.to(wheel, 5, {
        rotation: deg, transformOrigin: "50% 50%", ease: Power4.easeOut, onUpdate: (
            function () {
                var currentRotation = this.target[0]._gsTransform.rotation;
                console.log(currentRotation);
                if (Math.round(currentRotation) % (360 / 12) <= 2) {
                    if (indicator.progress() > 0.1 || indicator.progress() === 0) {
                        indicator.play(0);
                    }
                    console.log(indicator.progress());
                }
            }
        ), onComplete: (

            function () {

                TweenLite.defaultEase = Linear.easeNone;

                var bounds = $(".wheel")[0].getBBox();
                var blast = $("#blast");

                var center = {
                    x: bounds.x + bounds.width / 2,
                    y: bounds.y + bounds.height / 2,
                };

                var stagger = 1;
                var radius = getDistance(center, bounds);

                TweenLite.set(blast, { attr: { r: radius, cx: center.x, cy: center.y } });

                TweenLite.set(blast, { transformOrigin: "center", scale: 0 });

                var tl = new TimelineMax()
                    .to(blast, stagger, { scale: 1 }, 0)
                    .to(blast, stagger, { scale: 2, autoAlpha: 0 }, stagger)

                TweenMax.to(tl, 5, {
                    progress: 1,
                    ease: Expo.easeInOut,
                    repeat: -1,
                });

                function getDistance(p1, p2) {
                    var dx = p2.x - p1.x;
                    var dy = p2.y - p1.y;
                    return Math.sqrt(dx * dx + dy * dy);
                }

            }
        )
    })
        .add("end");

    //   Buttons
    $btnPlay.click(
        function () {
            spinWheel.timeScale(1).seek(0);
            indicator.timeScale(1).seek(0);
        }
    );

    $btnSlowMo.click(
        function () {
            indicator.timeScale(0.2).seek(0.5);
            spinWheel.timeScale(0.2).seek(0.5);
        }
    );


});
