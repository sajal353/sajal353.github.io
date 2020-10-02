const showMenu = () => {
  document.getElementById("menu").classList.add("active");
};

const hideMenu = () => {
  document.getElementById("menu").classList.remove("active");
};

$(document).ready(function () {
  $("#pagepiling").pagepiling({
    menu: null,
    direction: "vertical",
    verticalCentered: true,
    sectionsColor: [],
    anchors: ["intro", "portfolio", "contact"],
    menu: "#menu",
    scrollingSpeed: 500,
    easing: "swing",
    loopBottom: true,
    loopTop: false,
    css3: true,
    navigation: {
      bulletsColor: "#fff",
      position: "right"
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 3,
    keyboardScrolling: true,
    sectionSelector: ".section",
    animateAnchor: true,
  });

});

var typed = new Typed("#introtxt", {
  strings: ["an UI Designer","a Frontend Web Developer"],
  typeSpeed: 100,
  backDelay: 1000,
  loop: false,
  startDelay: 2000,
  showCursor: false
});

