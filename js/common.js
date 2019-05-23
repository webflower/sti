$(document).ready(function(){


    var headerMenuList = $(".header-menu a");
    var subcategory = $(".subcategory");

    //헤더 메뉴
    headerMenuList.mouseenter(function(){
        headerMenuList.removeClass("on");
        subcategory.css({
            opacity : 1
        }).stop().slideDown();
        $(this).addClass("on");
    }).mouseleave(function(event){
        if(subcategory.is(":hover")){
            event.preventDefault();
        }else{
            $(".subcategory").css({
                opacity : 0
            }).stop().slideUp();
            $(this).removeClass("on");
        }
    });
    // subcategory.mouseleave(function(){

    // })

    // $()
    

})