'use strict';
//DOM manipulation definitions
let player0 = document.querySelector('.player--0')
let player1 = document.querySelector('.player--1')
let diceElement = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new')
let btnRoll = document.querySelector('.btn--roll')
let btnHold = document.querySelector('.btn--hold')
let playerScore1 = document.getElementById('score--0')
let playerScore2 = document.getElementById('score--1')
let currentScore1 = document.getElementById('current--0')
let currentScore2 = document.getElementById('current--1')
//Starters
player1.classList.remove('player--winner');
player1.classList.remove('player--winner');
player0.classList.add('player--active');
player1.classList.remove('player--active');
diceElement.classList.add('hidden')
playerScore1.textContent = '0'
playerScore2.textContent = '0'
currentScore1.textContent = '0';
currentScore2.textContent = '0';
btnHold.classList.add('hidden')
btnRoll.classList.add('hidden')
//Events attached with functions
btnRoll.addEventListener('click',rollDice)
btnHold.addEventListener('click',hold)
btnNew.addEventListener('click',newGame)
//Little bit game setting
let scores = [0,0];
let playing = 0;
let player = 0;
let currentScore = 0;
//Functions
function players(){
  document.getElementById(`current--${player}`).textContent = 0;
  player = player === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}
//NEW GAME BUTTON
function newGame() {
    btnRoll.classList.remove('hidden')
    btnHold.classList.remove('hidden')
    playing = 1;
    player1.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    diceElement.classList.add('hidden')
    playerScore1.textContent = '0';
    playerScore2.textContent = '0';
    currentScore1.textContent = '0';
    currentScore2.textContent = '0';
    //Click control on console
    console.log('New Game Clicked!')
    players()
}
// ROLLING DICE
function rollDice() {
    diceElement.classList.remove('hidden')
    //random number for roll dice button 
    if (playing = 1){
    let randomDice = Math.trunc(Math.random() * 6 + 1);
    diceElement.src = `dice-${randomDice}.png`
    //Click control on console
    console.log('Roll Dice clicked')
    if(randomDice!=1){
        currentScore = randomDice + currentScore;
    }else{
        currentScore = 0;
        players()
    }
    winCheck()
    document.getElementById(`current--${player}`).textContent = currentScore;
    console.log(currentScore)}
}
//HOLD BUTTON
function hold() {
    if(playing = 1){
    //Click control on console 
    scores[player] += currentScore;
    currentScore = 0
    document.getElementById(`score--${player}`).textContent = scores[player];
    console.log('Hold clicked!')
    players()
    console.log(scores)
    winCheck()
    }
}
console.log(scores)
//WİN CHECK
function winCheck() {
//I should change it to if(scores[players] >= 100 but im lazy)
if(scores[1] >= 100){
    playing = 0;
    diceElement.classList.add('hidden')
    document
    .querySelector(`.player--${player}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${player}`)
    .classList.remove('player--active');
    btnHold.classList.add('hidden')
    btnRoll.classList.add('hidden')
} else if(scores[0] >= 100){playing = 0;
diceElement.classList.add('hidden')
document
.querySelector(`.player--${player}`)
.classList.add('player--winner');
document
.querySelector(`.player--${player}`)
.classList.remove('player--active');
btnHold.classList.add('hidden')
btnRoll.classList.add('hidden')}
console.log('Checking Winner')

}
winCheck()