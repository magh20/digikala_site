$(document).ready(function(){
    $(".menu ul li").hover(function(){
        $(this).find("span i").removeClass("fa-caret-down");
        $(this).find("span i").addClass("fa-caret-up");
    }, 
    function(){
        $(this).find("span i").removeClass("fa-caret-up");
        $(this).find("span i").addClass("fa-caret-down");
    })
});