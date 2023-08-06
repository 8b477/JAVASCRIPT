//#region les différent possibilité avec la Console.
console.log("********************************************************");
console.log("********************************************************");

console.log('simple log');
console.info('log d\'informations');
console.warn('log d\'attention');

console.log("********************************************************");
console.log("********************************************************");
//#endregion

//#region Récupération d'un élément du DOM et lui ajoute du texte.
document.getElementById("title").innerText = ("Review to Javascript");
//#endregion

//#region Test des différentes valeurs de retour si FALSY ou TRUSTLY.
let testBoolTrue1 = true; //renvoie true.
let testBoolTrue2 = "a"; //renvoie true.
let testBoolTrue3 = 1; //renvoie true.

let bool1 = Boolean(testBoolTrue1);
let bool2 = Boolean(testBoolTrue2);
let bool3 = Boolean(testBoolTrue3);

console.log("Ci dessous les valeur qui retourne => True");
console.log("(1) " + bool1);
console.log("(2) " + bool2);
console.log("(3) " + bool3);

console.log("********************************************************");

let testBoolFalse1 = false; //renvoie false.
let testBoolFalse2 = ""; //renvoie false.
let testBoolFalse3 = 0; //renvoie false.
let testBoolFalse4 = undefined; //renvoie false.
let testBoolFalse5 = NaN; //renvoie false.
let testBoolFalse6 = null; //renvoie false.

let boolFalse1 = Boolean(testBoolFalse1);
let boolFalse2 = Boolean(testBoolFalse2);
let boolFalse3 = Boolean(testBoolFalse3);
let boolFalse4 = Boolean(testBoolFalse4);
let boolFalse5 = Boolean(testBoolFalse5);
let boolFalse6 = Boolean(testBoolFalse6);

console.log("Ci dessous les valeur qui retourne => False");
console.log("(1) " + boolFalse1);
console.log("(2) " + boolFalse2);
console.log("(3) " + boolFalse3);
console.log("(4) " + boolFalse4);
console.log("(5) " + boolFalse5);
console.log("(6) " + boolFalse6);

console.log("********************************************************");
console.log("********************************************************");
//#endregion

//#region La concaténation avec les backtick  => `` .
const firstName = 'Jonathan';
const lastName = 'Buchet';

console.log("Ci dessous la concaténation avec les backtick => ``");
console.log(`Mon nom est : ${firstName}
Mon prénom est : ${lastName}`)

console.log("********************************************************");
console.log("********************************************************");
//#endregion

//#region Les tableaux.
const monTableau = ['vert', 2, true];

console.log(monTableau);
console.log("Taille de mon tableau => " + monTableau.length);
console.log();

console.log("Remarque ci dessous le tableau initial est d'une longueur de 3, j'y ajoute un éléments a la place '5' du coup il me génère automatiquement => 2 slots vide")
monTableau[5] = null;

console.log(monTableau);
console.log("Nouvelle taille de mon tableau => " + monTableau.length);

console.log();
console.log("Ici je parcour mon tableau a l'aide d'une boucle 'for'");

for (let i = 0; i < monTableau.length; i++) {
    console.log(`J'affiche depuis la boucle 'for'
=> la valeur de l'index numéro ${i} de mon tableau = ${monTableau[i]}`);
}

console.log("********************************************************");
console.log("********************************************************");
//#endregion

//#region Les Objects.
const ObjectExample = {
    Name: "Jonathan",
    Year: 10
};

console.log("J'affiche mon object en brut ci dessous :");
console.log(ObjectExample);
console.log("J'affiche juste le nom de mon objet ci dessous :");
console.log("=> " + ObjectExample.Name);
console.log("J'affiche juste l'age ci dessous :");
console.log("=> " + ObjectExample.Year);
console.log()

console.log("Une autre façon de parcourir un objet, un peu à l'instar des tableaux")

console.log(ObjectExample['Name']);
console.log();
console.log("Ci dessus j'ai afficher le nom de mon objet en spécifiant entre [] le nom de la propriété que je voulais ciblé ici le 'Name'")
console.log("********************************************************");
console.log("********************************************************");
//#endregion

//#region Les ternaires.
const yearRequired = 18;

const mineurYear = 15;

const majeurYear = 18;

yearRequired > mineurYear ? console.log("Vous êtes mineur") : console.log("Vous êtes majeur");
yearRequired <= majeurYear ? console.log("Vous êtes majeur") : console.log("Vous êtes majeur");

console.log("************************************************");
console.log("************************************************");
//#endregion

//#region Boucle avec les instruction Break et Continue.

let number = 0;

//Ici avec le mot clef 'continue' quand 'i' est égal à la valeur de 5,
//Permet de sortir de l'itération de la boucle en cours et continue ensuite normalement,
//Ici je met la chaine de caractère coucou pour prouver que j'intervient bien.
console.log("Début de la boucle : ");

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("coucou, je suis sur la valeur 5")
        continue;
    }
    console.log(`La valeur de i est => ${i}`);
}
console.log("Boucle terminée !");

console.log("************************************************");
console.log();

//Ici avec le mot clef 'Break' on s'apperçoit que quand la condition est true
//La boucle arrête sont itération, je sort de la boucle

console.log("Démo avec le mot clef 'Break' :");

console.log("Début de la boucle : ");

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("coucou, je suis sur la valeur 5")
        break;
    }
    console.log(`La valeur de i est => ${i}`);
}
console.log("Boucle terminée !");

console.log("************************************************");
console.log("************************************************");
//#endregion

//#region Boucle foreach sur un tableau ou un objet.

const Personne = {
    Name: 'Jean',
    FirstName: 'Dujardin',
    Year: 45
}

console.log("J'affiche les données de mon objet personne à l'aide d'une boucle 'for in' :");

for (item in Personne)
    console.log("=> " + item + ": " + Personne[item])

console.log("J'affiche les données de mon tableau à l'aide d'une boucle 'for in' :");

const tableTest = ['un', 2, null, 'blabla', true];
for (props in tableTest) {
    console.log(`=> la valur de l'index ${props} est => ${tableTest[props]}`);
}
//#endregion

//#region Les fonctions avancées une => IIFE => Imediately Invoke Function Execution.

//On commence par deux paire de parenthese comme ci dessous.
//Astuce on commence avec deux paires de paranthèse comme ci dessous.
//()()
//Ma première paire de parenthese me permet de définir ma fonction.
//Ma seconde paire de parenthèse marque l'exécution immédiate de ma première paires de parenthèse.
//Comme ma première prend des paramètres en entrée les secondes,
//Parenthèe doivent donc prendre ses même paramètres en entrée.
(function (a, b) {
    var result = a + b;
    console.log("Fonction IIFE : " + result);
})(10, 12);

//En mode function fléchée exemple
((a, b) => {
    var result = a + b;
    console.log("Fonction fléchée : " + result);
})(10, 12);
//#endregion

//#region IMPORTANT SUR LE MOT CLEF 'LET'ET 'CONST'.

//! Note a moi même , le mot clef 'let' limite le scope
//de la variable si par exemple elle se trouve dans une fonction elle
//ne pourras pas être lu en dehors à l'invers du mot clef 'var'
//qui lui pourras être récupérer !!!

//Le mot clef CONST est imuable une fois une valeur attribué
//à celui-ci il ne pourra plus être modifié et la convention
//nous invite a déclarée le nom des variables const en MAJUSCULE
//#endregion

//#region L'objet => 'Math'
console.log("*******************************************");
console.log("*******************************************");
const a = 1.4;
const b = 2.9;
const c = 3;

const d = Math.random() * 10;

console.log(Math.max(a, b, c));
console.log(Math.min(a, b, c));
console.log(Math.round(a));
console.log(Math.floor(b));
console.log(Math.ceil(b));

console.log((`Chiffre random arrondi au supérieur : ${Math.ceil(d)}`));


console.log("*******************************************")
console.log("*******************************************")
//#endregion

//#region L'objet => 'Date' => !! ATTENTION LES MOIS PASSER EN SECOND PARAMETRES COMMENCE A  0 COMME UN TABLEAU !!
//getTime donne la date en miliseconde depuis le 1 Janvier 1970 ce qui nous permet de calculer des date d'entrée par User

const TODAY = new Date();

let birthday = new Date(1991, 0, 26);// => Ma date d'anniversaire

console.log(TODAY);
console.log(birthday);
console.log(TODAY.getTime());
//#endregion

//#region Les méthodes sur les string => https://www.w3schools.com/js/js_string_methods.asp
//#endregion

//#region Les méthodes sur les number => https://www.w3schools.com/js/js_number_methods.asp
//#endregion

//#region Les méthodes sur les number => https://www.w3schools.com/js/js_arrays.asp
//#endregion

//#region Le DOM => Document Object Model
//L'objet document représente le document cad la page HTML charger dans le navigateur qui est actuelement visible par User
//Il fait parti d'une convention qui doit être respecter par tout les navigateur de la même façon.
//#endregion

//#region Le BOM => Browser Object Model
//Les propriétées permet d'avoir des informations sur ses objets et leurs méthodes permet d'interargir avec eux.
//L'objet le plus élevée est 'window' autrement dit tout les autres objets son des propriétés de celui-ci vue qu'il sont intégrée à lui.
//window.location, window.navigator, window.history, window.localstorage, ..
// !! ATTENTION => Il n'y a pas de réglement strict a son sujet, les différents navigateur peuvent interpretée certaine méthodes/propriétés différement
//Il y a quand même quelque méthode ou propriété dite 'sûres'
//#endregion

//#region Manipulation du DOM .
//=> crée un 'a' + son attribut => 'href', ainsi qu'un label (un nom) à notre lien 'a'.
//=> ajouter le 'a' a un 'li' créée aussi via JS.
//=> ajouter tout cela au 'ul' déjà existant dans la page HTML.
console.log("*************************************");
console.log("*************************************");

//Création de la balise <a>.
let elemA = document.createElement('a');
elemA.href = '/';
let labelA = document.createTextNode('News');
elemA.appendChild(labelA);

//Création de la balise <li>.
let elemLi = document.createElement('li');
elemLi.appendChild(elemA);

//Récupération de ma balise <ul> de ma page index.html.
let ulByDom = document.querySelector('ul');

//Ajouter mes éléments créée plus tôt.
ulByDom.appendChild(elemLi);

console.log("*************************************");
console.log("*************************************");
//#endregion

//#region Toujours dans le DOM modifié les styles css

let myFirstTitle = document.querySelector('h1');

myFirstTitle.style.color = 'blue';

//#endregion