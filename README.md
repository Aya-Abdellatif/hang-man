# 🕹️ Hangman Game

A modern Hangman game project inspired by the **Lego** universe. This game was built using core web technologies with a focus on interactive user experience and engaging graphics.

## 📺 Demo Video

https://github.com/user-attachments/assets/4f3d2abb-9e11-46bd-a23b-dbc0009c3c5d


---

## 🚀 Features

* **Pixel Art Design:** A unique UI featuring pixelated graphics and Lego bricks.
* **Multiple Categories:** The game includes 6 diverse categories:
* 🐾 **Animals**
* 🌍 **Countries**
* 💻 **Programming**
* 🍎 **Fruits**
* 🚀 **Space**
* 💼 **Jobs**


* **Hangman Progression System:** Custom graphics that appear stage-by-stage with every wrong guess (6 stages).
* **Interactive Keyboard:** Full support for both on-screen mouse clicks and physical keyboard input.
* **Result Screens:** Custom "Win" (You Did It!) and "Loss" (Game Over) screens with mood-matching emojis.

---

## 🛠️ Tech Stack

* **HTML:** Structured the pages, containers, and game elements.
* **CSS:**
* Programmatically rendered category cards using `box-shadow` to simulate a 3D Lego brick effect.
* Integrated custom typography (SuperDario Font).


* **JavaScript (ES5):**
* Handled core Game Logic.
* Implemented random word generation based on the selected category.
* Managed DOM manipulation to update images, text, and results dynamically.



---

## 📂 Project Structure

```text
├── assets/
│   ├── fonts/         # Game typography
│   ├── images/        # Images for categories, and hangman stages
│   └── styles/        # CSS stylesheets
├── scripts/
│   └── script.js      # Game engine and logic
└── index.html         # Main game entry point

```

---

## 🎮 How to Play

1. Launch the game and click **Start**.
2. Select your favorite category from the yellow Lego bricks.
3. Guess the hidden word by choosing letters.
4. You have **6 attempts** before the hangman is complete.
5. After the game ends, click **Play Again** to try a new category.
