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


//! fix menu when scroll

$(window).scroll(function(){
    if ($(document).scrollTop() > 50) {
        $('.navigaition').addClass('fix-nav');
    }
    else {
        $('.navigaition').removeClass('fix-nav');
    }
});