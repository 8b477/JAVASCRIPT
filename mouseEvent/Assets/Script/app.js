window.addEventListener('mousemove', (e) => {
    /* <==========> CURSEUR <==========>*/
    circleOne.style.top = e.y + 'px';
    circleOne.style.left = e.x + 'px';
    /* <==========> YEUX L <==========>*/
    circleTwo.style.top = e.y + 'px';
    circleTwo.style.left = e.x + 'px';
    circleThree.style.top = e.y + 'px';
    circleThree.style.left = e.x + 'px';
    /* <==========> YEUX R <==========>*/
    circleFour.style.top = e.y + 'px';
    circleFour.style.left = e.x + 250 + 'px';
    circleFive.style.top = e.y + 'px';
    circleFive.style.left = e.x + 250 + 'px';
    /* <==========> BOUCHE <==========>*/
    mouth.style.top = e.y + 250 + 'px';
    mouth.style.left = e.x + 135 + 'px';
    /* <===========> NEZ <===========>*/
    noze.style.top = e.y + 140 + 'px';
    noze.style.left = e.x + 125 + 'px';
})
