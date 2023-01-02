var swiper = new Swiper(".mySwiper", {
  freeMode: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".client", {
  freeMode: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

new WOW().init();

$("#goTop").goTop({
  container: "",
  appear: 200,
  scrolltime: 800,
  src: "fa fa-angle-up",
  fadein: 500,
  fadeout: 500,
  opacity: 1,
});
