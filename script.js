'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const diceRoll = document.querySelector('.btn--roll');
const dicenew = document.querySelector('.btn--new');
const dicehold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currentScore = 0;
let player = 0;
dicenew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  score0El.textContent = 0;
  score1El.textContent = 0;
  player = 0;
  currentScore = 0;
});
const change = () => {
  player = player > 0 ? 0 : 1;
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentScore = 0;
  if (score0El.textContent >= 20) {
    player0.classList.add('player--winner');
    diceEl.src = '1.jpg';
  }
  if (score1El.textContent >= 20) {
    player1.classList.add('player--winner');
    diceEl.src = '2.jpg';
  }
  if (player == 0) {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  } else {
    player1.classList.add('player--active');
    player0.classList.remove('player--active');
  }
};
diceRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    if (player == 0) current0El.textContent = currentScore;
    if (player == 1) current1El.textContent = currentScore;
  } else {
    //switch to next player
    change();
  }
});
dicehold.addEventListener('click', function () {
  if (player == 0)
    score0El.textContent =
      Number(score0El.textContent) + Number(current0El.textContent);
  if (player == 1)
    score1El.textContent =
      Number(score1El.textContent) + Number(current1El.textContent);
  change();
});
