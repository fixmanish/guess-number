'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;

let score = document.querySelector('.score').textContent;

// document.querySelector('.number').textContent = secretNum;

// fuction to hold messages

function displayMsg(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const enterValue = Number(document.querySelector('.guess').value);

  // no or 0 value
  if (!enterValue) {
    displayMsg('Umm, please enter a number ❌');
  }

  // different value than no/0
  else if (enterValue !== secretNum) {
    score--;

    if (score > 0) {
      displayMsg(
        enterValue > secretNum ? 'Oops, too high! 😅' : 'Hmm, too low 😑'
      );
      document.querySelector('.score').textContent = score;
    }

    // loosing the game
    else {
      displayMsg('You lost the game!🤯');
    }
  }

  // winning the game
  else {
    displayMsg('Congratulations, you guessed it right! Whoaa! 😀');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;

    let highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
});

// reloading the game not the page
// giving functionality to the 'again' button
// one of the state variables

document.querySelector('.again').addEventListener('click', function () {
  // location.reload();
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;

  console.log('again');
});

// for refreshing the page
// 'new-game' button

document.querySelector('.refresh').addEventListener('click', function () {
  location.reload();
});
