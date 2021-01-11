const collapse = (x) => {
    a = document.querySelector('#' + x + '');
    if (a.style.display != 'block') {
        a.style.display = 'block';
    } else {
        a.style.display = 'none';
    }
}

const menubtn = document.querySelector('.mobilemenu');
const menu = document.querySelector('.menu');

menu.style.top = '-150%';

menubtn.addEventListener('click', () => {
    if (menu.style.top != 0) {
        menu.style.top = 0;
    } else {
        menu.style.top = '-150%';
    }
});

const hideMenu = () => {
    menu.style.top = '-150%';
}