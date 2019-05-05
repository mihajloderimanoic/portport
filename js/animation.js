$( document ).ready(function() {
    
    new WOW().init();
  
    
    
	var waypoints=$('.js-wp-2').waypoint(function(direction) {
  		
			$('.js-wp-2').addClass('animated zoomIn animated-prof');

	}, {
  		offset: '10%'
	});

 
});



var typed = new Typed('.element', {
  strings: ["JUNIOR WEB DESIGNER", "JUNIOR WEB DEVELOPER"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 180,
  showCursor: false,
  startDelay: 3200,
  smartBackspace: false
});


var textOverImages = document.getElementsByClassName("onClickTextOverImage");
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function() {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove("show");
      previousTextOverImage = this;
      classes.add("show");
    }
  }
}

function stopPropagation(event){
  event.stopPropagation();
}
