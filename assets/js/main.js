const cards = document.querySelectorAll('.card');

var cardFlipped = false;
var firstCard;
var secondCard;
var lockBoard = false;

/* Card flip function */
function flipCard() {
    if(lockBoard) return;

    this.classList.add('flip');

    if (!cardFlipped) {
        cardFlipped = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    cardFlipped = false;
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
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
    }, 1500);
}


function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}
cards.forEach(card => card.addEventListener('click', flipCard));

function lockBoard() {

}



