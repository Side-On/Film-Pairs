# Testing

These test were all carried out throughout the design and creation process. 
It is presented in a table to clearly show what was being tested, how it was being testing, what the result was and what fix was needed.

## Testing the webpage

|Test | How | Result | Fix | Code used |
|-----|-----|--------|-----|-----------|
| Cards to sit ontop of each other  | Check the images are correctly placed | The cards were above and below each other   | Added code to the CSS so that the card sit on top| .card-front, .card-back {position: absolute;} |
| Content is shown on the left  |  Look at where the content is on the page | The content was in the middle of the screen, pushing the cards down   | Set position of the content to the left by using | .welcome {float: left;}|
| Game info   | Look at how the game info is layed out above the cards  | The game info was sat one on top of the other, pushing the cards down   | Add CSS code so that the span elements sit next to each other | .game-info-container {display: flex; justify-content: space-between;}|
| Screen resolution  | Change the screen resolution   | The cards and content squashed together instead of the cards moving below   |     Added @media rule to CSS to ensure the content is correctly displayed | @media (max-width:990px;) {.welcome {width: 100%;}} |
| Header font size  | Check the size of the headers compared to the paragraphs  | The header were larger than the paragraphs, however there was too much of a difference   | Added CSS rule to increase the paragraph sizes so that they weren't small on the page| body {font-size: 1.2rem;}|
| Background animation  | Check the the code used for the background works  | The clouds and stars were working correctly, however there were errors on the console in Chrome indication that they were coming from an insecure http server   | I downloaded the images and put them into the directory so that they were being taken from there instead| N/A |
| Shuffle the Cards button | Check that the button was working correctly  | The button worked correctly after the JavaScript function was written, see below for testing and results | N/A  |
| Card images | Check that the cards were displaying properly  | Some of the cards were not loading | Added alt text to the cards in case the cards did not load (this appeared to be occasional and with no clear reason). Checked the file location and it was fine | N/A |
| Card size | Change resolution |  The cards were being pushed against each other  | Changed @media rule so that the cards changed size (but stayed in the correct ratio)| @media (max-width:705px) {.card {height: 90px; width: 75px;}} |



## Testing the game
|Test | How | Result | Fix | Code Used |
|-----|-----| -------|-----| --------- |
| Card flip | Click on a card | The card did not flip over | The card was not correctly being picked up with document.getelementbyclassname| I replaced it with the variable: var cards = document.querySelectorAll(".card");|
| Start timer | Click on a card  |  The timer didn't start  | The timer function wasn't being called with the flipCard function | startTimer(); inside the flipCard() function |
| Match made |  Match a pair |  The match 0/8 didn't change  | The code wasn't recognising that a pair was matched. There was no dataset set within the card div | index.html: data-framework="terminator". JS: if (firstCard.dataset.framework === secondCard.dataset.framework) { matchCounter();}
| Score | Check score increases on pair match  | The score currently went up | N/A | N/A |
|Total Score | Check total score displated correctly | The total score stayed on "0" | The code was not recognising the timer and taking that into account with the final score due to calling on the wrong variable | if (time >= 56) {totalScore.innerHTML = score * 1; timeBonus.innerHTML = "x1"; }. This statement was used to give other time bonus based on the 'time' variable, not the 'timer' variable |
| Reshuffle button | Use reshuffle button  | The cards did reshuffle, but stayed face up | N/A | N/A |
|Card staying face up | Use reshuffle button  | The cards stayed face up | The issue was the flipCard() function wasn't being called on each individual card| var i;for (i = 0; i < cards.length; i++) {if (cards[i].classList.contains("flip")) {cards[i].classList.remove("flip");}} This made sure the function went through each card individually to check if it had the .flip class|
| Shuffle on page load | Reload the webpage | The cards were not shuffled | I realised I had not placed a function onto the page itself, itself of the JS file | var cards = document.querySelectorAll(".card"); cards.forEach(card => {var shuffleCards = Math.floor(Math.random() * 12);card.style.order = shuffleCards;}); |
| Score reset | Use reshuffle button  |  The score showed "0", but on next pair it increased to over the original amount | The score variable wasn't correctly resetting to 0 | if (scoreKeeper !== "0") {score = 0;scoreKeeper.innerHTML = "0";   |
| Time reset  | USe reshuffle button  |  Time reset to 00:00 but continued to count up  |  Used clearInterval function | clearInterval(timer); |
| Matches reset | Use reshuffle button  | Matches were reset correctly   | N/A | N/A |
| Score multiplier | Complete game | Based on the time completed, score multiplier correctly worked   |N/A | if (time >= 56) {totalScore.innerHTML = score * 1; timeBonus.innerHTML = "x1"; } else if (time >= 46 && time <= 55) {totalScore.innerHTML = score * 1.3; timeBonus.innerHTML = "x1.3"; |
| Incorrect match  | Match incorrect pair | Both cards flipped back over   | N/A             | N/A |
| Correct match  | Match correct pair | Both cards stayed flipped over    | N/A             | N/A |
| Game complete  | Match all correct pairs   | Game completed overlay displayed |  N/A            | 

## Validator test

### CSS 
![CSS Validator](/validators/css-validators.png)

Passed all tests without any errors. CSS text was then put through a CSS formatter - https://www.cleancss.com/css-beautify/

### HTML
![HTML Validator](/validators/html-validator-results.png)

Passed all tests without any errors. HTML text passed through HTML formatter - https://www.freeformatter.com/html-formatter.html

### JavaScript
![JavaScript](/validators/javascript-errors.png)
Failed with an unused variable restartGame. This was a variable created in the early stages and was incorporated into the reshuffle function. 
JavaScript then passed through a JavaScript formatter - 

