document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
