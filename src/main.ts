import shuffle from "./shuffler";
import "./style.scss";

var app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `<span id="score"></span><div id="game"></div><div id="control">Hi</div>`;

var game = document.querySelector<HTMLDivElement>("#game")!;
var control = document.querySelector<HTMLDivElement>("#control")!;
control.innerHTML = `<button id="reset">Reset</button>`;

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
  setScoreDisplay();
}

gameData.numbers = gameData.numbers || [];
function setNumbers(numbers: number[]) {
  gameData.numbers = numbers;
  saveToLocalStorage();
}

gameData.nextNumber = gameData.nextNumber || 1;
function goToNextNumber() {
  gameData.nextNumber++;
  saveToLocalStorage();
}

// Define your game functions here

function setScoreDisplay() {
  const scoreDisplay = document.querySelector<HTMLDivElement>("#score")!;
  scoreDisplay.innerText = gameData.score.toString();
}

function clickOnNumber(clickedNumber: number) {
  if (clickedNumber === gameData.nextNumber) {
    goToNextNumber();
    setScore(gameData.score + 1);
    gameData.nextNumber == 11 && continueGame();
  } else {
    setScore(gameData.score - 1);
  }
}

// Function for reseting the game
function resetGame() {
  gameData.nextNumber = 1;
  setScore(0);
  setScoreDisplay();
  initGame();
}

function continueGame() {
  gameData.nextNumber = 1;
  initGame();
}

document.querySelector("#reset")!.addEventListener("click", resetGame);
// Event handler for the counter increment button
function clickedNumberButton(e: MouseEvent) {
  clickOnNumber(parseInt((e.target as HTMLButtonElement).innerHTML));
}

function initGame() {
  // Clean up the game if it was already initialized (e. g. if you have multiple levels)
  cleanUpGame();
  setScoreDisplay();

  // Inject the game HTML
  game.innerHTML = `<p id='numberButtons'></p>`;

  // Generate the numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  setNumbers(shuffle(numbers));
  gameData.nextNumber = 1;

  const numberButtons =
    document.querySelector<HTMLDivElement>("#numberButtons")!;

  gameData.numbers.map((num: number) => {
    let element = document.createElement("button");
    element.innerHTML = num.toString();
    element.addEventListener("click", clickedNumberButton);
    numberButtons.appendChild(element);
  });
}

function cleanUpGame() {
  // Remove event listeners from the game elements
  game.innerHTML = `<p id="score" >${gameData.score}</p>`;
  //document.querySelector("#reset")!.removeEventListener("click", resetGame);
}

// Initialize the game (you should keep this)
initGame();
