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
    bigmenu.style.width = 'calc(100vw - 4rem)';
    setTimeout(() => {
        menuclose.style.opacity = '1';
    }, 600);
});

menuclose.addEventListener('click', () => {
    bigmenu.style.opacity = '0';
    bigmenu.style.pointerEvents = 'none';
    menuclose.style.opacity = '0';
    bigmenu.style.width = '0';
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

const displayimage = document.querySelector('.displayimage');
const changetext = document.querySelector('.changetext');

const changeMobile = (x) => {
    displayimage.style.opacity = 0;
    setTimeout(() => {
        displayimage.src = 'assets/' + x + '.jpeg';
        displayimage.style.opacity = 1;
    }, 300);
    if (x == 'ss1') {
        changetext.style.opacity = 0;
        setTimeout(() => {
            changetext.innerHTML = '<span class="lkblue">Set</span> and <span class="lkblue">monitor</span> your <span class="lkblue">goals</span> for the future you plan.<br><br><span class="lkblue">Set budgets and track daily progress to help you reach your financial goals faster!</span>';
            changetext.style.opacity = 1;
        }, 300);
    } else if (x == 'ss2') {
        changetext.style.opacity = 0;
        setTimeout(() => {
            changetext.innerHTML = '<span class="lkblue">Is</span> and <span class="lkblue">this</span> your <span class="lkblue">working?</span> for the future you plan.<br><br><span class="lkblue">Maybe!</span>';
            changetext.style.opacity = 1;
        }, 300);
    }
}