$(function(){

	$('a[href^="#"]').on('click', function() {
	    var speed = 800;
	    var href = $(this).attr('href');
	    var target = $(href == '#section' || href == '' ? 'html' : href);
	    var position = target.offset().left;
	    $('body, html').animate({ scrollLeft: position }, speed, 'swing');
	    return false;
	});
});
