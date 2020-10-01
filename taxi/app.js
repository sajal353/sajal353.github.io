var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: '4',
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    pagination: {
      el: '.swiper-pagination',
    }
  })

  var mySwiper2 = new Swiper('#review', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: '3',
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      }
  })