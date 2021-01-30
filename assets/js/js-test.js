/*jshint esversion: 6 */
var cards = document.querySelectorAll(".card");
var cardFlipped = false;
var firstCard;
var secondCard;
var lockBoard = false;
var timerOn = false;

/* Card flip function */

function startGame() {
    var i;
    for (i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains("flip")) {
            cards[i].classList.remove("flip");
        }
    }

    var delay = 1000;
    setTimeout(function() {
        shuffle();
        resetTime();
        resetScore();
        resetMatches();
        enableCards();
        document.getElementById("game-completed-overlay").style.display = "none";
    }, delay);
}

function flipCard() {

    if (timerOn === false) {
        startTimer();
        timerOn = true;
    }
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

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
        matchCounter();
        currentScore();
        return;

    }
    unFlipCards();

}

//Disables the cards that have been selected so they cannot be selected again
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

function enableCards() {
    cards.forEach(card => card.addEventListener("click", flipCard));
}


function unFlipCards() {

    lockBoard = true;

    setTimeout(function() {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
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
function shuffle() {
    cards.forEach(card => {
        var shuffleCards = Math.floor(Math.random() * 16);
        card.style.order = shuffleCards;
    });
};

cards.forEach(card => card.addEventListener("click", flipCard));

//Timer Function

var time = 0;
var timer;
var minutes;
var seconds;

function startTimer() {
    timer = setInterval(function() {
        time++;
        minutes = ("0" + Math.floor(time / 60)).slice(-2);
        seconds = ("0" + (time % 60)).slice(-2);
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;
    }, 1000);
}


function stopTimer() {
    clearInterval(timer);
}

function resetTime() {
    document.getElementById("timer").innerHTML = "00:00";
    time = 0;
    timerOn = false;
    clearInterval(timer);
}

// Score
var score = 0;
var scoreKeeper = document.getElementById("current-score");
var totalScore = document.getElementById("total-score");
var timeBonus = document.getElementById("time-bonus");

//Gives current score and calculates totalScore
function currentScore() {
    score = score + 100;
    scoreKeeper.innerHTML = score;

    if (time >= 56) {
        totalScore.innerHTML = score * 1;
        timeBonus.innerHTML = "x1";
    } else if (time >= 46 && time <= 55) {
        totalScore.innerHTML = score * 1.3;
        timeBonus.innerHTML = "x1.3";
    } else if (time >= 36 && time <= 45) {
        totalScore.innerHTML = score * 1.5;
        timeBonus.innerHTML = "x1.5";
    } else if (time >= 26 && time <= 35) {
        totalScore.innerHTML = score * 1.7;
        timeBonus.innerHTML = "x1.7";
    } else if (time >= 0 && time <= 25) {
        totalScore.innerHTML = score * 2;
        timeBonus.innerHTML = "x2";
    }

}

function resetScore() {
    if (scoreKeeper !== "0") {
        score = 0;
        scoreKeeper.innerHTML = "0";
    }
}

var match = 0;
var matchesMade = document.getElementById("matches-made");

function matchCounter() {
    match++;
    matchesMade.innerHTML = match;

    if (match == 8) {

        var timeFinished = document.getElementById("timer").innerHTML;
        var completeMatches = document.getElementById("matches-made").innerHTML;

        document.getElementById("time-taken").innerHTML = timeFinished;
        document.getElementById("matches-completed").innerHTML = completeMatches;
        document.getElementById("game-completed-overlay").style.display = "block";
        stopTimer();
    }
}

function resetMatches() {
    if (matchesMade !== "0") {
        match = 0;
        matchesMade.innerHTML = "0";
    }
}