// ATM ANIMATION

var atmTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#atm-features',
        start: 'top top',
        end: '+=' + document.getElementById('atm-features').clientHeight * 1.5,
        pin: true,
        scrub: 1
    }
});

var atmTimelineRight = gsap.timeline({
    scrollTrigger: {
        trigger: '#atm-features',
        start: 'top top',
        end: '+=' + document.getElementById('atm-features').clientHeight * 1.5,
        pin: true,
        scrub: 1
    }
});

var atmTimelineBottom = gsap.timeline({
    scrollTrigger: {
        trigger: '#atm-features',
        start: 'top top',
        end: '+=' + document.getElementById('atm-features').clientHeight * 1.5,
        pin: true,
        scrub: 1
    }
});

atmTimeline.to('.atm-features-left', {xPercent: 100, ease: 'power2'});
atmTimelineRight.to('.atm-features-right', {yPercent: -100, ease: 'power2'});
atmTimelineBottom.to('.atm-features-bottom', {yPercent: -100, ease: 'power2'});

// Zoom In

var zoomTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#interested-new',
        start: 'top top',
        end: '+=' + document.getElementById('interested-new').clientHeight * 3,
        pin: true,
        scrub: 1
    }
});

var zoomKeypad = gsap.timeline({
    scrollTrigger: {
        trigger: '#interested-new',
        start: 'top top',
        end: '+=' + document.getElementById('interested-new').clientHeight * 3,
        pin: true,
        scrub: 2
    }
});


var zoomBackground = gsap.timeline({
    scrollTrigger: {
        trigger: '#interested-new',
        start: 'top top',
        toggleActions: 'play none none reverse'
    }
});

zoomTimeline.to('#zoom', {scale: 150, translateZ: 0, ease: 'power2.in'}).to('#interested-new', 0, {backgroundColor: '#151923'}).to('#zoom', 0, {display: 'none'});
zoomBackground.to('body', 2, {backgroundColor: '#262C3C'});
zoomKeypad.to('.keypad', 2, {opacity: 1, ease: 'power2.in'});