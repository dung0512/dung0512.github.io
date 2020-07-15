$(document).ready(function () {
    $(window).scroll(function(){
        if(this.scrollY < 10)
            $(".page-wrap").addclass(".sticky");
        else{
            $(".page-wrap").removeClass("sticky");
        }
    });
    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".first").toggleClass("active");
        $(".black-screen").toggleClass("active");
        $(".menu-collapse").toggleClass("active");
    });

});