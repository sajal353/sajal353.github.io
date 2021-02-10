gsap.registerPlugin(MotionPathPlugin);

// Change Background

var tlChangeBg = gsap.timeline({defaults: {duration: 10},
    scrollTrigger: {
        trigger: "#main-features",
        start: "top top",
        toggleActions: 'play none none reverse'
}});

tlChangeBg.to('body', .5, {backgroundColor: '#EAF0FF'});

//CustomEase.create("customEase", "M0,0 C0.568,0.844 0.858,0.786 1,1");
CustomEase.create("customEase", "M0,0 C0.568,0.844 0.956,0.688 1,1");

var tlCardMovement = gsap.timeline({defaults: {duration: 10},
    scrollTrigger: {
        trigger: ".main-features-container",
        scrub: 3,
        start: "top top",
        end: 'bottom bottom',
}});

var tlCardImage = gsap.timeline({
    scrollTrigger: {
        trigger: ".main-features-container",
        start: "top top",
}});

tlCardMovement.to(".card-img", {
    motionPath: {
        path: ".cls-1", 
        align: ".cls-1",
        alignOrigin: [0.5, 0.5],
        autoRotate: 270,
    }, ease: 'customEase'});

tlCardImage.to('.card-img', 1, {opacity: 1, ease: Expo.easeInOut});

// First Item Animation

var tlFirstAnimation0 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-item",
        start: "top 65%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFirstAnimation1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-item",
        start: "top 65%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFirstAnimation2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-item",
        start: "top 65%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFirstAnimation3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-item",
        start: "top 65%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFirstAnimation4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-item",
        start: "top 65%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFirstAnimation5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-item",
        start: "top 65%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFirstAnimation6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-item",
        start: "top 65%",
        end: 'bottom bottom',
        scrub: 2
}});

tlFirstAnimation0.from('.circle', 1, {scale: 0});
tlFirstAnimation1.from('.gradient-circle', 1, {x: -200, y: -50});
tlFirstAnimation2.from('.little-rect', 1, {x: -100, y: -100});
tlFirstAnimation3.from('.bigger-rect', 1, {x: -200, y: 200});
tlFirstAnimation4.from('.triangle', 1, {x: 100, y: -300});
tlFirstAnimation5.from('.dots', 1, {scale: 0});
tlFirstAnimation6.from('.item-decoration', 1, {y: 300});

// Second Item Animation

var tlSecondAnimation0 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlSecondAnimation1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlSecondAnimation2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlSecondAnimation3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlSecondAnimation4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlSecondAnimation5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

tlSecondAnimation0.from('.circle-second', 1, {scale: 0});
tlSecondAnimation1.from('.gradient-circle-second', 1, {x: -200, y: -50});
tlSecondAnimation2.from('.earth', 1, {x: -200, y: -100});
tlSecondAnimation3.from('.bigger-rect-second', 1, {x: -200, y: -200});
tlSecondAnimation4.from('.triangle-second', 1, {x: 100, y: -100});
tlSecondAnimation5.from('.visa', 1, {x: 100, y: 300});

// Third Item Animation

var tlThirdAnimation0 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlThirdAnimation1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlThirdAnimation2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlThirdAnimation3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlThirdAnimation4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlThirdAnimation5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlThirdAnimation6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlThirdAnimation7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

tlThirdAnimation0.from('.circle-third', 1, {scale: 0});
tlThirdAnimation1.from('.gradient-circle-third', 1, {x: -200, y: -50});
tlThirdAnimation2.from('.apple-pay', 1, {x: 100, y: -50});
tlThirdAnimation3.from('.bigger-rect-third', 1, {x: -200, y: -200});
tlThirdAnimation4.from('.little-rect-third', 1, {x: 100, y: -100});
tlThirdAnimation5.from('.green-circle', 1, {x: 50, y: -100});
tlThirdAnimation6.from('.triangle-third', 1, {x: 75, y: -150});
tlThirdAnimation7.from('.item-decoration-third', 1, {x: 50, y: 200});

// Fourth Item Animation

var tlFourthAnimation0 = gsap.timeline({
    scrollTrigger: {
        trigger: ".fourth-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFourthAnimation1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".fourth-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFourthAnimation2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".fourth-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFourthAnimation3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".fourth-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFourthAnimation4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".fourth-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFourthAnimation5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".fourth-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFourthAnimation6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".fourth-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

var tlFourthAnimation7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".fourth-item",
        start: "top 50%",
        end: 'bottom bottom',
        scrub: 2
}});

tlFourthAnimation0.from('.circle-fourth', 1, {scale: 0});
tlFourthAnimation1.from('.gradient-circle-fourth', 1, {x: -200, y: -50});
tlFourthAnimation2.from('.umbrella', 1, {xPercent: -100, y: -200});
tlFourthAnimation3.from('.bigger-rect-fourth', 1, {x: -200, y: -200});
tlFourthAnimation4.from('.little-rect-fourth', 1, {x: 100, y: -100});
tlFourthAnimation5.from('.money', 1, {x: -200, y: -20});
tlFourthAnimation6.from('.triangle-fourth', 1, {x: 50, y: -100});
tlFourthAnimation7.from('.blue-circle-fourth', 1, {x: 75, y: 100});