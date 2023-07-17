# Flashcard-O-Matic
This is a capstone project I completed for Thinkful's Engineering Flex program. It allows a user to create flashcards for any subject and then study them to prepare for an exam.
The app is flexible - the user can define and add their own decks and cards. It also has some built-in quality control - you need a minimum of 3 cards in order to study a deck, so it makes sure the user is studying more than one concept, no matter what their level of expertise is.

I used a flow chart to lay out the functionality of the app.

![image](https://github.com/PattyTracy/Flashcard-O-Matic/assets/123675803/12c4e6b2-e374-4cd0-bb9b-e46ddf8eb289)

There are several different screens:

* The View screen allows the user to see at a glance what cards are in the deck. It shows both the front and back of each card.
![image](https://github.com/PattyTracy/Flashcard-O-Matic/assets/123675803/db524486-a104-4e0c-8c8f-68587cfc6bdb)
  
* The Study screen dives into a deck and shows the front side of the first card, a study problem. Clicking the "Flip" button shows the back of the card, the solution to the problem. The back view includes a "Next" button which goes to the next card until all cards have been studied. Then the user has the option to repeat the deck, or go to the home screen and choose another one.
![image](https://github.com/PattyTracy/Flashcard-O-Matic/assets/123675803/fc89d38c-69e2-4150-a05c-aad618ad0c01)
![image](https://github.com/PattyTracy/Flashcard-O-Matic/assets/123675803/154ba639-a025-4eb3-95a5-36677e03076d)

* Several screens include the option to edit a card, create a new card for a deck, and even create a new deck with new cards.
![image](https://github.com/PattyTracy/Flashcard-O-Matic/assets/123675803/bff0eef7-fd9a-4309-805e-2958717c3b19)

* Cards and decks can also be deleted, making the app fully customizable for each user.
![image](https://github.com/PattyTracy/Flashcard-O-Matic/assets/123675803/df52c070-9e95-47b7-bdf1-53d19d5689ca)
  
React's capabilities for creating a front-end application are perfectly suited to this project. JSX allows all of the functionality to work smoothly, and a bit of CSS styling makes the flashcards easy to read. 
