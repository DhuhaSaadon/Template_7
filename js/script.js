$(document).ready(function(){
    $("header .row i").click(function(){
        $("header nav ul").slideToggle()
    });

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll > 100){
            $("header").addClass("sticky");
        }
        else
        $("header").removeClass("sticky");

        if(scroll > 1981){
            $(".timer").countTo();
            $(window).off("scroll");
        }
        if(scroll > 500){
            $(".scrollTop").fadeIn();
        }
        else{
            $(".scrollTop").fadeOut();

        }

    });
    $(".buttons button").click(function(){
        $(this).addClass("active_btn").siblings().removeClass("active_btn")
        var CSSfilter = $(this).attr("id");
        if(CSSfilter ==="all"){
            $(".images > div").fadeIn();
        }
        else{
            $(".images > div").fadeOut();
            $(".images").contents().filter("." + CSSfilter).fadeIn();

        }
    });

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                items:4
                }
            }
        });

        $(".c-panel li").click(function(){
            $(this).addClass("active_btn").siblings().removeClass("active_btn")
           var p = $(this).data("role");
            $(".content > div").hide();
            $(".content").contents().filter("#" + p).fadeIn();
        });

        $(".pop").magnificPopup({
            type : "iframe"
        });

        $(".slick").slick({
            nextArrow: false,
            prevArrow : false
        });

        $(".scrollTop").click(function(){
            $("body,html").animate({
                scrollTop :0
            },500);
        });
      
        $('nav ul li a').click(function(){
            $("body,html").animate({
                scrollTop: $($(this).attr("href")).offset().top -80
            });
        });
    
});