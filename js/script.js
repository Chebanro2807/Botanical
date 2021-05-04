$(document).on('click', '.search', function(){
    $('.search-bar').addClass('search-bar--active')
});

$(document).on('click', '.search-cancel', function(){
    $('.search-bar').removeClass('search-bar--active')
});