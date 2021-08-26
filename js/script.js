
// light/dark theme
$('#switch').on('click', function(){
    $(this).toggleClass('active');

    // TODO: add localStorage
});

// slide 3
$(document).ready(function() {
    if ( $(window).width() > 996 ) {
        stopCarousel();
        
        $('#slide-3-carousel').addClass('off');
        $('#slide-7-carousel').addClass('off');
        $('#slide-9-carousel').addClass('off');
    } else {
        startCarousel();

        $('#slide-3-carousel').removeClass('off');
        $('#slide-7-carousel').removeClass('off');
        $('#slide-9-carousel').removeClass('off');
    }
});

$(window).resize(function() {
    if ( $(window).width() > 996 ) {
        stopCarousel();
        
        $('#slide-3-carousel').addClass('off');
        $('#slide-7-carousel').addClass('off');
        $('#slide-9-carousel').addClass('off');
    } else {
        startCarousel();

        $('#slide-3-carousel').removeClass('off');
        $('#slide-7-carousel').removeClass('off');
        $('#slide-9-carousel').removeClass('off');
    }
});
  
function startCarousel(){
    $('#slide-3-carousel', '#slide-7-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            776:{
                items:3,
                nav:true
            },
            996:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

    $('#slide-9-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            }
        }
    });
}

function stopCarousel() {
    var owl1 = $('#slide-3-carousel');
    owl1.trigger('destroy.owl.carousel');
    owl1.addClass('off');

    var owl2 = $('#slide-7-carousel');
    owl2.trigger('destroy.owl.carousel');
    owl2.addClass('off');

    var owl3 = $('#slide-9-carousel');
    owl3.trigger('destroy.owl.carousel');
    owl3.addClass('off');    
}

$('#client .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        776:{
            items:3,
            nav:true
        },
        996:{
            items:4,
            nav:true
        },
        1200:{
            items:5,
            nav:true
        }
    }
});