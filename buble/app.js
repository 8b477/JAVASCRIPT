
const gamingZone = document.getElementById('gaming_zone');
const score = document.getElementById('score');
const button = document.querySelector('button');

let startGame = false;
let numberScore = 0;

score.innerText = numberScore;

// Création de la bulle
function createBuble() {

    const buble = document.createElement("div");

    // Paramètrage de la hauteur et de la largeur aléatoire
    let randomSizeBuble = Math.round(Math.random() * 200 + 50);

    // Paramètre randomizé de l'apparatition de la bulle
    // Le fois 100 parce qu'on veut une valeur sur 100% donc un chiffre de 0 à 100
    let positionY = Math.round(Math.random() * 100);
    let positionX = Math.round(Math.random() * 100 + 70);

    buble.style.left = positionY + "%";
    buble.style.top = positionX + "%";
    buble.style.height = randomSizeBuble + "px";
    buble.style.width = randomSizeBuble + "px";


    buble.classList.add("buble");
    // Injection de la bulle dans le body
    gamingZone.appendChild(buble);
}

// Création d'un event pour start le jeu
button.addEventListener("click", () => {
    if (!startGame)
        startGame = true;
    console.log(startGame)
})

if (startGame) {
    //Interval de création d'une nouvelle bulle
    setInterval(() => {
        createBuble();
    }, 2000);

    // Attendre 4sec avant de lancer le clear
    setTimeout(() => {

        setInterval(() => {
            //CLEAR LA BULLE DU DOM
            gamingZone.firstChild.remove();
        }, 2200);

    }, 4000);


    window.addEventListener("click", (e) => {

        if (e.target.classList.value == 'buble') {

            console.log(e.target.classList.remove("buble"))
            score.innerText = numberScore++;
        }
    });
}

// Faire une boucle while pour le start

// Faire en sorte que quand un certain nombre de secondes soit  passer stopé le jeu

// Afficher une demande pour restart le jeu

// Metter en place un dashboard avec les meilleurs score