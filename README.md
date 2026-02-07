#  Hangman Game

A modern **Hangman game** inspired by the **Lego universe**, built using core web technologies with a strong focus on interactivity, playful visuals, and a retro gaming vibe.

---

##  Demo Video

> https://github.com/user-attachments/assets/dd676268-c21c-4d58-a667-10e6eca079af

---

##  Features

- **Multiple Categories**  
  The game includes **6 diverse word categories**:
  -  Animals  
  -  Countries  
  -  Programming  
  -  Fruits  
  -  Space  
  -  Jobs  

- **Hangman Progression System**  
  Custom hangman graphics that appear **stage by stage** with every wrong guess (6 stages total).

- **Interactive Keyboard**  
  Full support for:
  - On-screen keyboard (mouse clicks)
  - Physical keyboard input

- **Result Screens**  
  Custom end-game screens:
  -  **Win Screen** — *You Did It!*  
  -  **Loss Screen** — *Game Over*  
  Each screen includes expressive emojis that match the game mood.

---

##  Tech Stack

- **HTML**
  - Structured all pages, containers, and game elements.

- **CSS**
  - Designed Lego-style category cards using `box-shadow` to simulate a **3D brick effect**.
  - Integrated custom typography (**SuperDario Font**) to enhance the retro gaming feel.

- **JavaScript (ES5)**
  - Implemented the core game logic.
  - Generated random words based on the selected category.
  - Managed DOM manipulation to dynamically update:
    - Hangman images  
    - Letters  
    - Game results  

---

##  Project Structure

```text
├── assets/
│   ├── fonts/         # Game typography
│   ├── images/        # Category images & hangman stages
│   └── styles/        # CSS stylesheets
├── scripts/
│   └── script.js      # Game engine & logic
└── index.html         # Main game entry point
