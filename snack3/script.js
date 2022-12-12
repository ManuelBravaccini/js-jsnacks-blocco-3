// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.


const array1 = [1, 2, 3];
const array2 = [1, 2, 3, 4, 5, 6, 5, 6];

const diff = Math.abs(array1.length - array2.length);

if (array1.length < array2.length) {
  for (let i = 0; i < diff; i++) {
    array1.push(1);
  }
} else {
  for (let i = 0; i < diff; i++) {
    array2.push(1);
  }
}

console.log(array1); 
console.log(array2);
