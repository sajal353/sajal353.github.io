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

// BACKGROUND CHANGE

let tlBg = gsap.timeline({
    scrollTrigger: {
        trigger: "#features",
        pin: true,
        start: "top top",
        end: "+=" + document.querySelector("#features").offsetHeight * 4,
        scrub: 1,
    }
});

tlBg.to(document.body, {backgroundColor: '#2251C6', ease: 'power2.inOut'})
.to(document.body, {backgroundColor: '#EAF0FF', ease: 'power2.inOut'})
.to(document.body, {backgroundColor: '#262C3C', ease: 'power2.inOut'});

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

let sections = gsap.utils.toArray(".video"), currentVideo = -1;
let videos = [  document.getElementById('video-0'), 
                document.getElementById('video-1'), 
                document.getElementById('video-2'), 
                document.getElementById('video-3'), 
                document.getElementById('video-0-mobile'), 
                document.getElementById('video-1-mobile'), 
                document.getElementById('video-2-mobile'), 
                document.getElementById('video-3-mobile'), 
             ];

let firstPageSrc = ['videos/1.mp4', 'videos/2.mp4', 'videos/3.mp4', 'videos/4.mp4', 'videos/1-mobile.mp4', 'videos/2-mobile.mp4', 'videos/3-mobile.mp4', 'videos/4-mobile.mp4'];
let secondPageSrc = ['videos/5.mp4', 'videos/6.mp4', 'videos/7.mp4', 'videos/8.mp4', 'videos/5-mobile.mp4', 'videos/6-mobile.mp4', 'videos/7-mobile.mp4', 'videos/8-mobile.mp4'];

for(let i = 0; i < videos.length; i++) {
    videos[i].play();
}

let currentActiveBtn = false, isAnimatingVideos = false;
let firstButton = document.querySelector('.video-btn--active'), secondButton = document.querySelector('.video-btn--inactive')

document.querySelectorAll('.video-btn').forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        
        if(el.classList.contains('video-btn--active'))
            return;

        if(currentActiveBtn === true) {
            firstButton.classList.remove('btn--inactive');
            firstButton.classList.add('video-btn--active');
            firstButton.classList.remove('video-btn--inactive');
        
            secondButton.classList.add('btn--inactive');
            secondButton.classList.add('video-btn--inactive');
            secondButton.classList.remove('video-btn--active');
        } else {
            secondButton.classList.remove('btn--inactive');
            secondButton.classList.add('video-btn--active');
            secondButton.classList.remove('video-btn--inactive');
        
            firstButton.classList.add('btn--inactive');
            firstButton.classList.add('video-btn--inactive');
            firstButton.classList.remove('video-btn--active');
        }
    
        isAnimatingVideos = true;
        currentActiveBtn = !currentActiveBtn;
        let tl = gsap.timeline();
        tl.to('.videos-container', 1, {opacity: 0, onComplete: () => {
            for(let i = 0; i < videos.length; i++) {
                videos[i].pause();
                console.log('here with' + currentActiveBtn);
                if(currentActiveBtn)
                    videos[i].childNodes[1].src = secondPageSrc[i];
                else
                    videos[i].childNodes[1].src = firstPageSrc[i];
    
                var tlInner = gsap.timeline();
                videos[i].load();
                videos[i].play();
            }
        }}).to('.videos-container', 1, {opacity: 1});
    })
});

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '#videos',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    ease: 'power4.inOut',
    end: () => "+=" + document.querySelector('.videos-container').offsetWidth,
  }
});

// ZOOM IN EFFECT

let tlZoom = gsap.timeline({
    scrollTrigger: {
        trigger: "#interested",
        pin: true,
        start: "top top",
        end: "+=" + document.querySelector("#interested").offsetHeight * 6,
        scrub: 1,
    }
});

let tlZoomBg = gsap.timeline({
    scrollTrigger: {
        trigger: "#interested",
        start: "top top",
        end: "+=" + document.querySelector("#interested").offsetHeight * 6,
        scrub: 1,
    }
});

let tlZoomCircleFade = gsap.timeline({
    scrollTrigger: {
        trigger: "#interested",
        start: "top top",
        end: "+=" + document.querySelector("#interested").offsetHeight * 6,
        scrub: 1,
    }
});

let tlKeypad = gsap.timeline({
    scrollTrigger: {
        trigger: "#interested",
        start: "top top",
        end: "+=" + document.querySelector("#interested").offsetHeight * 6,
        scrub: 1,
    }
});

tlZoom.to('.xl-heading', {scale: 500});
tlZoomBg.to(document.body, {backgroundColor: '#EAF0FF'});
tlZoomCircleFade.to('.big-circle', {opacity: 0});
tlKeypad.to('.keypad', {opacity: 1});

// LIQUID DISTORTION

var hoverDistort = new hoverEffect({
    parent: document.querySelector('.menu-inner--homepage'),
    intensity: 0.5,
    image1: 'img/homepage.png',
    image2: 'img/homepage-2.png',
    displacementImage: 'img/distortion.png'
});

var hoverDistort = new hoverEffect({
    parent: document.querySelector('.menu-inner--faq'),
    intensity: 0.5,
    image1: 'img/faq.png',
    image2: 'img/faq-2.png',
    displacementImage: 'img/distortion.png'
});

// MAGNET BTN

if(!isTouch) {
    document.querySelector('.btn-container').addEventListener('mouseleave', () => {
        TweenMax.to('.btn--magnet', 0.1, {scale: 1, x: 0, y: 0});
    });
    
    document.querySelector('.btn-container').addEventListener('mousemove', (e) => {
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