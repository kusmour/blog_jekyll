$(document).ready( function() {
	//alert("hello");
	var width_ = $(document.body).width() * 0.7;
	$(".illustration").css("width", width_ + "px");

	$( window ).resize( function() {
		//alert($(document).width());
		width_ = $(document.body).width();
		$(".illustration").css("width", width_ + "px");
	});
});

$(window).load( function() {
	$("#loading").hide();
});