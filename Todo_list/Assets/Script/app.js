
const form = document.querySelector('form');
const taskInput = document.getElementById('task-input');
const liste = document.querySelector('ul');

let listeEnfant;
let arrayTask = [];
let newTask = "";


taskInput.addEventListener('input', (e) => {
    if (e.target.value) {
        newTask = e.target.value;
    }
    else {
        newTask = "";
    }
});


form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (newTask) {
        arrayTask.push(newTask);

        arrayTask.map(item => {
            return liste.innerHTML += `<li class='listeEnfant'>${item}</>`;
        });

        listeEnfant = document.querySelectorAll('.listeEnfant');
        listeEnfant.forEach(item => {
            item.addEventListener('click', (e) => {
                prompt("VALIDE")
            });
            item.addEventListener('click', (e) => {
                alert('SUPP')
                e.target.remove();
            });
        });

        arrayTask = [];
    }
    else {
        alert('Veuillez entré une valeur');
        taskInput.focus();
    }
});


