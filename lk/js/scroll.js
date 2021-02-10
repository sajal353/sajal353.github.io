gsap.registerPlugin(ScrollTrigger);

let isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

if(!isTouch) {
    let scroller = document.querySelector('.scroller');

    Scrollbar.use(OverscrollPlugin);
	scrollbar = Scrollbar.init(scroller, { delegateTo: document, alwaysShowTracks: true, renderByPixel: true, damping: 0.07,
		plugins: {
			overscroll: {
				effect: 'bounce',
				damping: 0.1,
				maxOverscroll: 150
			}
    }});
    
    Scrollbar.initAll();
    
    ScrollTrigger.scrollerProxy('.scroller', {
        scrollTop(value) {
            if (arguments.length) {
                scrollbar.scrollTop = value; // setter
            }
            return scrollbar.scrollTop;    // getter
        }
    });
    
    ScrollTrigger.scrollerProxy('.scroller', {
        scrollTop(value) {
            if (arguments.length) {
                scrollbar.scrollTop = value; // setter
            }
            return scrollbar.scrollTop;    // getter
        }
    });
    
    ScrollTrigger.defaults({ scroller: '.scroller' });
    scrollbar.addListener(ScrollTrigger.update);
}

// SCROLLS

document.querySelector('.scroll-bottom').addEventListener('click', (e) => {
    e.preventDefault();
    if(isTouch)
        gsap.to(window, {duration: 1, scrollTo: "#features"});
    else
        scrollbar.scrollTo(0, document.querySelector('#features').getBoundingClientRect().top + scrollbar.scrollTop, 1500);
});

document.querySelector('.btn-signup').addEventListener('click', (e) => {
    e.preventDefault();
    if(isTouch)
        gsap.to(window, {duration: 1, scrollTo: "#features"});
    else
        scrollbar.scrollTo(0, document.querySelector('#features').getBoundingClientRect().top + scrollbar.scrollTop, 1500);
});