//! for Serach
$(document).on('click', '.search', function(){
    $('.search-bar').addClass('search-bar--active')
});

$(document).on('click', '.search-cancel', function(){
    $('.search-bar').removeClass('search-bar--active')
});

//!login and singup form

$(document).on('click', '.user,.already-account', function(){
    $('.form').addClass('form__login--active').removeClass('form__sign-up--active')
});

$(document).on('click', '.sign-up-btn', function(){
    $('.form').addClass('form__sign-up--active').removeClass('form__login--active')
});

$(document).on('click', '.form__cancel', function(){
    $('.form').removeClass('form__login--active').removeClass('form__sign-up--active')
});

//!Slider

$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        auto:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});

//! Popular slider

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});


//! fixed menu when scroll

$(window).scroll(function(){
    if ($(document).scrollTop() > 50) {
        $('.navigation').addClass('fix-nav');
        $('.social-call').addClass('fix-social');
    }
    else {
        $('.navigation').removeClass('fix-nav');
        $('.social-call').removeClass('fix-social');
    }
});

//! for burger

$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
    $('.menu').click(function() {
        $('.navigation').toggleClass('active')
        $('.toggle').toggleClass('active')
    })
});

//! for smooth scrolling

$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 60 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 50 ? $('ul').css('top','80px') : $('ul').css('top','120px');
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
});

