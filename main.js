(function($) {
    
    var img = document.getElementById('knob');

    TweenMax.from(img, 3, { rotation: -360, transformOrigin: "50% 50%", ease: Linear.easeNone, repeat: 5 });
    
	
})(jQuery);

