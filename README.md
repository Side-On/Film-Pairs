
# Milestone Project 2

## Interactive Frontend Development 

### Film Trivia Memory Card Game

This project is a memory card game for users to play. The rule of the game is to match two cards which are linked via films quote and a 
screenshot of the film. The user clicks on a backwards facing card to reveal the image or quote underneath, this card will stay visible. 

They then must click on another backwards facing card in an attempt to match it. If the match is correct both cards will stay visible.

If the match is incorrect, both cards will turn back over and the user must have another go. This process repeats until all possible matches are made. 

Once all matches are made, a new screen will appear showing the player’s final score. 

#### User Experience

As this game has been remade in multiple different styles on a variety of topics and themes, I wanted to create a version which also incorporates
film trivia as well. I have added instructions on the left of the card container on the landing page of the website, so the user will know the rules of the game on their first visit.

The game is kept simple by only having up to eight possible matches. To increase the challenge and add a competitive element I have added a timer located above the card container. 
This will start when the player turns over their first card. I have notified the player of this timer so they are aware of the multiplier.

At the end of the game the user will be shown another screen detailed how many matches they have made, out of a possible 8, as well as their time taken and what score multiplier they received. 
There is a button for the user to reset the game which will also reset all of their scores. matches and time.


##### User 1

>This is the first time I have visited this website and I don't know what it is.

![User Story 1](/screenshots/user-1.png)

This is the first and only page the user sees. The design idea was to keep everything as simple as possible, so all of the attention is on the game itself.
The heading tells the user exactly what the website it, that is it a memory game.

##### User 2

>I have never played a card matching game before and I don't know the rules.

![User Story 2](/screenshots/user-2.png)

This is addressed by the simple layout of the landing page. The instructions are displayed immediately on the left-hand side of the page. Where the user is
most likely to start reading from. The instructions are written in a simple way and not using complex language to that a wide range of age groups can play.

##### User 3

>I have played a card matching game and I want to try and complete the one on this website.

![User Story 3](/screenshots/user-3.png)

This user can easily begin a game by clicking on any of the cards. This will then start the game and the timer. If the user feel likes that have wasted time trying 
to work out what to do without reading the instructions they can then restart the game using the Shuffle the Cards button.

##### User 4

>I have played a card matching game but I am looking for something that is more of a challenge compared to just matching two pairs.

![User Story 4](/screenshots/user-4.png)

This game has been created from mixing both trivia and card matching games. The idea is to bring them both together with both very famous and also 
specific movie quotes. 


##### User 5

>I have played this game before and I remember that my previous score was 800, I want to be able to try and beat that score.

![User Story 5](/screenshots/user-5.png)

The user can easily see their current score throughout the game. They are also presented with a screen at the end of the game to tell them
what their final score is, along with their score multiplier bonus. 

##### User 6

>I have beaten the games times within different time limits but want to try and get a better time.

![User Story 6](/screenshots/user-6.png)

The overall time taken for the user to finish the game is displayed on the Game Completed screen. On the first screen the user is made aware 
of a score multiplier bonus they can receive if they finish in a faster time. This encourages users to keep coming back to beat their best score.

##### User 7 

>I have completed the game and went to restart and have another go

![User Story 7](/screenshots/user-7.png)

Once the game is completed, the user is shown a screen with all of their achievements, including: 
- Matches made
- Time completed
- Score
- Total Score

#### Wireframe Designs

The following wireframe designs were created before the project began. They were a great way to experiment with different designs and 
layouts for the landing page and the card game layout. The final design is shown below to keep the UX as simple as possible to make it 
accessible and useable by a wide range of people of all ages. 

![Landing page wireframe](/wireframes/landing-page-wireframe.png)

Instructions are shown on the left-hand sign, making them the most likely to be read first. Large fonts are given to the 
headings of each paragraph to draw attention on first visit to the page. The colours are keeping with the black and gold theme
I had in mind at the start of the project to go with the Hollywood glamourous theme. The moving background it subtle enough so that
it doesn't draw attention away from any of the instructions or cards themselves. 

The instructions are written simply with no unnecessarily complicated language so that anybody can go to the site and understand the 
game. The headers are purposefully made larger than the text underneath to group sections together.


![Game completed wireframe](/wireframes/completed-game-wireframe.png)


#### Features

This is a simple card memory trivia game. There is only one webpage created to contain both the instructions and game itself. The design is intentionally made this way because the user 
will benefit from being able to have everything given to them on one page. There are no requirement to have more than one page because the purpose of this website is the 
memory game only. 

When the user successfully matches a pair of cards, both of those cards will stay turned over. If two cards aren't matched, they will both turn over back to their original 
state. This process continues until all pairs are matched.

The cards were designed by myself. I googled images of the films I wanted to use. A list of all of the websites I got the images from are detailed below, along with 
all other sources. I then used Microsoft Publisher to create the card design. I wanted to have a black/dark and gold theme throughout. These colours were chosen to give a 
Oscar Awards colour palette. The card backs themselves are coloured in the same black and gold theme, with stars featured on each card to represent or remind the user 
of Celebrity Stars, or the starts on the Hollywood Walk of Fame, keeping within the movie theme. The backs of the cards are identical for obvious reasons, to ensure that the user 
isn't able to tell each card apart.

The background is as well kept a dark colour, along with twinkling stars and moving gold/red clouds. 
This wasn't created by myself, I have given the original source link at the bottom of this README file, but I felt that it suited the game perfectly with the colour/stars theme.

In the original designs there was only a 'Time' and 'Score' tracker. In the final version I have also included how many matches have been made to let the user see at a glance 
how many they have successfully matched, instead of having to count them manually. 

The 'Time' tracker is initiated when the user clicks on the first card. It then counts up until the user has matched all of the cards. At the end of the game another 
screen (overlay) appears in front of the webpage to give the user further information. This includes the Total Time taken to complete the game. As well as: how many matches
were made, what score multiplier they received based on their time, and a button to restart the card and reshuffle the cards.

#### Features Left to Implement

Unfortunately, due to time restrictions to complete the project, I was unable to create a feature that allows the user to choose a difficulty setting. However, I do plan to 
add this feature in the future. Once the button is clicked, the cards shown on the screen will increase and decrease depending on the setting chosen.
The feature will give the user three options: 
Easy - 8 cards on display making four possible matches.
Medium - 12 cards on display making six possible matches.
Hard - 16 cards making eight possible matches.

These settings would be displayed underneath the instructions and respond to the user clicking on each one. This would also allow the user to earn a bigger score 
multiplier, Easy being the lowest reward and Hard being the highest.

There will also be a 'Top Score' feature, showing the user their previous top score event after exiting the game. This will be displayed above the cards, as well as on the 
game completed screen. This feature will to introduced to encourage the users to return to try and beat their previous score.

#### Technologies used

- HTML5
- CSS3
- JavaScript
- GitHub
- GitPod
- Balsamiq
- Microsoft Publisher
- Paint
- Google fonts
- Slack
- w3 Validator
- Jigsaw
- Jshint

#### Testing
Please find this on the testing.md document.


#### Deployment

##### GitHub Pages
The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the GitHub Repository.
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section, copy the link shown.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

##### Making a Local Clone
1. Log in to GitHub and locate the GitHub Repository.
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3.
7. $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
8. Press Enter. Your local clone will be created.


#### Acknowledgements

- Stars background - https://codepen.io/stealy/pen/zYxXpza

- Card flip code - https://codepen.io/jacoboakley/pen/ZpRbqB

- Various snippets of code - https://w3schools.com


##### Images for the cards

- Terminator pic - https://www.pinterest.co.uk/pin/214906213447249490/

- 300 pic - https://soundcloud.com/crib_music/this-is-sparta

- Finding Nemo - https://vaei.vai.org/2019/08/06/just-keep-swimming/

- The Hunger Games - https://www.etonline.com/news/177718_7_hunger_games_prequels_we_would_watch

- Spider-Man - https://theconversation.com/spider-man-homecoming-spins-a-web-of-fact-and-fantasy-79900

- Zoolander - https://8tracks.com/lamaha/what-is-this-a-center-for-ants

- Elf - https://www.msn.com/en-us/foodanddrink/foodnews/you-sit-on-a-throne-of-lies-if-youre-not-psyched-about-this-buddy-the-elf-board-game/ss-BB19vhvo

- Quotes ideas - https://www.thrillist.com/entertainment/nation/best-movie-quotes



