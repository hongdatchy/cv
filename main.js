$(document).ready(function(){
    $('.btn-open').on('click', function(event){
        $('.site-natigation').toggleClass('nav-to-left');
        $('.site-natigation').toggleClass('nav-to-back');
        $('.btn-open').toggleClass('btn-to-right');
    });
    
	my_section_arr=[$('#home'),$('#about'), $('#skills'), $('#experiences'), $('#education'), $('#end')];
	for(let i = 0; i<5;i++){
		$('.content-natigation li:nth-child('+(i+1)+')').on('click', function(event) {
			event.preventDefault();
			$('html').animate({
				scrollTop:my_section_arr[i].offset().top+5},800,"easeOutSine");
				// cộng 5 để cho nó tụt xuống 1 cái section 1 tý, để cái dưới chạy đỡ sai
		});
	}
    
    
    $(window).scroll(function(event) {
		for(let i = 0; i<5; i++){
			if(my_section_arr[i].offset().top<=$('html').scrollTop() && $('html').scrollTop() <my_section_arr[i+1].offset().top){
				x=i+1;
				console.log(my_section_arr[i+1].offset());
			console.log($('html').scrollTop());
			}
			
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