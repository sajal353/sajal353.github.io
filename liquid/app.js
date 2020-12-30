const phone = document.querySelector('#phone');

const keypad = (x) => {
    x = x.toString();
    phone.value += x;
};

const deleteValue = () => {
    let cv = phone.value;
    cv = cv.slice(0, -1);
    phone.value = cv;
};

const menubtn = document.querySelector('#menuopen');
const menuclose = document.querySelector('.menuclose');
const bigmenu = document.querySelector('.menuexpanded');

menubtn.addEventListener('click', () => {
    bigmenu.style.opacity = '1';
    bigmenu.style.pointerEvents = 'all';
    setTimeout(() => {
        menuclose.style.opacity = '1';
    }, 600);
});

menuclose.addEventListener('click', () => {
    bigmenu.style.opacity = '0';
    bigmenu.style.pointerEvents = 'none';
    menuclose.style.opacity = '0';
});

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 0,
    watchSlidesProgress: true,
    parallax: true,
    speed: 600,
    mousewheel: true,
    mousewheel: {
        releaseOnEdges: true
    }
});