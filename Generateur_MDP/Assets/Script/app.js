const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é\"'(-è_çà)=$*ù!:;,?§/><|`@[]^¨µ";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');

const generateMDP = () => {

    let data = [];
    let password = "";


    if (lowercase.checked) data.push(...dataLowerCase);
    if (uppercase.checked) data.push(...dataUpperCase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert('Veuillez sélectionner des critères');
        return;
    }

    for (i = 0; i < rangeValue.value; i++) {

        password += data[Math.floor(Math.random() * data.length)]
    }
    passwordOutput.value = password;

    passwordOutput.select();
    navigator.clipboard.writeText(passwordOutput.value);
    generateButton.textContent = " Mot de passe copié !"



    setTimeout(() => {
        generateButton.textContent = "Générer un nouveau mot de passe"
    }, 2000)
}

generateButton.addEventListener("click", generateMDP);