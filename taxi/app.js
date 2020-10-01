function myFunction(x) {
  if (x.matches) {
    var swiper = new Swiper('.swiper1', {
      spaceBetween: 30,
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '#popright',
        prevEl: '#popleft',
      },
    });

    var swiper2 = new Swiper('.swiper2', {
      spaceBetween: 30,
      slidesPerView: '1',
      loop: false
    });

    var swiper = new Swiper('.swiper3', {
      spaceBetween: 30,
      slidesPerView: '1',
      loop: false,
      centeredSlide: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '#whoright',
        prevEl: '#wholeft',
      },
    });

  } else {
    var swiper = new Swiper('.swiper1', {
      spaceBetween: 30,
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '#popright',
        prevEl: '#popleft',
      },
    });

    var swiper2 = new Swiper('.swiper2', {
      spaceBetween: 30,
      slidesPerView: 'auto',
      loop: false
    });

    var swiper = new Swiper('.swiper3', {
      spaceBetween: 30,
      slidesPerView: '1',
      loop: false,
      centeredSlide: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '#whoright',
        prevEl: '#wholeft',
      },
    });
  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x)
x.addListener(myFunction)

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FqYWwzNTMiLCJhIjoiY2tmcjIydGpoMGthNDJwb2ZoaXE1MHI3ZyJ9.z0Q6aQoAP6FQaXMm1TtSrQ'
}).addTo(mymap);