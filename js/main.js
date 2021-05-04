$(function(){
    const selectPanel=$(".tabs ul li a.selected").attr("href");
    $("ul.panel li.contents:not("+selectPanel+")").hide();

    $(".tabs ul li a").click(function(){
        $(".tabs ul li a.selected").removeClass("selected");
        $(this).addClass("selected");
        $("ul.panel li.contents").hide();
        $($(this).attr("href")).show();
        return false;
    });

   

     $("#slide").slick({
         dots:true,
         autoplay:true,
         autoplaySpeed:2000,
         speed:1000,
         pauseOnHover:false,
         fade:true,
     });

     $(".page-top").hide();

    $(window).scroll(function(){
if($(this).scrollTop()>100){
    $(".page-top").fadeIn();
}else{
    $(".page-top").fadeOut();   
}
    });

    $(".page-top").click(function(){
    $("body,html").animate({scrollTop:0},500);
    return false;
    });

});