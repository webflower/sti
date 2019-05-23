$(document).ready(function(){

    //헤더 메뉴
    $(".header-menu a, .subcategory").mouseover(function(){
        $(".subcategory").css({
            opacity : 1
        }).stop().slideDown();
        $(this).addClass("on");
    }).mouseleave(function(){
        $(".subcategory").css({
            opacity : 0
        }).stop().slideUp();
        $(this).removeClass("on");
    })

})