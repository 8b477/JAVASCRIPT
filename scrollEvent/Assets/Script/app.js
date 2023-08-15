let ValueScrollY = 0;
let navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > ValueScrollY) {
        navBar.style.top = "-50px"
    }

    else {
        navBar.style.top = 0
    }

    ValueScrollY = window.scrollY;
})
