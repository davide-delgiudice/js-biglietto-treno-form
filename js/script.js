// richiamo gli elementi che mi servono

const form = document.querySelector('form');
const nameField = document.getElementById('name-field');
const kmField = document.getElementById('km-field');
const ageField = document.getElementById('age-field');

// dichiaro la variabile per il prezzo del biglietto
let biglietto = 0.21 * kmField;

console.log(kmField, ageField, biglietto);

// dichiaro la variabile per il prezzo finale
let finalprice;

// creo un if per calcolare gli sconti
if (ageField <= 17){
    finalprice = biglietto - biglieto * 0.2;
}

else if(ageField >=65){
    finalprice = biglietto - biglietto * 0.4;
}

else{
    finalprice = biglietto;
}

console.log(`Il prezzo finale da pagare è di ${finalprice.toFixed(2)}`);