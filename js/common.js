$(document).ready(function(){

    

    //헤더 메뉴
    var headerMenuList = $(".header-menu a");
    var subcategory = $(".subcategory");
    var header = $("header");
    var nav = $("nav");
    
    headerMenuList.mouseenter(function(){
        headerMenuList.removeClass("on");
        subcategory.stop().slideDown(500).css({
            opacity : 1
        });
        header.addClass("hover");
        $(this).addClass("on");
    });
    nav.mouseleave(function(){
            $(".subcategory").stop().slideUp(500).css({
                opacity : 0
            });
            header.removeClass("hover");
            headerMenuList.removeClass("on");

    });
    //메인배너 슬라이드

    
    var mainSwiper = new Swiper('.main-banner .swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
            
            animateTag = $('.swiper-slide .text-box > h2,.swiper-slide .text-box > p');

            animateTag.hide(0);
            animateTag.removeClass('aos-init').removeClass('aos-animate');
        },
            slideChangeTransitionEnd: function () {
                animateTag.show(0);
                AOS.init();
            }
        }

      });

})