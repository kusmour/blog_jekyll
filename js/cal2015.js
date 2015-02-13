$(document).ready( function() {
	//alert("hello");
	$(".small").mouseover( function() {
		//alert($(document).width());
		var width_ = $(".big").width() * 0.7;
		$(".small").css("width", width_ + "px");
		$(".small").css("z-index", "5");
	});
	$(".small").mouseleave( function() {
		//alert($(document).width());
		$(".small").css("z-index", "0");
		$(".small").css("width", "32%");
	});
});