$(document).ready( function() {
	//alert("hello");
	$("#small").mouseover( function() {
		setInterval(zoom_in(), 200);
	});
	$("#small").mouseleave( function() {
		setInterval(zoom_out(), 200);
	});
});

function zoom_in() {
	//alert($(document).width());
	var width_ = $(".big").width() * 0.7;
	$("#small").css("width", width_ + "px");
	$("#small").css("z-index", "5");
}

function zoom_out() {
	//alert($(document).width());
	$("#small").css("z-index", "0");
	$("#small").css("width", "32%");
}