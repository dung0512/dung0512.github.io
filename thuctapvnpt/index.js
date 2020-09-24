$(document).ready(function () {
    //-scroll
    $(document).ready(function(){
	
        $(window).scroll(function(){
            if ($(this).scrollTop() > 50) 
            {
                $('.fixedclass').fadeIn();
            } 
            else 
            {
                $('.fixedclass').fadeOut();
            }
        });


        $('.fixedclass').click(function(){
            $(".fa-angle-double-right").click(function(){
            $('.fa-angle-double-right').css({
                display: 'none',
            })
            $('.fixedclass').css({
                display:'block',
                right:'-100px',
                transition: 'all .2s ease-in-out'
            })
            $('.arrow-change').css({
                left:'-50%',
                transition:'all .2s ease'
            })
            
            $('.fa-angle-double-left').css({
                display:'block',
        
            })
            
            
            });
            $("fa-angle-double-left").hover(function(){
                $(this).css("color", "#28a745");
                }, function(){
                $(this).css("color", "#307be7");
            });
            
            $(".fa-angle-double-left").click(function(){
                $('.fixedclass').css({
                    right:'5px',
                    display:'block',
                    transition: 'all .2s ease-in-out'
                })
                $('.arrow-change').css({
                    left: '40%',
            
                })
                $('.fa-angle-double-left').css({
                    display: 'none',
                });
                $('.fa-angle-double-right').css({
                    display: 'block',
                    transition: 'all .2s ease'

                });
            });
            return false;
        });

    });
    //-menutoggle_header
        $('.menu-toggler').click(function(){
            $(this).toggleClass("active");
            $(".first").toggleClass("active");
            $(".black-screen").toggleClass("active");
            $(".menu-collapse").toggleClass("active");
        });
        function myFunction(){
            var x=document.getElementsByClassName("fas");
            x[0].style.display='none';
            x[2].style.display='block';

        };
    //-fixedclass_fixedposition
        
});