const dicoWord = ['dev junior', 'sorcier', 'exorciste']
let indexWord = 0;
let indexLetter = 0;
const title = document.querySelector('h1');
const target = document.getElementById('target');

const createLetter = () => {
    let createdSpan = document.createElement('span');
    createdSpan.textContent += dicoWord[indexWord][indexLetter];
    target.appendChild(createdSpan);

    setTimeout(() => {
        createdSpan.remove();
    }, 2800);
};


const loop = () => {
    setTimeout(() => {

        if (indexWord >= dicoWord.length) {

            indexWord = 0;
            indexLetter = 0;
            loop()

        } else if (indexLetter < dicoWord[indexWord].length) {
            createLetter();
            indexLetter++;
            loop();
        }

        else {

            indexWord++;
            indexLetter = 0;
            setTimeout(() => {

                loop();

            }, 2800);
        }

    }, 50)
};

loop();