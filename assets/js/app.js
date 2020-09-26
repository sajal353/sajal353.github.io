$(document).ready(function () {
  $("#pagepiling").pagepiling({
    menu: null,
    direction: "vertical",
    verticalCentered: true,
    sectionsColor: [],
    anchors: ["intro", "portfolio", "contact", "about"],
    menu: "#menu",
    scrollingSpeed: 500,
    easing: "swing",
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      textColor: "#fff",
      bulletsColor: "#fff",
      position: "right",
      tooltips: ["Sajal", "Portfolio", "Contact Me", "About"],
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: ".section",
    animateAnchor: true,
  });

});

var typed = new Typed("#introtxt", {
  strings: ["UI Designer","Frontend Web Developer"],
  typeSpeed: 100,
  backDelay: 1000,
  loop: false,
  startDelay: 2000,
  showCursor: false
});

const showMenu = () => {
  document.getElementById("menu").classList.add("active");
};

const hideMenu = () => {
  document.getElementById("menu").classList.remove("active");
};

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
// setInterval(function(){
//   console.log(window.scrollY);
// }, 1000);