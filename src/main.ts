import shuffle from "./shuffler";
import "./style.scss";

const app = document.querySelector<HTMLDivElement>("#app")!;

function saveToLocalStorage() {
  localStorage.setItem("gameData", JSON.stringify(gameData));
}

var gameData = JSON.parse(localStorage.getItem("gameData") || "{}");

/*
Everything below this line is just boilerplate code to make the game work.
You can change it as you wish, but I recommend to keep the basic structure.
There is also another file called "style.scss" that you can use to style the app.
You can also import other files to make the code more readable.
*/

// Define your variables and setters here

gameData.score = gameData.score || 0;
function setScore(score: number) {
  gameData.score = score;
  saveToLocalStorage();
}

gameData.numbers = gameData.numbers || [];
function setNumbers(numbers: number[]) {
  gameData.numbers = numbers;
  saveToLocalStorage();
}

gameData.currentPosition = gameData.currentPosition || 0;
function nextNumber() {
  gameData.currentPosition++;
  saveToLocalStorage();
}

// Define your game functions here

// Update the counter display
function clickOnNumber(clickedNumber: number) {
  if (clickedNumber === gameData.numbers[gameData.currentPosition]) {
    nextNumber();
    setScore(gameData.score + 1);
  } else {
    setScore(gameData.score - 1);
  }
}

// Event handler for the counter increment button
function clickedNumberButton(e: MouseEvent) {
  clickOnNumber(parseInt(e.target || 0));
}

function initGame() {
  // Clean up the game if it was already initialized (e. g. if you have multiple levels)
  cleanUpGame();

  // Inject the game HTML
  app.innerHTML = "<p id='numberButtons'></p>";

  // Generate the numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(shuffle(numbers));

  const numberButtons =
    document.querySelector<HTMLDivElement>("#numberButtons")!;

  gameData.numbers.map((num: number) => {
    let element = document.createElement("button");
    element.addEventListener("click", clickedNumberButton);
    numberButtons.appendChild(element);
  });
}

function cleanUpGame() {
  // Remove event listeners from the game elements
}

// Initialize the game (you should keep this)
initGame();
