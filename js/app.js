'use strict';

let allCards = [];

let hitCount = 0;

let indexCollection = [];

let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');
let imageThree = document.getElementById('image-three');
let imageFour = document.getElementById('image-four');
let imageFive = document.getElementById('image-five');
let deckOfCards = document.getElementById('deck-of-cards');
let hit = document.getElementById('hit-button');
let stand = document.getElementById('stand-button');
let doubledown = document.getElementById('double-down')
let cardOne, cardTwo, cardThree, cardFour, cardFive;
let dealerScore = 0;
let playerScore = 0;
let usedCards = [];
let playerBank = 100


let section = document.getElementById('player-buttons')
let div = document.createElement('div')
div.textContent = (`name's bank ${playerBank}`)
section.appendChild(div)

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

  while (indexCollection.length < 52) {
    let randomNum = getRandomCard();
    while (!indexCollection.includes(randomNum)) {
      indexCollection.push(randomNum);
    }
  }
  cardOne = indexCollection.shift();
  cardTwo = indexCollection.shift();
  cardThree = indexCollection.shift();
  cardFour = indexCollection.shift();
  cardFive = indexCollection.shift();
  usedCards.push(cardOne, cardTwo, cardThree, cardFour)

  imageOne.src = allCards[cardOne].src;
  imageOne.alt = allCards[cardTwo].src;
  // console.log(allCards[cardOne].value + allCards[cardTwo].value);
  // console.log(allCards[cardThree].value + allCards[cardFour].value);

  imageTwo.src = allCards[cardTwo].src;
  imageTwo.alt = allCards[cardTwo].src;

  imageThree.src = allCards[cardThree].src;
  imageThree.alt = allCards[cardThree].src;

  imageFour.src = allCards[cardFour].src;
  imageFour.alt = allCards[cardFour].src;

  console.log(cardOne, cardTwo, cardThree, cardFour);
  dealerScore += getScore(cardOne, cardTwo);
  playerScore += getScore(cardThree, cardFour);

  let dealerSec = document.getElementById('dealer-score');
  let p = document.createElement('p');
  p.setAttribute('id', 'p2');
  p.textContent = `Dealer Score: ${dealerScore}`;
  dealerSec.appendChild(p);

  let playerSec = document.getElementById('player-score');
  p = document.createElement('p');
  p.setAttribute('id', 'p1');
  p.textContent = `Player Score: ${playerScore}`;
  playerSec.appendChild(p);
  let playerButtons = document.getElementById('player-buttons');
  playerButtons.style.marginTop = '0px';
}

function handleDeckClick() {
  renderCards();
  hit.addEventListener('click', handleHitClick);
  stand.addEventListener('click', handleDeckStand);
  doubledown.addEventListener('click', handleDoubleClick);
  deckOfCards.removeEventListener('click', handleDeckClick)
  if (playerScore === 21 && dealerScore < 21){
    let article = document.getElementById('article');
    let p = document.createElement('p');
    p.textContent = (`Blackjack! Congratulation!${'Play again'}`)
    article.appendChild(p);
    hit.removeEventListener('click', handleHitClick);
    stand.removeEventListener('click', handleDeckStand)
    doubledown.removeEventListener('click', handleDoubleClick);
  }
}

function handleHitClick() {
  let hitCard = getRandomCard();
  while (usedCards.includes(hitCard)) {
    hitCard = getRandomCard();
  }
  usedCards.push(hitCard);

  playerScore += allCards[hitCard].value;
  let playerSec = document.getElementById('player-hand');
  let playerSc = document.getElementById('player-score');
  let img = document.createElement('img');
  let width = img.offsetWidth;
  img.src  = allCards[hitCard].src;
  playerSec.appendChild(img);
  let p1 = document.getElementById('p1');
  p1.remove();
  let p = document.createElement('p');
  p.setAttribute('id', 'p1');
  p.textContent = `Player Score: ${playerScore}`;
  playerSc.appendChild(p);

  if (playerScore >= 21) {
    hit.removeEventListener('click', handleHitClick);
    handleDeckStand();
    stand.removeEventListener('click', handleDeckStand);
    
  }
  doubledown.removeEventListener('click', handleDoubleClick);

 

}

function handleDeckStand() {
  while (dealerScore < 21 && dealerScore < 17) {
    let hitCard = getRandomCard();
    while (usedCards.includes(hitCard)) {
      hitCard = getRandomCard();
    }
    usedCards.push(hitCard);

    dealerScore += allCards[hitCard].value;
    let dealerSec = document.getElementById('dealer-hand');
    let dealerSc = document.getElementById('dealer-score');
    let img = document.createElement('img');
    img.src = allCards[hitCard].src;
    dealerSec.appendChild(img);
    let p2 = document.getElementById('p2');
    p2.remove();
    let p = document.createElement('p');
    p.setAttribute('id', 'p2');
    p.textContent = `Dealer Score: ${dealerScore}`;
    dealerSc.appendChild(p);
    if (playerScore > 21) {
      hit.removeEventListener('click', handleHitClick);
      
    }
    if (playerScore > 21) {
      stand.removeEventListener('click', handleDeckStand);
    }
    
    stand.removeEventListener('click', handleDeckStand);
    hit.removeEventListener('click', handleHitClick);
  } if (dealerScore > 17) {
    stand.removeEventListener('click', handleDeckStand);
    hit.removeEventListener('click', handleHitClick);
  }
  if (playerScore > dealerScore && playerScore < 22 || dealerScore > 21 && playerScore < 22) {
    playerBank++
    let article = document.getElementById('article');
    let p = document.createElement('p');
    p.textContent = (`You Win, Play Again? ${'Play again'}`)
    
    article.appendChild(p);
  } else if ( playerScore === dealerScore && playerScore < 22){
    let article = document.getElementById('article');
    let p = document.createElement('p');
    p.textContent = (`Player Pushes ${'Play again'}`)
    
    article.appendChild(p);
  } else {
    playerBank--
    let article = document.getElementById('article');
    let p = document.createElement('p');
    p.textContent = (`Dealer Wins, Play Again? ${'Play again'}`)
    article.appendChild(p);
  }
  doubledown.removeEventListener('click', handleDoubleClick);
}

//double down function, invokes then turns off hit, invokes stand, turns off double down.
function handleDoubleClick (){
  handleHitClick();
  handleDeckStand();
  doubledown.removeEventListener('click', handleDoubleClick);
}





function aces(a, b) {
  while (dealerScore > 21) {
    allCards.value = 1;
  } if (allCards.value = 11);
}


console.log(allCards);
function getScore(firstCard, secondCard) {
  
  let score = (allCards[firstCard].value + allCards[secondCard].value);
  
  if (score > 21) {
    return 'bust';
  } else {
    return score;
  }

}

deckOfCards.addEventListener('click', handleDeckClick);


