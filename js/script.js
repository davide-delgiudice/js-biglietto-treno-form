// richiamo gli elementi che mi servono

// elementi del form
const form = document.querySelector('form');
const nameField = document.getElementById('name-field');
const kmField = document.getElementById('km-field');
const ageField = document.getElementById('age-field');

// elementi della card
const namePassenger = document.getElementById('name-passenger');
const ticketType = document.getElementById('ticket-type');
const cabNum = document.getElementById('cab-num');
const cpCode = document.getElementById('cp-code');
const ticketPrice = document.getElementById('ticket-price');

// elementi dei bottoni
const genera = document.getElementById('send');
const annulla = document.getElementById('cancel')

genera.addEventListener('click', function(){
    let name = nameField.value.trim();
    namePassenger.innerText = name;
    
    let cabRandom = Math.floor(Math.random() * 8) + 1;
    cabNum.innerText = cabRandom;

    let cpRandom = Math.floor(Math.random() * 9999) + 1000;
    cpCode.innerText = cpRandom;

    let price = kmField.value * 0.21;
    ticketPrice.innerText = (`${price} €`);
})


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