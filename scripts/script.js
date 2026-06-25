var wordList = {
    animals: ["LION", "ELEPHANT", "GIRAFFE", "PENGUIN", "KANGAROO", "HAMSTER", "RABBIT", "TIGER", "BEAR", "CAT"],
    countries: ["EGYPT", "BRAZIL", "JAPAN", "CANADA", "FRANCE", "GERMANY", "MEXICO", "AFGHANISTAN", "GREECE", "CHINA"],
    programming: ["JAVASCRIPT", "PYTHON", "HTML", "CSS", "GO", "SQL", "RUBY", "SWIFT", "C", "R"],
    fruits: ["APPLE", "BANANA", "STRAWBERRY", "ORANGE", "PINEAPPLE", "WATERMELON", "MANGO", "BERRY", "KIWI", "GRAPE"],
    space: ["PLANET", "GALAXY", "ASTRONAUT", "STARS", "COMET", "UNIVERSE", "ROCKET", "MARS", "EARTH", "COSMOS"],
    jobs: ["Driver", "Engineer", "DOCTOR", "SAILOR", "TAILOR", "FARMER", "TEACHER", "LAWYER", "CHEF", "POLICE"]
};
var selectedCategory = document.querySelector(".categories-page .categories");
//console.log(Object.keys(wordList));
var categories = Object.keys(wordList);
//console.log(categories[0]);

for(var k = 0; k < 6; k++){
    var card = document.createElement("button");

    card.classList.add("card");
    card.addEventListener("click", chooseCategory);

    var cardTitle = document.createElement("h3");
    cardTitle.textContent = categories[k];
    var cardImg = document.createElement("img");
    cardImg.src = `../assets/images/category-${k}.svg`;
    cardImg.alt = "image category";
    cardImg.width = "200";
    card.insertAdjacentElement("beforeend", cardTitle);
    card.insertAdjacentElement("beforeend", cardImg);
    selectedCategory.insertAdjacentElement("beforeend", card);
}

//choosing category and game logic
var currCategory, currWord, wordGusses;
function chooseCategory(){
    currCategory = this.children[0].innerHTML;
    console.log(currCategory);
    var randomIdx = Math.floor(Math.random() * 10);
    currWord = wordList[currCategory][randomIdx];
    //console.log(wordList[currCategory])
    console.log(currWord);

    document.querySelector(".word-category").textContent = currCategory;
    wordGusses = document.querySelector(".word-guesses");
    wordGusses.innerHTML = "";
    for(var j = 0; j < currWord.length; j++){
        var wordGussesLetter = document.createElement("li");
        wordGussesLetter.classList.add("letter-guesses");
        wordGusses.insertAdjacentElement("beforeend", wordGussesLetter);
    }

    selectedCategory.parentElement.style.display = "none";
    selectedCategory.parentElement.parentElement.style.display = "none";

    // Create Keyboard
    var keyboard = document.querySelector(".keyboard");
    keyboard.innerHTML = "";
    for(var i = 65; i <= 90; i++){
        var keyboardBtn = document.createElement("button");
        keyboardBtn.textContent = String.fromCharCode(i);
        keyboardBtn.id = String.fromCharCode(i);
        //console.log(keyboardBtn.id);
        keyboardBtn.addEventListener("click", clickKeyboardBtn);
        keyboard.insertAdjacentElement("beforeend", keyboardBtn);
        //console.log(String.fromCharCode(i));
    }
    console.log(keyboard);
    
    var hangmanImg = document.querySelector(".section2 img");
    var guessesLeft = document.querySelector(".guesses-left");//13
    var currGussesLeft = 6;
    guessesLeft.textContent = "Gusses Left: " + currGussesLeft + " / 6";
    hangmanImg.src = `../assets/images/hangman-${6 - currGussesLeft}.svg`;
    var result = document.querySelector(".result-page");
    result.children[4].addEventListener("click", function(){
        document.querySelector(".result-page").style.display = "none";
        document.querySelector(".categories-page").style.display = "block";
    });
    var cntr = 0

    // Handle screen keyboard clicks
    function clickKeyboardBtn(){
        this.disabled = true;
        var letterIdx = -1;
        var flag = false, flag2 =false;
        while((letterIdx = currWord.indexOf(this.innerHTML, letterIdx + 1)) !== -1){
            wordGusses.children[letterIdx].textContent = this.innerHTML;
            wordGusses.children[letterIdx].classList.add("gussed");
            flag = true;
            cntr++;
            if(wordGusses.children.length === cntr){
                flag2 = true;
            }
        }
        if(!flag){
            if(this.innerHTML === 'A' || this.innerHTML === 'E' || this.innerHTML === 'I' || this.innerHTML === 'O' || this.innerHTML === 'U'){
                console.log("Do nothing");
            }
            else{
                currGussesLeft--;
                console.log("Current Gusses Left: " + currGussesLeft);
                guessesLeft.textContent = "Gusses Left: " + currGussesLeft + " / 6";
                hangmanImg.src = `../assets/images/hangman-${6 - currGussesLeft}.svg`;
            }
        }

        if(flag2){
            console.log("you did it");
            console.log(result.children)
            result.children[0].src = "../assets/images/you-did-it.png";
            result.children[2].src = "../assets/images/congrats.png"
            result.children[2].alt="congrats";
            console.log(result.children[2]);
            result.children[3].textContent = "The word is: " + currWord;
            result.parentElement.style.display = "block";
            result.style.display = "block";
        }
        else if(currGussesLeft === 0){
            console.log("game over");
            console.log(result.children)
            result.children[0].src = "../assets/images/game-over.png";
            result.children[2].src = "../assets/images/sad.png";
            result.children[2].alt="game over";
            console.log(result.children[3]);
            result.children[3].textContent = "The word is: " + currWord;
            result.parentElement.style.display = "block";
            result.style.display = "block";
        }
    }

    // Handle physical keyboard clicks
    document.addEventListener("keydown", function(e){
        var keyboardCode = e.key.toUpperCase();
        if(keyboardCode.charCodeAt(0) >= 65 && keyboardCode.charCodeAt(0) <= 90){
            //console.log("Button: ", keyboardCode.charCodeAt(0));
            document.getElementById(keyboardCode).click();
        }
    });
}

//Start the game
var start = document.querySelector(".start-page button");
start.addEventListener("click", function(){
    document.querySelector(".categories-page").style.display = "block";
    document.querySelector(".start-page").style.display = "none";
});

document.querySelector(".home").addEventListener("click", function(){
    document.querySelector(".pages-container").style.display = "flex";
    document.querySelector(".start-page").style.display = "block";
});