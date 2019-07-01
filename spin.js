console.clear();

//it doesn't get much easier than this;)
Draggable.create("#knob", {
    type: "rotation",
    throwProps: true,
    onDrag: function () {
        console.log(this.rotation)
    }
});

$("#rotation").click(function () {
    console.log(document.getElementById("knob")._gsTransform.rotation, "from element");
    console.log(Draggable.get("#knob").rotation, "from Draggable.get()");
});

/* note this file loads

TweenMax.min.js
Draggable.min.js
ThrowPropsPlugin.min.js (Club GreenSock bonus plugin for velocity-based tweens)

More info on Club GreenSock and other bonus plugins
sss
*/