/**
Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
**/

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const genNumbers = getRandomNumber (1, 100);
console.log(genNumbers);