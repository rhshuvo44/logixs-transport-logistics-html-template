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

$("#scroll-to-top").illBeBack({
  // top offset to trigger the scroll to top button
  offset: 250,
  // animation speed
  speed: 200,
  // animation duration
  duration: 500,
  // animation duration for hover effect
  hoverDuration: 300,
  // Styling options
  ownStyle: false,
  round: false,
  zIndex: 99999999,
  size: 40,
  color: "#fff",
  // Position options
  top: "auto",
  left: "auto",
  bottom: 20,
  right: 20,
  // Background options
  bgColor: "#ff6d2e",
  hoverBgColor: "#0b3b5e",
  bgPosition: "50% 50%",
  bgSize: "50%",
});

// counter
$("#counter").countMe(40, 18);
$("#counter2").countMe(40, 100);
$("#counter3").countMe(40, 38);
