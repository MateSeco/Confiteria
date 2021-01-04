$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 100) {
    $("nav").addClass("scrolled");
    $(".nav-link").addClass("text-light");
    $(".navbar-brand").addClass("text-light");
  } else {
    $("nav").removeClass("scrolled");
    $(".nav-link").removeClass("text-light");
  }
});
