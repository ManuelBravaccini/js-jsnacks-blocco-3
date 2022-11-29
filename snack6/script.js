/**
Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
**/

const list = ['0x1655', 10, 15, 60];

function getSumArray(array) {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        const castEl = parseInt(array[i], 10);
        sum = sum + castEl;
    }
    return sum;
}

console.log(getSumArray(list));