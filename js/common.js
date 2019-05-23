$(document).ready(function(){

    //헤더 메뉴
    $(".header-menu a").mouseover(function(){
        $(".subcategory").css({
            opacity : 1
        }).slideDown();
        $(this).addClass("on");
    }).mouseleave(function(){
        $(".subcategory").css({
            opacity : 0
        }).slideUp();
        $(this).removeClass("on");
    })

})