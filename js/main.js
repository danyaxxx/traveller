$(function(){
  	$('.content-img').height($('.content-img').width()/2);
  	$(window).resize(function(){
		$('.content-img').height($('.content-img').width()/2);
  	});
}); 