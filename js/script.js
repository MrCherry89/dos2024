$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav",
    prevArrow: $(".planning-solutions-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions-wrap .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          centerMode: true,
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
    ],
  });

  $(".video-btn").smoothScroll({
    speed: 1000,
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });

  function initializeInfoSliders() {
    $(".info-slider").each(function () {
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: $(this)
          .closest(".info-slider-wrap")
          .find(".slider-navigation .slick-prev"),
        nextArrow: $(this)
          .closest(".info-slider-wrap")
          .find(".slider-navigation .slick-next"),
      });
    });
  }

  // Вызови функцию для инициализации слайдеров
  initializeInfoSliders();

  $(".infrastructure-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1700,
    speed: 800,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          autoplay: true,
        },
      },
    ],
  });

  $(".zoom-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1700,
    speed: 800,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 800,
  });

  AOS.init();
});
