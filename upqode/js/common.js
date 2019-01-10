
// slick slide
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });

});

//scrool menu
$(document).ready(function(){
    $(".navbar-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

// check like
$(document).ready(function() {
    $('.check-like label').click(function (e) {
        e.preventDefault();
        $('.check-like label').toggleClass('check');

    });
});

//drop down menu
$(document).ready(function() {
    if ($(window).width() < 1025){
        $('.dropdown >a').click(function (e) {
            e.preventDefault();
            $('.dropdown').toggleClass('open');
        });
    }
});