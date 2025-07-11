# Web Development Project 2 - _Football Trivia_

Submitted by: **Sarab Aftab**

This web app: **displays a set of football trivia flashcards that test users' knowledge of players like Messi and Ronaldo, as well as general football history. Users can flip each card to view the answer and click "Next" to view a random new card.**

Time spent: **4 hours spent in total**

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed
  - [x] A short description of the card set is displayed
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

- [x] Implemented 3D flip animation so text remains readable when flipped.
- [x] Refactored flashcard into front/back layout for cleaner styling and interaction.

## Video Walkthrough

Here's a walkthrough of implemented required features:

![App Demo](./demo.gif)

<!-- Replace this with whatever GIF tool you used! -->

GIF created with freeconvert.com

## Notes

Describe any challenges encountered while building the app.

- I initially applied the flip transform directly on the entire card, which made the text appear mirrored. I resolved it by creating separate front and back sides with `backface-visibility: hidden`.

## License

    Copyright 2025 Sarab Aftab

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
