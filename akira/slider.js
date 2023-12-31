$('.logo-slider').slick({
    slidesToShow: 3,
    dots: true,
    arrows: false,
    slidesToScroll: 2,
    autoplay: true, 
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        }
    },
        {
        breakpoint: 900,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
    },
    
    {
    breakpoint: 675,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});