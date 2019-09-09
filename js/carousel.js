$(document).ready(function () {
  if (screen.width > 775) {
    $('.multiple-items').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      autoPlay: true,
      arrows: false,
      autoplaySpeed: 1000,
    });
  }
  else if (screen.width < 775) {
    $('.multiple-items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoPlay: true,
      arrows: false,
      autoplaySpeed: 1000,
    });
  }
})