'use strict';

let allCards = [];


let indexCollection = [];

let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');
let imageThree = document.getElementById('image-three');
let imageFour = document.getElementById('image-four');






function Cards(src, value) {
  this.src = `img/${src}`;
  this.value = value;
  allCards.push(this);

}
console.log(allCards);

new Cards('ace-hearts.png', 11);
new Cards('king-hearts.png', 10);
new Cards('queen-hearts.png', 10);
new Cards('jack-hearts.png', 10);
new Cards('ten-hearts.png', 10);
new Cards('nine-hearts.png', 9);
new Cards('eight-hearts.png', 8);
new Cards('seven-hearts.png', 7);
new Cards('six-hearts.png', 6);
new Cards('five-hearts.png', 5);
new Cards('four-hearts.png', 4);
new Cards('three-hearts.png', 3);
new Cards('two-hearts.png', 2);
new Cards('ace-spades.png', 11);
new Cards('king-spades.png', 10);
new Cards('queen-spades.png', 10);
new Cards('jack-spades.png', 10);
new Cards('ten-spades.png', 10);
new Cards('nine-spades.png', 9);
new Cards('eight-spades.png', 8);
new Cards('seven-spades.png', 7);
new Cards('six-spades.png', 6);
new Cards('five-spades.png', 5);
new Cards('four-spades.png', 4);
new Cards('three-spades.png', 3);
new Cards('two-spades.png', 2);
new Cards('ace-clubs.png', 11);
new Cards('king-clubs.png', 10);
new Cards('queen-clubs.png', 10);
new Cards('jack-clubs.png', 10);
new Cards('ten-clubs.png', 10);
new Cards('nine-clubs.png', 9);
new Cards('eight-clubs.png', 8);
new Cards('seven-clubs.png', 7);
new Cards('six-clubs.png', 6);
new Cards('five-clubs.png', 5);
new Cards('four-clubs.png', 4);
new Cards('three-clubs.png', 3);
new Cards('two-clubs.png', 2);
new Cards('ace-diamonds.png', 11);
new Cards('king-diamonds.png', 10);
new Cards('queen-diamonds.png', 10);
new Cards('jack-diamonds.png', 10);
new Cards('ten-diamonds.png', 10);
new Cards('nine-diamonds.png', 9);
new Cards('eight-diamonds.png', 8);
new Cards('seven-diamonds.png', 7);
new Cards('six-diamonds.png', 6);
new Cards('five-diamonds.png', 5);
new Cards('four-diamonds.png', 4);
new Cards('three-diamonds.png', 3);
new Cards('two-diamonds.png', 2);


function getRandomCard() {
  return Math.floor(Math.random() * allCards.length);
}




function renderCards() {

  while (indexCollection.length < 4) {
    let randomNum = getRandomCard();
    while (!indexCollection.includes(randomNum)) {
      indexCollection.push(randomNum);
    }
  }
  let cardOne = indexCollection.shift();
  let cardTwo = indexCollection.shift();
  let cardThree = indexCollection.shift();
  let cardFour = indexCollection.shift();


  imageOne.src = allCards[cardOne].src;
  imageOne.alt = allCards[cardTwo].src;
  console.log(allCards[cardOne].value + allCards[cardTwo].value);
  console.log(allCards[cardThree].value + allCards[cardFour].value);

  imageTwo.src = allCards[cardTwo].src;
  imageTwo.alt = allCards[cardTwo].src;

  imageThree.src = allCards[cardThree].src;
  imageThree.alt = allCards[cardThree].src;

  imageFour.src = allCards[cardFour].src;
  imageFour.alt = allCards[cardFour].src;

  console.log(cardOne, cardTwo, cardThree, cardFour);

}

let dealScore = document.getElementById('deal-score');
let p = document.createElement('p');
p.textContent = '33232';
dealScore.appendChild(p);
renderCards();

function dealerScore(cardOne, cardTwo) {
  let dealer = (allCards[cardOne].value + allCards[cardTwo].value);
  console.log(dealer);
}

dealerScore();
