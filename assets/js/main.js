const cards = document.querySelectorAll('.card');

var cardFlipped = false;
var firstCard;
var secondCard;
var lockBoard = false;

/* Card flip function */
function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return;

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

function unFlipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}

function resetBoard() {
[cardFlipped, lockBoard] = [false, false];
[firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));

