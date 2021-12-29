'use strict';

let allCards = [];
let hitCount = 0;
let cardBack = 'img/back-of-card-snowflake.png';
// let carBack = 0; 
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
let score = localStorage.getItem('score');
let allNames = JSON.parse(localStorage.getItem('name'));
console.log(allNames);
console.log(allNames[allNames.length-1].score);
console.log(score);



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
  // imageOne.alt = allCards[cardTwo].src;
  // console.log(allCards[cardOne].value + allCards[cardTwo].value);
  // console.log(allCards[cardThree].value + allCards[cardFour].value);

  imageTwo.src = (cardBack);
  // imageTwo.value = 0;
  // imageTwo.alt = allCards[cardTwo].src;

  imageThree.src = allCards[cardThree].src;
  imageThree.alt = allCards[cardThree].src;

  imageFour.src = allCards[cardFour].src;
  imageFour.alt = allCards[cardFour].src;

  console.log(cardOne, cardTwo, cardThree, cardFour);
  dealerScore += getScore(cardOne, cardTwo);
  playerScore += getScore(cardThree, cardFour);

  

  let playerSec = document.getElementById('player-score');
  let p = document.createElement('p');
  p.setAttribute('id', 'p1');
  p.textContent = `Player Score: ${playerScore}`;
  playerSec.appendChild(p);
  let playerButtons = document.getElementById('player-buttons');
  playerButtons.style.marginTop = '0px';
}

console.log(allCards[0].value, allCards[13].value);











function handleDeckClick() {
  renderCards();
  hit.addEventListener('click', handleHitClick);
  stand.addEventListener('click', handleDeckStand);
  doubledown.addEventListener('click', handleDoubleClick);
  deckOfCards.removeEventListener('click', handleDeckClick)
  if (playerScore === 21 && dealerScore < 21){
    allNames[allNames.length-1].score += 3;
    let article = document.getElementById('article');
    let p = document.createElement('p');
    p.textContent = (`Blackjack! Congratulations! ${'Play again'}`)
    article.appendChild(p);
    hit.removeEventListener('click', handleHitClick);
    stand.removeEventListener('click', handleDeckStand)
    doubledown.removeEventListener('click', handleDoubleClick);
    let stringifiedName = JSON.stringify(allNames);
    localStorage.setItem('name', stringifiedName);
  } else if (dealerScore === 21 && playerScore < 21){
    allNames[allNames.length-1].score -=2
    imageTwo.src = allCards[cardTwo].src;
    imageTwo.alt = allCards[cardTwo].src;
    let dealerSec = document.getElementById('dealer-score');
    let p = document.createElement('p');
    p.setAttribute('id', 'p2');
    p.textContent = `Dealer Score: ${dealerScore}`;
    dealerSec.appendChild(p);
    let article = document.getElementById('article');
    p = document.createElement('p');
    p.textContent = (`Dealer Has Blackjack, ${'Play again'}`)
    article.appendChild(p);
    hit.removeEventListener('click', handleHitClick);
    stand.removeEventListener('click', handleDeckStand)
    doubledown.removeEventListener('click', handleDoubleClick);
    let stringifiedName = JSON.stringify(allNames);
    localStorage.setItem('name', stringifiedName);
  }
  document.getElementById('article').addEventListener('click', handleResetGame);
}




// function dealerAces() {
//   while (dealerScore > 21) {
//   allCards[0].value = 1, allCards[13].value = 1, allCards[26].value = 1, allCards[39].value = 1
//   } 
// }
// dealerAces();

// function playerAces() {
//   while (playerScore > 21) {
//   allCards[0, 13, 26, 39].value = 1;
//   } 
// }
// playerAces();
















function handleHitClick() {
  let hitCard = getRandomCard();
  while (usedCards.includes(hitCard)) {
    hitCard = getRandomCard();
  }
  usedCards.push(hitCard);

  playerScore += allCards[hitCard].value;
  // if (playerScore > 21 && (cardThree === 0 || cardThree === 13 || cardThree === 26 || cardThree === 39 || cardFour === 0 || cardFour === 13 || cardFour === 26 || cardFour === 39 || hitCard === 0 || hitCard === 13 || hitCard === 26 || hitCard === 39 )){
  //   playerScore -= 10;
  // }
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









function handleHitClickDouble() {
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

  // if (playerScore >= 21) {
  //   hit.removeEventListener('click', handleHitClick);
  //   handleDeckStandDouble();
  //   stand.removeEventListener('click', handleDeckStand);
    
  // }
  doubledown.removeEventListener('click', handleDoubleClick);
}











function handleDeckStand() {
  if (dealerScore < 22){

    imageTwo.src = allCards[cardTwo].src;
    imageTwo.alt = allCards[cardTwo].src;
    let dealerSec = document.getElementById('dealer-score');
    let p = document.createElement('p');
    p.setAttribute('id', 'p2');
    p.textContent = `Dealer Score: ${dealerScore}`;
    dealerSec.appendChild(p);
  }  
  while (dealerScore < 21 && dealerScore < 17 && playerScore < 22) {
    let hitCard = getRandomCard();
    while (usedCards.includes(hitCard)) {
      hitCard = getRandomCard();
    }
    dealerScore += allCards[hitCard].value;
    
  // if (dealerScore > 21 && (cardOne === 0 || cardOne === 13 || cardOne === 26 || cardOne === 39 || cardTwo === 0 || cardTwo === 13 || cardTwo === 26 || cardTwo === 39 || hitCard === 0 || hitCard === 13 || hitCard === 26 || hitCard === 39 )){
  //   dealerScore -= 10;
    
  // }
    usedCards.push(hitCard);
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
    // if (playerScore > 21) {
    //   hit.removeEventListener('click', handleHitClick);
      
    // }
    // if (playerScore > 21) {
    //   stand.removeEventListener('click', handleDeckStand);
    // }
    
    stand.removeEventListener('click', handleDeckStand);
    hit.removeEventListener('click', handleHitClick);
  } 
  // if (dealerScore > 17) {
  //   stand.removeEventListener('click', handleDeckStand);
  //   hit.removeEventListener('click', handleHitClick);
  // }
  
  if (playerScore > dealerScore && playerScore < 22 || dealerScore > 21 && playerScore < 22) {
    allNames[allNames.length-1].score +=2
    let article = document.getElementById('article');
    let p = document.createElement('p');
    p.textContent = ('You Win! Click Here to Play Again.');
    
    article.appendChild(p);
    let stringifiedName = JSON.stringify(allNames);
    localStorage.setItem('name', stringifiedName);
  } else if ( playerScore === dealerScore && playerScore < 22){
    let article = document.getElementById('article');
    let p = document.createElement('p');
    p.textContent = ('Player Pushes, Click Here to Play Again.');
    
    article.appendChild(p);
  } else {
    allNames[allNames.length-1].score -=2
    let article = document.getElementById('article');
    let p = document.createElement('p');
    p.textContent = ('Dealer Wins, Click Here to Play Again.');
    article.appendChild(p);
    let stringifiedName = JSON.stringify(allNames);
    localStorage.setItem('name', stringifiedName);
  }
  // handleResetGame();
  doubledown.removeEventListener('click', handleDoubleClick);
  document.getElementById('article').addEventListener('click', handleResetGame);
}






function handleDeckStandDouble() {
  if (dealerScore < 22){

    imageTwo.src = allCards[cardTwo].src;
    imageTwo.alt = allCards[cardTwo].src;
    let dealerSec = document.getElementById('dealer-score');
    let p = document.createElement('p');
    p.setAttribute('id', 'p2');
    p.textContent = `Dealer Score: ${dealerScore}`;
    dealerSec.appendChild(p);
  }  
  while (dealerScore < 21 && dealerScore < 17 && playerScore < 22) {
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
    // if (playerScore > 21) {
    //   hit.removeEventListener('click', handleHitClick);
      
    // }
    // if (playerScore > 21) {
    //   stand.removeEventListener('click', handleDeckStand);
    // }
    
    stand.removeEventListener('click', handleDeckStand);
    hit.removeEventListener('click', handleHitClick);
  } 
  // if (dealerScore > 17) {
  //   stand.removeEventListener('click', handleDeckStand);
  //   hit.removeEventListener('click', handleHitClick);
  // }
  
  if (playerScore > dealerScore && playerScore < 22 || dealerScore > 21 && playerScore < 22) {
    allNames[allNames.length-1].score +=4
    let article = document.getElementById('article');
    let p = document.createElement('p');
    p.textContent = ('You Win! Click Here to Play Again.');
    
    article.appendChild(p);
    let stringifiedName = JSON.stringify(allNames);
    localStorage.setItem('name', stringifiedName);
  } else if ( playerScore === dealerScore && playerScore < 22){
    let article = document.getElementById('article');
    let p = document.createElement('p');
    p.textContent = ('Player Pushes. Click Here to Play Again.');
    
    article.appendChild(p);
  } else {
    allNames[allNames.length-1].score -=4
    let article = document.getElementById('article');
    let p = document.createElement('p');
    p.textContent = ('Dealer Wins, Click Here to Play Again.');
    article.appendChild(p);
    let stringifiedName = JSON.stringify(allNames);
    localStorage.setItem('name', stringifiedName);
  }
  doubledown.removeEventListener('click', handleDoubleClick);
  document.getElementById('article').addEventListener('click', handleResetGame);
}









function handleResetGame(){
  let reset = window.location.reload();

}







//double down function, invokes then turns off hit, invokes stand, turns off double down.
function handleDoubleClick (){
  handleHitClickDouble();
  handleDeckStandDouble();
  // doubledown.removeEventListener('click', handleDoubleClick);
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
let section = document.getElementById('player-buttons')
let div4 = document.createElement('div4')
div4.textContent = (`${allNames[allNames.length-1].name}'s bank $${allNames[allNames.length-1].score}`)
section.appendChild(div4)

deckOfCards.addEventListener('click', handleDeckClick);











let leaderboardScores = [
  {name: "Ripley", score: 175},
  {name: "Reggie", score: 162},
  {name: "Andy", score: 147},
  {name: "Raul", score: 130},
  {name: "Jessica", score: 125},
  {name:`${allNames[allNames.length-1].name}`, score: `${allNames[allNames.length-1].score}`},
];

function updateLeaderboardView() {
  let leaderboard = document.getElementById("leaderboard");
  leaderboard.innerHTML = "";
  let h1 = document.createElement('h1');
  h1.textContent = 'Leaderboard';
  leaderboard.appendChild(h1);

  leaderboardScores.sort(function(a, b){ return b.score - a.score  });
  let elements = []; 

  for(let i=0; i<leaderboardScores.length; i++) {
      let name = document.createElement("div");
      let score = document.createElement("div");
      name.classList.add("name");
      score.classList.add("score");
      name.innerText = leaderboardScores[i].name;
      score.innerText = leaderboardScores[i].score;

      let scoreRow = document.createElement("div");
      scoreRow.classList.add("row");
      scoreRow.appendChild(name);
      scoreRow.appendChild(score);
      leaderboard.appendChild(scoreRow);

      elements.push(scoreRow);

  }

  let colors = ["gold", "silver", "#cd7f32", "white", "white", "white"];
  for(let i=0; i < 6; i++) {
      elements[i].style.color = colors[i];
  }
}

updateLeaderboardView();
function randomize() {
  for(var i=0; i<leaderboardScores.length; i++) {
      leaderboardScores[i].score = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  }
  
  updateLeaderboardView();
}
