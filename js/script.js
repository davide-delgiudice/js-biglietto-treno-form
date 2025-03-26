// richiamo gli elementi che mi servono

const form = document.querySelector('form');
const nameField = document.getElementById('name-field');
const kmField = document.getElementById('km-field');
const ageField = prompt(document.getElementById('age-field'));

// dichiaro la variabile per il prezzo del biglietto
let biglietto = 0.21 * kmField;

console.log(kmField, ageField, biglietto);

// dichiaro la variabile per il prezzo finale
let finalprice;

