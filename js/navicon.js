var nav = document.getElementById('nav');
/*var skills = document.getElementById('skillsScroll');
var me = document.getElementById('meScroll');
var contact = document.getElementById('contactScroll');*/

$("#nav").addClass("js").before('<div id="navicon">&#9776;</div>');
$("#navicon").click(function(){
    $("#nav").slideToggle();
    $("#nav").click(function(){
       $("#nav").slideUp(); 
    });
});
$(window).resize(function(){
    if(window.innerWidth > 768) {
        $("#nav").removeAttr("style");
    }
});

