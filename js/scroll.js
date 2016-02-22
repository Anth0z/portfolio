$('#projectsScroll').click(function(){
   $('html,body').animate({
        scrollTop:$('#projectsJump').offset().top},
        'slow');
});

$('#skillsScroll').click(function(){
   $('html,body').animate({
        scrollTop:$('#skillsJump').offset().top},
        'slow');
});

$('#meScroll').click(function(){
   $('html,body').animate({
        scrollTop:$('#meJump').offset().top},
        'slow');
});

$('#contactScroll').click(function(){
   $('html,body').animate({
        scrollTop:$('#contactJump').offset().top},
        'slow');
});

$('#upArrow').click(function(){
   $('html,body').animate({
       scrollTop:$('.header').offset().top},
        'slow');
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});