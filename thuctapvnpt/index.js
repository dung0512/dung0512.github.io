$(document).ready(function () {
    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".first").toggleClass("active");
        $(".black-screen").toggleClass("active");
        $(".menu-collapse").toggleClass("active");
    });

});