const form = document.querySelector('form');
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
const progressBar = document.getElementById("progress-bar");

let pseudo, email, password, confirmPass;

// Fonction pour afficher un message d'erreur et une classe pour avoir un visuel pour l'utilisateur
const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector(`.${tag}-container`);
    const span = document.querySelector(`.${tag}-container > span`);

    if (!valid) {
        container.classList.add('error');
        span.textContent = message;
    }
    else {
        container.classList.remove('error');
        span.textContent = message;
    }
};

const pseudoChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères", false)
        pseudo = null;
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        errorDisplay("pseudo", "Les caractères spéciaux ne sont pas autorisé", false)
        pseudo = null;
    }
    else {
        errorDisplay("pseudo", "", true)
        pseudo = value;
    }
};

const emailChecker = (value) => {
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        errorDisplay("email", "Le mail n'est pas valide", false);
        email = null;
    } else {
        errorDisplay("email", "", true);
        email = value;
    }

};

// Fonction pour valider un mot de passe avec REGEX et une barre de progression pour le visuel de sécurité
const passwordChecker = (value) => {

    progressBar.classList = "";

    if (value > 1 && !value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)) {
        errorDisplay("password", "Minimum 8 caractères, une majuscule, un chiffre et un caractère spécial !", false);
        progressBar.classList.add('progressRed');
        password = null;
    } else if (value.length < 12) {
        progressBar.classList.add('progressBlue');
        password = value;
    }
    else {
        errorDisplay("password", "", true);
        progressBar.classList.add('progressGreen');
        password = value;
    }
    // Si confirmPass est true, joue la fonction confirmChecker, ce qui permet d'être sûr que les deux valeurs correspondent
    if (confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
    if (value !== password) {
        errorDisplay("confirm", "Les mots de passe ne correspondent pas");
        confirmPass = false;
    } else {
        errorDisplay("confirm", "", true);
        confirmPass = true;
    }
};

// Je boucle sur tout mes inputs pour leur mettre un évent, je switch sur la valeur de leur ID et leur assigne une fonction de validation, en passant paramètre la valeur du champ compléter par l'utilisateur
inputs.forEach((input => {
    input.addEventListener("input", (e) => {

        switch (e.target.id) {

            case "pseudo":
                pseudoChecker(e.target.value);
                break;

            case "email":
                emailChecker(e.target.value);
                break;

            case "password":
                passwordChecker(e.target.value);
                break;

            case "confirm":
                confirmChecker(e.target.value);
                break;

            default:
                break;
        }
    });
}));

// Ne pas oublier, une fois le formulaire envoyé de réinitialisé les champs !
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (pseudo && email && password && confirmPass) {
        const data = {
            pseudo: pseudo,
            email: email,
            password: password
        }

        // Si on écrit pseudo : pseudo, ont peux juste écrire pseudo
        const data2 = {
            pseudo,
            email,
            password
        }

        inputs.forEach((input) => {
            input.value = "";
        })

        pseudo = null;
        email = null;
        password = null;
        confirmPass = null;

        progressBar.classList = "";

        alert('Inscription validé !')

        console.log(data, data2);
    } else {
        alert("Veuillez remplir correctement les champs !")
    }

});