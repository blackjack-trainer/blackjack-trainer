'use strict'

// Submit form

const nameForm = document.getElementById('user-name');
let allNames = [];

function Name(name) {
  this.name = name;
  this.score = 100;
  allNames.push(this);
}

let retrievedName = localStorage.getItem('name');

if (retrievedName){
  let parsedName = JSON.parse(retrievedName);
  allNames = parsedName;
}


function handleSubmit(event) {
  event.preventDefault();
  let playerName = event.target.name.value;
  new Name (playerName);
  let stringifiedName = JSON.stringify(allNames);
  localStorage.setItem('name', stringifiedName);
  window.location.href='gameplay.html';
}


nameForm.addEventListener('submit', handleSubmit);
