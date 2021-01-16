const cards = document.querySelectorAll('.card');  

var cardFlipped = false;
var firstCard, secondCard;

/* Card flip function */
    function flipCard() {
        this.classList.add('flip')

        if (!cardFlipped) {
            cardFlipped = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        cardFlipped = false;

        checkForMatch();
    }

    function checkForMatch() {
        if (firstCard.dataset.framework == secondCard.dataset.framework) {
            disableCards();
            return;
        }
        unFlipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click',flipCard);
    }

function unflipCards() {
   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
   }, 1500);
 }


 function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}
cards.forEach(card => card.addEventListener('click', flipCard));





