$(document).ready(function (){
    $('#banner_slider').lightSlider({
        pager :false,
        auto: true,
        item: 1,
        loop: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25 ,1)',
        speed: 600,
        responsive: [
         {
            breakpoint: 575,
            settings:{
                item: 1,
                pager :false,
                loop: true,
                slideMove: 1,
                easing: 'cubic-bezier(0.25, 0, 0.25 ,1)',
                speed: 600,
            }
         }
       ]
    });
});











