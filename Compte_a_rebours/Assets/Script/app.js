const form = document.querySelector('form');
const dMinute = document.getElementById('minute-display');
const dSeconde = document.getElementById('seconde-display');

let totalSeconds;
let interval

function countDown() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const sec = seconds < 10 ? "0" + seconds : seconds;

    countDownDisplay.textContent = `${minutes} : ${sec}`;

    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        countDownDisplay.textContent = "Finish !";
        button.textContent = "GO !";
        clearInterval(interval);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(choice.value)) {
        alert("Entrez un chiffre pas une lettre");
    }
    else if (!choice.value && button.textContent == "GO !") {
        alert("Entrez un chiffre !");
    }
    else if (!choice.value) {
        alert("CLICK SUR OK POUR CONTINUER");
    }
    else {
        button.textContent = "STOP";
        totalSeconds = choice.value * 60;
        choice.value = "";
        clearInterval(interval);
        interval = setInterval(countDown, 100);
    }
})