var swiper = new Swiper('#slider', {
  slidesPerView: 1,
  slidesPerColumn: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
        slidesPerView: 3,
        slidesPerColumn: 3,
    },
  }
});

var swiper2 = new Swiper('#mblslide', {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
      },
  });