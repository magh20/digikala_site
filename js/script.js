//menu
$(document).ready(function(){
    $(".menu ul li").hover(function(){
        let countul = $(this).find("ul").length;
        if(countul != 0){
            $(this).find("span i").removeClass("fa-caret-down");
            $(this).find("span i").addClass("fa-caret-up");
            $(".sub-menu").show();
            $(this).find("ul").delay().fadeIn();
            //or use - $(".sub-menu").slideDown(""); -
        }
    }, 
    function(){
        $(this).find("span i").removeClass("fa-caret-up");
        $(this).find("span i").addClass("fa-caret-down");
        $(".sub-menu").css("display","none");
        $(".menu>ul>li").find("ul").hide();
    })
}); 

//slider1 1th way
$(document).ready(function(){ 
    $(".slider1-righticon").click(function(){
        let active_id = $(".slider1 .slider1-img").find(".active").attr("id");
        if(parseInt(active_id) < 4){
            $(".slider1 .slider1-img").find("#" + active_id).removeClass("active");
            $(".slider1 .slider1-img").find("#" + (parseInt(active_id) + 1)).addClass("active");
        }else{
            $(".slider1 .slider1-img").find("#" + active_id).removeClass("active");
            $(".slider1 .slider1-img").find("#1").addClass("active");
        }
    })
    $(".slider1-lefticon").click(function(){
        let active_id = $(".slider1 .slider1-img").find(".active").attr("id");
        if(parseInt(active_id) > 1){
            $(".slider1 .slider1-img").find("#" + active_id).removeClass("active");
            $(".slider1 .slider1-img").find("#" + (parseInt(active_id) - 1)).addClass("active");
        }else{
            $(".slider1 .slider1-img").find("#" + active_id).removeClass("active");
            $(".slider1 .slider1-img").find("#4").addClass("active");
        }
    })
});
//slider1 2th way
// $(document).ready(function(){ 
//     function move(){

//     }
// });