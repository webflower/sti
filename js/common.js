$(document).ready(function(){


    var headerMenuList = $(".header-menu a");
    var subcategory = $(".subcategory");
    var header = $("header");
    var nav = $("nav");
    //헤더 메뉴
    headerMenuList.mouseenter(function(){
        headerMenuList.removeClass("on");
        subcategory.css({
            opacity : 1,
            display: "block"
        });
        header.addClass("hover").animate(500);
        $(this).addClass("on");
    });
    nav.mouseleave(function(){
            $(".subcategory").css({
                opacity : 0,
                display: "none"
            });
            header.removeClass("hover").animate(500);
            $(this).removeClass("on");

    });
    // subcategory.mouseleave(function(){

    // })

    // $()
    

})