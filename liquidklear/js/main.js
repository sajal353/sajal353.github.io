// REGISTER SCROLL TRIGGER

gsap.registerPlugin(ScrollTrigger);

// IS TOUCH

let isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

// MOBILE SLIDER

let swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
});

// PARALLAX EFFECTS

let rellax = new Rellax('.rellax');

// PARALLAX TO TOP ANIMATION

let tlFeatures = gsap.timeline({
    scrollTrigger: {
        trigger: "#features",
        pin: true,
        start: "top top",
        end: "+=" + document.querySelector("#features").offsetHeight * 4,
        scrub: 1,
    }
});

tlFeatures.to('.feature-2', {height: '100%', ease: 'power2.inOut'})
.to('.feature-3', {height: '100%', ease: 'power2.inOut'})
.to('.feature-4', {height: '100%', ease: 'power2.inOut'});

// SCROLLS

document.querySelector('.scroll-bottom').addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: "#features"});
});

document.querySelector('.btn-signup').addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: "#features"});
});

// VIDEO SECTION

let sections = gsap.utils.toArray(".general-feature");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '#general-features',
    pin: true,
    scrub: 1,
    //snap: 1 / (sections.length - 1),
    ease: 'Expo.easeInOut',
    end: () => "+=" + document.querySelector('.general-features-container').offsetWidth,
  }
});

gsap.to('.general-feature-bg', {
    xPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: '#general-features',
      pin: true,
      scrub: 1,
      ease: 'Expo.easeInOut',
      end: () => "+=" + document.querySelector('.general-features-container').offsetWidth,
    }
  });

// ZOOM IN EFFECT

let tlZoom = gsap.timeline({
    scrollTrigger: {
        trigger: "#interested",
        pin: true,
        start: "top top",
        end: "+=" + document.querySelector("#interested").offsetWidth * 3,
        scrub: 1,
    }
});

let tlZoomBg = gsap.timeline({
    scrollTrigger: {
        trigger: "#interested",
        start: "center center",
        end: "+=" + document.querySelector("#interested").offsetWidth * 3,
        scrub: 1,
    }
});

let tlZoomCircleFade = gsap.timeline({
    scrollTrigger: {
        trigger: "#interested",
        start: "center center",
        end: "+=" + document.querySelector("#interested").offsetWidth * 3,
        scrub: 1,
    }
});

let tlKeypad = gsap.timeline({
    scrollTrigger: {
        trigger: "#interested",
        start: "center center",
        end: "+=" + document.querySelector("#interested").offsetWidth * 3 / 2,
        scrub: 1,
    }
});

tlZoom.to('.xl-heading', {scale: 500});
tlZoomBg.to(document.body, {backgroundColor: '#EAF0FF'});
tlZoomCircleFade.to('.big-circle', {opacity: 0});
tlKeypad.to('.keypad', {opacity: 1});

// MAGNET BTN AND CUSTOM CURSOR

if(!isTouch) {
    document.querySelector('.follow').style.display = 'block';

    window.addEventListener('mousemove', (e) => {
        TweenMax.to('.follow', .5, {x: e.clientX, y: e.clientY});
    });

    document.querySelector('#footer').addEventListener('mouseenter', () => {
        TweenMax.to('.follow', .5, {backgroundColor: 'white'});
    });

    document.querySelector('#footer').addEventListener('mouseleave', () => {
        TweenMax.to('.follow', .5, {backgroundColor: '#316CFF'});
    });

    document.querySelector('.btn-container').addEventListener('mouseleave', () => {
        TweenMax.to('.btn--magnet', 0.1, {scale: 1, x: 0, y: 0});
        TweenMax.to('.follow', .5, {opacity: 1});
    });
    
    document.querySelector('.btn-container').addEventListener('mousemove', (e) => {
        TweenMax.to('.follow', .5, {opacity: 0});
        callParallax(e);
    });
    
    function callParallax(e){
        parallaxIt(e, '.btn--magnet', 75);
    }
      
    function parallaxIt(e, target, movement){
        var btnContainer = document.querySelector('.btn-container');
        var relX = e.pageX - btnContainer.getBoundingClientRect().left;
        var relY = e.pageY - btnContainer.getBoundingClientRect().top;
        
        TweenMax.to(target, 0.1, {
          x: (relX - btnContainer.getBoundingClientRect().width / 2) / btnContainer.getBoundingClientRect().width / 2 * movement,
          y: (relY - btnContainer.getBoundingClientRect().height / 2) / btnContainer.getBoundingClientRect().height / 2 * movement,
        });
    }
} else {
    document.querySelector('.follow').style.display = 'none';
}

// INTRO VIDEO

let introVideo = document.querySelector('.video-intro');
introVideo.pause();

document.querySelector('.play-btn').addEventListener('click', () => {
    let tl = gsap.timeline();
    tl.to('#video-intro', 2, {height: '100vh', ease: Expo.easeInOut})
    .to('.stop-btn', 0, {display: 'inline-block'})
    .to('.stop-btn', .5, {opacity: 1});
    introVideo.play();
});

document.querySelector('.video-intro').addEventListener('click', () => {
    let tl = gsap.timeline();
    tl.to('#video-intro', 2, {height: '0', ease: Expo.easeInOut})
    .to('.stop-btn', .5, {opacity: 0}, '-=1.5')
    .to('.stop-btn', 0, {display: 'none'});
    introVideo.pause();
});