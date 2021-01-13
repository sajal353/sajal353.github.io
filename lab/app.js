const rw = window.innerWidth / 100;
const rh = window.innerHeight / 100;

const motionpath = {
    feature1: {
        curviness: 1,
        autoRotate: false,
        values: [
            { x: -(50 * rw), y: 0, rotation: 270 },
        ]
    },
    feature2: {
        curviness: 1,
        autoRotate: false,
        values: [
            { x: 0, y: 0, rotation: 360 },
        ]
    },
    feature3: {
        curviness: 1,
        autoRotate: false,
        values: [
            { x: -(50 * rw), y: 0, rotation: 0 },
        ]
    }
};

var controller = new ScrollMagic.Controller();

var tween = new TimelineMax().set($("#motioncard"), { x: "-50%", y: "-50%" })
    .add(TweenMax.to($(".feature1"), 2, { css: { opacity: 0 }, ease: Power1.easeInOut }))
    .add(TweenMax.to($("#motioncard"), 2, { css: { bezier: motionpath.feature1 }, ease: Power1.easeInOut }))
    .add(TweenMax.to($(".feature2"), 2, { css: { opacity: 1 }, ease: Power1.easeInOut }))
    .add(TweenMax.to($(".feature2"), 2, { css: { opacity: 0 }, ease: Power1.easeInOut }))
    .add(TweenMax.to($("#motioncard"), 2, { css: { bezier: motionpath.feature2 }, ease: Power1.easeInOut }))
    .add(TweenMax.to($(".feature3"), 2, { css: { opacity: 1 }, ease: Power1.easeInOut }))
    .add(TweenMax.to($(".feature3"), 2, { css: { opacity: 0 }, ease: Power1.easeInOut }))
    .add(TweenMax.to($("#motioncard"), 2, { css: { bezier: motionpath.feature3 }, ease: Power1.easeInOut }))
    .add(TweenMax.to($(".feature4"), 2, { css: { opacity: 1 }, ease: Power1.easeInOut }));

var scene = new ScrollMagic.Scene({ triggerElement: "#motion", duration: (window.innerHeight * 8), offset: 0, triggerHook: 0 })
    .setPin("#motion")
    .setTween(tween)
    .addIndicators("testcurve")
    .addTo(controller);