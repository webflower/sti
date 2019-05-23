$(document).ready(function(){


    var headerMenuList = $(".header-menu a");
    var subcategory = $(".subcategory");
    var header = $("header");
    var nav = $("nav");
    //헤더 메뉴
    headerMenuList.mouseenter(function(){
        headerMenuList.removeClass("on");
        subcategory.css({
            opacity : 1
        });
        header.addClass("hover").stop().slideDown();
        $(this).addClass("on");
    });
    nav.mouseleave(function(){
            $(".subcategory").css({
                opacity : 0
            });
            header.remove("hover").stop().slideUp();
            $(this).removeClass("on");

    });
    // subcategory.mouseleave(function(){

    // })

    // $()
    

})