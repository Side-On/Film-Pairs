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

function checkMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return;
    }
    unFlipCards();

}
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
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

function resetBoard() {
    [cardFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

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

// Function to add active status to the difficulty button
var buttons = document.getElementsByClassName("difficulty-button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
/*
let gameContainer = document.querySelector("#game-container");
*/
function restartGame() {
    location.reload();
}

cards.forEach(card => card.addEventListener('click', flipCard));