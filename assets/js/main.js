const cards = document.querySelectorAll('.card');

var cardFlipped = false;
var firstCard;
var secondCard;
var lockBoard = false;
var timerOn = true;

/* Card flip function */
function flipCard() {

    if (timerOn === true) {
        startTimer();
        timerOn = false;
    }
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!cardFlipped) {
        cardFlipped = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;
    checkMatch();
}

//Check if the selected cards match
function checkMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return;

    }
    unFlipCards();

}

//Disables the cards that have been selected so they cannot be selected again
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchCounter();
    resetBoard();
    gameCompleted();
    currentScore();
}


function unFlipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
        lockBoard = false;
    }, 1500);
}

//Resets the board
function resetBoard() {
    [cardFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//Shuffles the cards to random position everytime the page refreshed or Restart button is pressed
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

//Timer Function

var time = 0;
var timer;
var minutes;
var seconds;

function startTimer() {
    timer = setInterval(function () {
        time++;
        minutes = ("0" + Math.floor(time / 60)).slice(-2);
        seconds = ("0" + (time % 60)).slice(-2);
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;
    }, 1000);
}

// Score
var score = 0;
var scoreKeeper = document.getElementById("current-score");
var totalScore = document.getElementById('total-score');
var timeBonus = document.getElementById('time-bonus');

//Gives current score and calculates totalScore
function currentScore() {
    score = score + 100;
    scoreKeeper.innerHTML = score;

    if (time >= 41) {
    totalScore.innerHTML = score * 1;
    timeBonus.innerHTML = "x1";
    }
    
    else if (time >= 31 && time <= 40) {
        totalScore.innerHTML = score * 1.3;
    timeBonus.innerHTML = "x1.3";
    }

    else if (time >= 21 && time <= 30) {
        totalScore.innerHTML = score * 1.5;
    timeBonus.innerHTML = "x1.5";
    }

    else if (time >= 11 && time <= 20 ) {
        totalScore.innerHTML = score * 1.7;
    timeBonus.innerHTML = "x1.7";
    }

    else if (time >= 1 && time <= 10) {
        totalScore.innerHTML = score * 2;
    timeBonus.innerHTML = "x2";
    }

}

var match = 0;
var matchesMade = document.getElementById("matches-made");

function matchCounter() {
    match++;
    matchesMade.innerHTML = match;
}

function gameCompleted() {

    if (match == 8) {

        var timeFinished = document.getElementById('timer').innerHTML;
        var completeMatches = document.getElementById('matches-made').innerHTML;

        document.getElementById('time-taken').innerHTML = timeFinished;
        document.getElementById('matches-completed').innerHTML = completeMatches;
        document.getElementById('game-completed-overlay').style.display = "block";
    }
}
// Refreshes the web page
function restartGame() {
    location.reload();
}

// Function to add active status to the difficulty button
var buttons = document.getElementsByClassName("difficulty-button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Function to add time, score and difficulty setting to overlay


cards.forEach(card => card.addEventListener('click', flipCard));