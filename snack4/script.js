// Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

const newArray = [];

for (let i = 0; i < array1.length; i++) {
  newArray.push(array1[i]);
  
  newArray.push(array2[i]);
}

console.log(newArray);
