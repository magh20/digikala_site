$(document).ready(function(){
    $(".menu ul li").hover(function(){
        $(this).find("span i").removeClass("fa-caret-down");
        $(this).find("span i").addClass("fa-caret-up");
        $(".sub-menu").show();
        $(this).find("ul").show();
    }, 
    function(){
        $(this).find("span i").removeClass("fa-caret-up");
        $(this).find("span i").addClass("fa-caret-down");
        $(".sub-menu").css("display","none");
        $(this).find("ul").css("display","none");
    })
});