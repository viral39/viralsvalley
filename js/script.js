 // Scroll Top Funtionality
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200 ) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function(){$(".scroll").click(function(){
        $("html,body").animate({scrollTop:$("#banner").offset().top},"1000",'linear');
        return false;
        })
    })

    // Scroll Down to contact form from Banner Button.        
    $("#banner-btn").click(function(){
         $("html,body").animate({scrollTop:$("#contact-wrapper").offset().top},"1000",'linear');
        return false;
    });