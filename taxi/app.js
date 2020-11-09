  var swiper = new Swiper('.swiper1', {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '#popright',
        prevEl: '#popleft',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
      }
    });

  var swiper2 = new Swiper('.swiper2', {
      spaceBetween: 30,
      loop: false,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: '1',
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: '1',
          spaceBetween: 20,
        }
      }
    });

  var swiper = new Swiper('.swiper3', {
      spaceBetween: 20,
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
      }
    });


var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FqYWwzNTMiLCJhIjoiY2tmcjIydGpoMGthNDJwb2ZoaXE1MHI3ZyJ9.z0Q6aQoAP6FQaXMm1TtSrQ'
}).addTo(mymap);

Date.prototype.toDateInputValue = (function() {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});

document.getElementById('date').value = new Date().toDateInputValue();
document.getElementById('xdate').value = new Date().toDateInputValue();

var d = new Date();
var h = d.getHours();
var m = d.getMinutes();

document.getElementById('time').value = `${h}:${m}`;
document.getElementById('xtime').value = `${h}:${m}`;

const showhour = () => {
  document.getElementById("hourpc").style.display = "block";
  document.getElementById("hourmbl").style.display = "block";
  document.getElementById("destpc").style.display = "none";
  document.getElementById("destmbl").style.display = "none";
}

const hidehour = () => {
  document.getElementById("hourpc").style.display = "none";
  document.getElementById("hourmbl").style.display = "none";
  document.getElementById("destpc").style.display = "block";
  document.getElementById("destmbl").style.display = "block";
}