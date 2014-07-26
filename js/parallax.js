$(document).ready(function() {
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
		parallaxScroll();
	});

	$(window).bind('scroll',function(e){
		footer();
	});
});


function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

function footer() {
	var footer_top = $('#srilanka').css('bottom');
	//alert(footer_top);
	$(".footer_wrap").css('top', 1838 +'px');
}