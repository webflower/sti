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
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


})