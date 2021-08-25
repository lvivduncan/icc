
// light/dark theme
$('#switch').on('click', function(){
    $(this).toggleClass('active');

    // TODO: add localStorage
});

// slide 3
$(document).ready(function() {
    if ( $(window).width() < 996 ) {
        startCarousel();
    } else {
        $('.owl-carousel').addClass('off');
    }
});

$(window).resize(function() {
    if ( $(window).width() < 996 ) {
        startCarousel();
    } else {
        stopCarousel();
    }
});
  
function startCarousel(){
    $("#slide-3-carousel").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 500,
        margin:10,
        paginationSpeed : 400,
        autoplay:true,
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        loop:true,
        nav:true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
    });
}

function stopCarousel() {
    var owl = $('.owl-carousel');
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
}