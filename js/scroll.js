$(document).ready(function () {
  $(window).on('scroll', function () {
    if (pageYOffset > 800){
      $('.menu-btn').addClass("open")
    } else {
      $('.menu-btn').removeClass("open")
    }
  })
})

