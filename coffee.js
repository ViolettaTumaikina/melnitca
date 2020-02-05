var change_color__slick = $('.change_color__slick')
var backButton = $('.back_button')
var nextButton = $('.next_button')


change_color__slick.slick({
	  			infinite: true,
	  			dots: true,
	    		slidesToShow: 1, 
	  			slidesToScroll: 1,
	  			prevArrow: backButton,
   				nextArrow: nextButton,
	  			responsive: [
				    {
				      breakpoint: 1200,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1,
				      },
				    },
				    {
				      breakpoint: 500,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
				      }
				    }
				]
	 		 });


var show_popup =$('.show_popup')
var popup =$('.popup')
var popup_feedback_form =$('.popup_feedback_form')
var overlay =$('.overlay')

$(function () {
	$('.show_popup').click(function () {
		popup.show().css("display","flex");
		popup_feedback_form.show();
		$("body").append("<div class='overlay'></div>");
		$('html,body').css('overflow', 'hidden');
		$('.overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	/*$('.close_popup').click(function () {
		popup.hide();
		popup_feedback_form.hide();
		$('.overlay').remove('.overlay');
		$('html,body').css('overflow','scroll');
		return false;
	});	*/
});
jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.popup_feedback_form'); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide();
			popup.hide();
			$('.overlay').remove('.overlay');
			$('html,body').css('overflow','scroll');
			return false;// скрываем его
		}
	});
});