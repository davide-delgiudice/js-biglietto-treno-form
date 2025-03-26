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

genera.addEventListener('click', function(event){
    event.preventDefault();

    let name = nameField.value.trim();
    namePassenger.innerText = name;
    
    let cabRandom = Math.floor(Math.random() * 8) + 1;
    cabNum.innerText = cabRandom;

    let cpRandom = Math.floor(Math.random() * 9999) + 1000;
    cpCode.innerText = cpRandom;

    let price = kmField.value * 0.21;
    let age = ageField.value

    if(age <= 17){
        price = price - (price * 0.20);
        ticketType.innerText = "Biglietto Scontato";
    }
    else if(age >= 65){
        price = price - (price * 0.40);
        ticketType.innerText = "Biglietto Scontato";
    }
    else{
        ticketType.innerText = "Biglietto Standard";
    }
    
    ticketPrice.innerText = (`${price.toFixed(2)} €`);    
})

annulla.addEventListener('click', function(event){
    event.preventDefault();

    nameField.value = "";
    kmField.value = "";
    ageField.value = "";
})