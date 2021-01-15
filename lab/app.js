const vw = window.innerWidth;
const vh = window.innerHeight;
const cw = document.querySelector("#motioncard").offsetWidth;
const ch = document.querySelector("#motioncard").offsetHeight;

const motionpath = {
    feature1: {
        curviness: 1,
        autoRotate: false,
        values: [
            { x: -(vw - 64 - cw - (13.5 * vw / 100) * 2), y: 0, rotation: 270 },
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
            { x: -(vw - 64 - cw - (13.5 * vw / 100) * 2), y: 0, rotation: 0 },
        ]
    }
};

var controller = new ScrollMagic.Controller();

var tween = new TimelineMax().set($("#motioncard"), { x: "0%", y: "-50%" })
    .add(TweenMax.to($(".feature1"), 2, { css: { transform: "translateY(-100vh)" }, ease: Power0.easeInOut }))
    .add(TweenMax.to($(".cardbg1"), 2, { css: { transform: "scale(0)" }, ease: Power0.easeInOut }), 0)
    .add(TweenMax.to($("#motioncard"), 2, { css: { bezier: motionpath.feature1 }, ease: Power0.easeInOut }), 1)
    .add(TweenMax.to($(".cardbg2"), 2, { css: { transform: "scale(1)" }, ease: Power0.easeInOut }), 2)
    .add(TweenMax.to($(".feature2"), 2, { x: "0%", y: "-50%" }, { css: { transform: "translateY(-50%)" }, ease: Power0.easeInOut }), 2)
    .add(TweenMax.to($(".feature2"), 2, { css: { transform: "translateY(-100vh)" }, ease: Power0.easeInOut }))
    .add(TweenMax.to($(".cardbg2"), 2, { css: { transform: "scale(0)" }, ease: Power0.easeInOut }), 4)
    .add(TweenMax.to($("#motioncard"), 2, { css: { bezier: motionpath.feature2 }, ease: Power0.easeInOut }), 5)
    .add(TweenMax.to($(".cardbg3"), 2, { css: { transform: "scale(1)" }, ease: Power0.easeInOut }), 6)
    .add(TweenMax.to($(".feature3"), 2, { x: "0%", y: "-50%" }, { css: { transform: "translateY(-50%)" }, ease: Power0.easeInOut }), 6)
    .add(TweenMax.to($(".feature3"), 2, { css: { transform: "translateY(-100vh)" }, ease: Power0.easeInOut }))
    .add(TweenMax.to($(".cardbg3"), 2, { css: { transform: "scale(0)" }, ease: Power0.easeInOut }), 8)
    .add(TweenMax.to($("#motioncard"), 2, { css: { bezier: motionpath.feature3 }, ease: Power0.easeInOut }), 9)
    .add(TweenMax.to($(".cardbg4"), 2, { css: { transform: "scale(1)" }, ease: Power0.easeInOut }), 10)
    .add(TweenMax.to($(".feature4"), 2, { x: "0%", y: "-50%" }, { css: { transform: "translateY(-50%)" }, ease: Power0.easeInOut }), 10);

var scene = new ScrollMagic.Scene({ triggerElement: "#motion", duration: (window.innerHeight * 8), offset: 0, triggerHook: 0 })
    .setPin("#motion")
    .setTween(tween)
    .addIndicators("testcurve")
    .addTo(controller);