
var slide_1 = document.getElementById("slide_1");
var slide_2 = document.getElementById("slide_2");
var slide_3 = document.getElementById("slide_3");
var slider_btn_1 = document.getElementById("slider_btn_1");
var slider_btn_2 = document.getElementById("slider_btn_2");
var slider_btn_3 = document.getElementById("slider_btn_3");
var i = 2;

var fadeIn = function (slide_id) {
	if (slide_id.style.opacity < 1) {
		slide_id.style.opacity -= -0.05;
	}
}
var fadeOut = function (slide_id){
	if (slide_id.style.opacity > 0) {
		slide_id.style.opacity -= 0.05;
	}
}
var switchSlide_1 = function() {
	var switchTimer = setInterval(function(){
			if (slide_1.style.opacity == 0 && (slide_3.style.opacity == 0 || slide_2.style.opacity == 0)) {
				actSlide_1();
			}
			if (slide_1.style_opacity == 1 || slide_2.style.opacity == 1 || slide_3.style.opacity == 1){
				clearInterval(switchTimer);
			}
				// console.log("slide_1 opacity = " + slide_1.style.opacity);
				// console.log("slide_2 opacity = " + slide_2.style.opacity);
				// console.log("slide_3 opacity = " + slide_3.style.opacity);
			}, 20);
}
var switchSlide_2 = function() {
		var switchTimer = setInterval(function(){
			if (slide_2.style.opacity == 0 && (slide_3.style.opacity == 0 || slide_1.style.opacity == 0)) {
				actSlide_2();
			}
			if (slide_1.style_opacity == 1 || slide_2.style.opacity == 1 || slide_3.style.opacity == 1){
				clearInterval(switchTimer);
			}
				// console.log("slide_1 opacity = " + slide_1.style.opacity);
				// console.log("slide_2 opacity = " + slide_2.style.opacity);
				// console.log("slide_3 opacity = " + slide_3.style.opacity);
		}, 20);

}
var switchSlide_3 = function() {
		var switchTimer = setInterval(function(){
			if (slide_3.style.opacity == 0 && (slide_2.style.opacity == 0 || slide_1.style.opacity == 0)) {
				actSlide_3();
			}
			if (slide_1.style_opacity == 1 || slide_2.style.opacity == 1 || slide_3.style.opacity == 1){
				clearInterval(switchTimer);
			}
				// console.log("slide_1 opacity = " + slide_1.style.opacity);
				// console.log("slide_2 opacity = " + slide_2.style.opacity);
				// console.log("slide_3 opacity = " + slide_3.style.opacity);
		}, 20);

}
		var actSlide_1 = function() {
			var fadeInTimer = setInterval(function(){
				fadeIn(slide_1);
				fadeOut(slide_2);
				fadeOut(slide_3);
					if (slide_1.style.opacity == 1){
						clearInterval(fadeInTimer);
						}
				}, 20);
		}

		var actSlide_2 = function(){
			var fadeInTimer = setInterval(function(){
			fadeIn(slide_2);
			fadeOut(slide_1);
			fadeOut(slide_3);

		if (slide_2.style.opacity == 1){
			clearInterval(fadeInTimer);}
		}, 20);
	}
		actSlide_3 = function() {
			var fadeInTimer = setInterval(function(){
			fadeIn(slide_3);
			fadeOut(slide_2);
			fadeOut(slide_1);
		
		if (slide_3.style.opacity == 1){
			clearInterval(fadeInTimer);
		}
		}, 20);
	}
	
var constantSliding = function (){
		var constantSlidingTimer = setInterval(function(){
			console.log ('i equals ' + i);
			if (i==1){
				slider_btn_1.click();
				i++;
			}
			else if (i==2){
				slider_btn_2.click();
				i++;
			}
			else if (i==3){
				slider_btn_3.click();
				i = 1;
			}
		}, 10000);
};
// constantSliding();