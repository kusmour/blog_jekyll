$(document).ready( function() {
	//alert("hello");
	var width_ = $(document.body).width();
	$("#banner_photo").css("width", width_ + "px");

	$( window ).resize( function() {
		//alert($(document).width());
		width_ = $(document.body).width();
		$("#banner_photo").css("width", width_ + "px");
	});
});