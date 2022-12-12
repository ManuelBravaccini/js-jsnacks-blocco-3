// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let sum = 0;

const numbers = [];

while (sum < 50) {
  const number = parseInt(prompt('Inserisci un numero:'));

  numbers.push(number);

  sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(numbers);
