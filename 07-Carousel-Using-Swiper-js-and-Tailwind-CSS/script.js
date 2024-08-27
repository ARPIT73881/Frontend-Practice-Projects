//  Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
