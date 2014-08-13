$(document).ready( function() {
	//alert("hello");
	var width_ = $(document.body).width() * 0.5;
	$("#illustration").css("width", width_ + "px");

	$( window ).resize( function() {
		//alert($(document).width());
		width_ = $(document.body).width();
		$("#illustration").css("width", width_ + "px");
	});
});