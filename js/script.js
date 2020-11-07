$(function() {

    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introHeight;
    let scrollPosition = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        introHeight = intro.innerHeight();
        scrollPosition = $(this).scrollTop();

        if (scrollPosition >= introHeight) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    });
    // 

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 20   
        }, 700);
    });
    // 

    // Burger menu
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });

    // Reviews
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
});