const form = document.querySelector('form');
const liste = document.querySelector('ul');

function addStorage() {
    window.localStorage.todos = liste.innerHTML;
};


function displayStorage() {
    if (window.localStorage.todos) {
        liste.innerHTML = window.localStorage.todos;
        console.log("display");
    } else {
        liste.innerHTML = `<li>Un click pour valider et une deuxième fois pour supprimer</li>`;
        console.log('dehors');
    }
}


// Je récupère la valeur entrée dans mon input
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputTask.value) {
        // J'affiche la valeur dans un <li>
        liste.innerHTML += `<li>${inputTask.value}</li>`
        inputTask.value = "";
        addStorage();
    } else {
        alert('Pas de valeur à ajouter !')
    }
});


// Je met un évènement pour supprimer les listes au click
liste.addEventListener('click', (e) => {
    if (e.target.classList.contains('validate-button')) {
        e.target.remove();
        addStorage();
    } else {
        e.target.classList.add('validate-button')
    }
});


window.addEventListener('load', displayStorage);