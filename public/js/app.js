$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 100) {
    $("nav").addClass("scrolled");
    $("nav").removeClass("unscrolled");
    $(".nav-link").addClass("text-light");
    $(".navbar-brand").addClass("text-light");
  } else {
    $("nav").removeClass("scrolled");
    $("nav").addClass("unscrolled");
    $(".nav-link").removeClass("text-light");
  }
});
