const form = document.querySelector('form');
const liste = document.querySelector('ul');

function addStorage() {
    window.localStorage.todos = liste.innerHTML;
};

console.log(liste);

function displayStorage() {
    if (liste.innerHTML) {
        liste.innerHTML = window.localStorage.todos;
    } else {
        liste.innerHTML = `<li>Click sur une tâche pour la valider puis pour la supprimer</li>`;
    }
}

window.addEventListener('load', displayStorage);

// Je récupère la valeur entrée dans mon input
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // J'affiche la valeur dans un <li>
    liste.innerHTML += `<li>${inputTask.value}</li>`
    addStorage();
});


// Je met un évènement pour supprimer les listes au click
liste.addEventListener('click', (e) => {
    if (e.target.classList.contains('validate-button')) {
        e.target.remove();
    } else {
        e.target.classList.add('validate-button')
    }
});



/* <form action="">
<div class="container-task">
    <label for="task-input">Entrez une tâche :</label>
    <input type="text" id="task-input" autocomplete="off">
    <button id="button-submit" type="submit">Ajouter</button>
    <ul>

    </ul>
</div>
</form> */