const cards = document.querySelectorAll('.card');

var cardFlipped = false;
var firstCard;
var secondCard;
var lockBoard = false;


/* Card flip function */
function flipCard() {
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

// Get the container element
//var btnContainer = document.getElementById("difficulty-settings");

// Get all buttons with class="difficulty-button" inside the container
var btns = document.getElementsByClassName("difficulty-button");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

cards.forEach(card => card.addEventListener('click', flipCard));