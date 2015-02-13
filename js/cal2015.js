$(document).ready( function() {
	//alert("hello");
	$("#small img").mouseover( function() {
		setInterval(zoom_in(), 200);
	});
	$("#small img").mouseleave( function() {
		setInterval(zoom_out(), 200);
	});
});

function zoom_in() {
	//alert($(document).width());
	var width_ = $(".big").width() * 0.7;
	$(this).css("width", width_ + "px");
	$(this).css("z-index", "5");
}

function zoom_out() {
	//alert($(document).width());
	$(this).css("z-index", "0");
	$(this).css("width", "32%");
}