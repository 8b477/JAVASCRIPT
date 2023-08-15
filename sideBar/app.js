let lastScroll = 0;

window.addEventListener('scroll', () => {

    if (window.scrollY < lastScroll) {

        navbar.style.top = 0;

    }
    else {
        navbar.style.top = "-50px";

    }
    lastScroll = window.scrollY;
})