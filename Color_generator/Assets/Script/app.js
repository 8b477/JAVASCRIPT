const root = document.querySelector(':root');

let gcs = getComputedStyle(root);
let red = gcs.getPropertyValue('--colorRed')
let green = gcs.getPropertyValue('--colorGreen')

document.querySelector('button').addEventListener('click', () => {

    let randomColorRed = Math.floor(Math.random() * 255);
    let randomColorGreen = Math.floor(Math.random() * 255);
    let randomColorBlue = Math.floor(Math.random() * 255);

    root.style.setProperty('--colorRed', randomColorRed);
    root.style.setProperty('--colorGreen', randomColorGreen);
    root.style.setProperty('--colorBlue', randomColorBlue);

    document.body.style.backgroundColor = `rgb(${randomColorRed},${randomColorGreen},${randomColorBlue})`;

    document.querySelector('span').textContent =
        gcs.getPropertyValue('--colorRed')
        + ', '
        + gcs.getPropertyValue('--colorGreen')
        + ', '
        + gcs.getPropertyValue('--colorBlue');
})