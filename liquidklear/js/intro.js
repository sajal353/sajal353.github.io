let tl = gsap.timeline();
tl.to('.intro-logo', 2, {scale: 1, opacity: 1, ease: Expo.easeInOut})
.to('.intro-logo', 2, {delay: .5, x: -1*(document.querySelector('.intro-overlay').getBoundingClientRect().width / 2.2), ease: Expo.easeInOut})
.to('.intro-overlay', 2, {width: 0, ease: Expo.easeInOut}, '-=2')
.to(['.intro-logo', '.intro-logo-text'], .5, {opacity: 0})
.to('#intro', 2, {width: 0, ease: Expo.easeInOut}, '-=.5');