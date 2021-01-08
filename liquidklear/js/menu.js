document.querySelector('.navigation').addEventListener('click', () => {
    openMenu();
});

document.querySelector('.close-menu').addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
});

document.querySelector('.menu-inner--active').addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
});

function openMenu() {
    let tl = gsap.timeline();
    tl.to('#menu', 0, {zIndex: 1000})
    .to('#menu', 1, {opacity: 1})
    .to('.menu-item--left', 2, {transform: 'none', ease: Expo.easeInOut}, '-=1')
    .to('.menu-item--right', 2, {transform: 'none', ease: Expo.easeInOut}, '-=2');
}

function closeMenu() {
    let tl = gsap.timeline();

    tl.to('.menu-item--right', 2, {yPercent: 100, ease: Expo.easeInOut})
    .to('.menu-item--left', 2, {yPercent: -100, ease: Expo.easeInOut}, '-=2')
    .to('#menu', 1, {opacity: 0}, '-=1')
    .to('#menu', 0, {zIndex: -1});
}