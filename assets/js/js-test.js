/*jshint esversion: 6 */
var cards = document.querySelectorAll(".card");
var cardFlipped = false;
var firstCard;
var secondCard;
var lockCards = false;
var timerOn = false;

/* Card flip function */

function startGame() {
    var i;
    for (i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains("flip")) {
            cards[i].classList.remove("flip");
        }
    }
    //This adds a delay between the cards being flipped back to their original state so the user doesn't see that cards being moved halfway
    //through the flip
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
    //Starts the timer when the first card is flipped
    if (timerOn === false) {
        startTimer();
        timerOn = true;
    }
    //Stop the first card flipping over if it is flipped again
    if (lockCards) return;
    if (this === firstCard) return;
    //Adds a class that rotates the clicked card
    this.classList.add("flip");

    if (!cardFlipped) {
        cardFlipped = true;
        firstCard = this;
        return;
    }
    //Creates the second card that is clicked
    secondCard = this;
    lockCards = true;
    //Initiates the checkMatch function to see if the cards are the same
    checkMatch();
}

//This is to add an event listener for any cards that are clicked on
cards.forEach(card => card.addEventListener("click", flipCard));

//Check if the selected cards match
function checkMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        matchCounter();
        currentScore();
        return;

    }
    //if they are not the same, the cards are then flipped back over
    unFlipCards();

}

//Disables the cards that have been selected so they cannot be clicked again
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

//This function is for when a new game is started and the previously matches cards cannot be clicked again
function enableCards() {
    cards.forEach(card => card.addEventListener("click", flipCard));
}


//If the two cards clicked aren't the same, they will be flipped back over
function unFlipCards() {

    lockCards = true;

    setTimeout(function() {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
        lockCards = false;
    }, 1500);
}

//Resets the board so that the clicked cards can be clicked again, reset the variables back to null
function resetBoard() {
    [cardFlipped, lockCards] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//Shuffles the cards to random position everytime the page refreshed or Restart button is pressed
function shuffle() {
    cards.forEach(card => {
        var shuffleCards = Math.floor(Math.random() * 16);
        card.style.order = shuffleCards;
    });
}



//Timer Function taken from Stack Overflow
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

//This function stops the timer when the user completes the game
function stopTimer() {
    clearInterval(timer);
}

//This function resets the timer when the user presses either the Shuffle the Cards button or the close and play again
function resetTime() {
    document.getElementById("timer").innerHTML = "00:00";
    time = 0;
    timerOn = false;
    //Resets the timer variable to 0
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
    //These statements determine the score multiplier the player will get at the end of the game
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

//This function resets the score when the user presses either the Shuffle the Cards button or the close and play again
function resetScore() {
    if (scoreKeeper !== "0") {
        score = 0;
        scoreKeeper.innerHTML = "0";
    }
}


//Checks how many matches have been made when the user is playing
var match = 0;
var matchesMade = document.getElementById("matches-made");

function matchCounter() {
    match++;
    matchesMade.innerHTML = match;
    //Sets the amount of matches needed to end the game
    if (match == 8) {

        var timeFinished = document.getElementById("timer").innerHTML;
        var completeMatches = document.getElementById("matches-made").innerHTML;

        document.getElementById("time-taken").innerHTML = timeFinished;
        document.getElementById("matches-completed").innerHTML = completeMatches;
        document.getElementById("game-completed-overlay").style.display = "block";
        //Stops the timer when all the matches are made
        stopTimer();
    }
}
//This function resets the matches when the user presses either the Shuffle the Cards button or the close and play again
function resetMatches() {
    if (matchesMade !== "0") {
        match = 0;
        matchesMade.innerHTML = "0";
    }
}