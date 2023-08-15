window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        navbar.style.height = '40px';
    }
    else {
        navbar.style.height = '90px';
    }
})


window.addEventListener('scroll', () => {

    if (window.scrollY > 110) {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = 'translateX(0)';
    }

    if (window.scrollY > 1200) {
        popup.style.opacity = 1;
        popup.style.transform = 'translateX(0)';
    }

})

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
})
