// article code
$(document).ready( function() {
	$("pre").addClass("prettyprint linenums").attr('style', 'overflow:auto');;
	prettyPrint();
});

$(window).load( function() {
	$("#loading").fadeOut();
});