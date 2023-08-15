let valueScroll = 0;

window.addEventListener('scroll', () => {

    // window.scrollY = la valeur du scroll actuel
    // window.innerHeight = la taille de la barre de scroll
    // document.body.offsetHeight = la hauteur de la page
    // Permet d'avoir un pourcentage de scroll adaptative sur nimporte quelle taille d'écran
    valueScroll = ((window.scrollY + window.innerHeight) / document.body.offsetHeight) * 100;

    // Event on navbar
    if (window.scrollY > 50) {
        navbar.style.height = '40px';
    }
    else {
        navbar.style.height = '90px';
    }

    // Event on first picture
    if (valueScroll > 52) {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = 'none';
    }

    //Event on popup
    if (valueScroll > 85) {
        popup.style.opacity = 1;
        popup.style.transform = 'none';
    }
})

closeBtn.addEventListener('click', () => {
    popup.style.opacity = 0;
    popup.style.transform = 'translateX(500px)';
})
