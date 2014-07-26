$(document).ready(function() {
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
		nav_and_author();
	});
});

function nav_and_author() {
	var scrolled = $(window).scrollTop();
	$(".navgation_bar").css("top", scrolled + "px");
}