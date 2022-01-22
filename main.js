$(document).ready(function(){
    $('.btn-open').on('click', function(event){
        $('.site-natigation').toggleClass('nav-to-left');
        $('.site-natigation').toggleClass('nav-to-back');
        $('.btn-open').toggleClass('btn-to-right');
    });
    
	
    $('.content-natigation li:nth-child(1)').on('click', function(event) {
		event.preventDefault();
		$('html').animate({
            scrollTop:$('#home').offset().top},1000,"easeOutSine");
	});
    $('.content-natigation li:nth-child(2)').on('click', function(event) {
		event.preventDefault();
		$('html').animate({
            scrollTop:$('#about').offset().top},1000,"easeOutSine");
	});
    $('.content-natigation li:nth-child(3)').on('click', function(event) {
		event.preventDefault();
		$('html').animate({
            scrollTop:$('#skills').offset().top},1000,"easeOutSine");
	});
    $('.content-natigation li:nth-child(4)').on('click', function(event) {
		event.preventDefault();
		$('html').animate({
            scrollTop:$('#experiences').offset().top},1000,"easeOutSine");
	});
    $('.content-natigation li:nth-child(5)').on('click', function(event) {
		event.preventDefault();
		$('html').animate({
            scrollTop:$('#education').offset().top},1000,"easeOutSine");
	});
    $(window).scroll(function(event) {
		if($('#home').offset().top<=$('html').scrollTop()&& $('html').scrollTop()<$('#about').offset().top){
			x=1;
		}
		if($('#about').offset().top<=$('html').scrollTop()&& $('html').scrollTop()<$('#skills').offset().top){
			x=2;
		}
		if($('#skills').offset().top<=$('html').scrollTop()&& $('html').scrollTop()<$('#experiences').offset().top){
			x=3;
		}
		if($('#experiences').offset().top<=$('html').scrollTop()&& $('html').scrollTop()<$('#education').offset().top){
			x=4;
		}
		if($('#education').offset().top<=$('html').scrollTop()){
			x=5;
		}
		$('.content-natigation li:nth-child('+(x)+')').addClass
			('active');
			$('.content-natigation li:nth-child('+(x-1)+')').removeClass
		('active');
			$('.content-natigation li:nth-child('+(x+1)+')').removeClass
		('active');
// 
		$('.content-natigation li:nth-child('+(x)+') i').addClass
			('active');
			$('.content-natigation li:nth-child('+(x-1)+') i').removeClass
		('active');
			$('.content-natigation li:nth-child('+(x+1)+') i').removeClass
		('active');
// 
		$('.content-natigation li:nth-child('+(x)+') span').addClass
			('active');
			$('.content-natigation li:nth-child('+(x-1)+') span').removeClass
		('active');
			$('.content-natigation li:nth-child('+(x+1)+') span').removeClass
		('active');
	});;
});