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



## TEsting the game
|Test | How | Result | Fix |
|-----|-----| -------|-----|
| Card flip  | Click on one of the cards | The card did not flip over   |     |
| Start timer when card is clicked  |   |    |             |
| Match made  |   |    |             |
| Score  |   |    |             |
| Reshuffle button  |   |    |             |
| Score reset |   |    |             |
| Time reset  |   |    |             |
| Matches reset |   |    |             |
| Score multiplier  |   |    |             |
| Incorrect match  |   |    |             |
| Correct match  |   |    |             |
| Game complete  |   |    |             |
|   |   |    |             |
| Card flip  |   |    |             |
