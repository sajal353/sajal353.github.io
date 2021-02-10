if(!isTouch) {
    document.querySelector('.follow').style.display = 'block';

    window.addEventListener('mousemove', (e) => {
        TweenMax.to('.follow', .5, {x: e.clientX, y: e.clientY});
    });

    document.querySelector('#footer').addEventListener('mouseenter', () => {
        TweenMax.to('.follow', .5, {backgroundColor: 'white'});
    });

    document.querySelector('#footer').addEventListener('mouseleave', () => {
        TweenMax.to('.follow', .5, {backgroundColor: '#316CFF'});
    });
} else
    document.querySelector('.follow').style.display = 'none';

function collapse(n) {
    let el = document.querySelector('#' + n);
    let arrow = el.parentNode.childNodes[1];
    console.log(arrow);

    if(el.classList.contains('ans--active')) {
        let tl = gsap.timeline();
        el.classList.remove('ans--active');
        arrow.classList.remove('right-arrow--active');
        tl.to('#' + n, 0, {display: 'none'});

    } else {
        let tl = gsap.timeline();
        el.classList.add('ans--active');
        arrow.classList.add('right-arrow--active');
        tl.to('#' + n, 0, {display: 'block'});
    }
}