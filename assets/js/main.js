var cards = document.querySelectorAll(".card");

var firstCard, secondCard;

/*function shuffle(array) {
    currentIndex = array.length, temporaryValue, randonIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}*/

(function shuffle() {
    cards.forEach(card => {
        var randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
})

/* Card flip function */
function flip(event) {
    var element = event.currentTarget;
    if (element.className === "card") {
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        }
        else {
            element.style.transform = "rotateY(180deg)";
        }
    }
};

