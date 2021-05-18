(function ($)  {
    "use strict";

    

    
    //banner slider
    $('.banner-area').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        mouseDrag: false,
        autoplay:true,
        autoplayTimeout:6000,
        animateOut:'fadeOut',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
 

 



    // data-background
    $("[data-background]").each(function() {
        $(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
    })


    // Nice Select 
    $(document).ready(function() {
        $('select').niceSelect();
    });



})(jQuery);