// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto

let userNumber;

do {
    userNumber = parseInt(prompt('Inserisci un numero da 1 a 10:'), 10);
} while ((userNumber < 1) || (userNumber > 10));