$(document).ready( function() {
	$("#loading").fadeOut();
});

$(document).ready( function() {
	//alert("hello");
	var width_ = $(document.body).width();
	$("#banner_photo").css("width", width_ + "px");

	$( window ).resize( function() {
		//alert($(document).width());
		width_ = $(document.body).width();
		$("#banner_photo").css("width", width_ + "px");
	});

	$(".author_social").mouseover(function() {
		$(this).css("font-size", 22 + "px");
		//alert("hello~");
	});
	$(".author_social").mouseleave(function() {
		$(this).css("font-size", 18 + "px");
	});

});