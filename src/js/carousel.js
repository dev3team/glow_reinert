$(document).ready(function(){
    $('.carousel-list').slick({
        dots: true,
        arrows: true,
        appendDots: $(".carousel__dots"),
        prevArrow: $(".carousel__prev-arrow"),
        nextArrow: $(".carousel__next-arrow"),
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        // slidesToScroll: 3,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // swipeToSlide: true,
        // variableWidth: true,
    });
})