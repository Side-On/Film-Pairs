const cards = document.querySelectorAll('.card');  
    
/* Card flip function */
    function flipCard() {
        this.classList.toggle('flip')
    }

    cards.forEach(card => card.addEventListener('click', flipCard));
    var cardFlipped = false;
    var firstCard, secondCard;




