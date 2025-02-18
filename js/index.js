let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    autoplay: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // "@0.50": {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    // },
    // "@0.75": {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    // },
    // "@1.00": {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    // },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
