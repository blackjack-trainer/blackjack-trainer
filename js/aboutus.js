'use strict';

const card = document.getElementById('card');
const cardReg = document.getElementById('cardReg');
const cardCes = document.getElementById('cardCes');

function flipCard(){
  card.classList.toggle('flipCard');
}

function functionRegClick(){
  cardReg.classList.toggle('flipCardReg');
}
function functionCesClick(){
  cardCes.classList.toggle('flipCardCes');
}


card.addEventListener('click', flipCard);
cardReg.addEventListener('click', functionRegClick);
cardCes.addEventListener('click', functionCesClick);

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
