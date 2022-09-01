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

gameData.counter = gameData.counter || 0;
function setCounter(value: number) {
  gameData.counter = value;
  saveToLocalStorage();
}

// Define your game functions here

// Update the counter display
function updateCounterDisplay() {
  document.querySelector<HTMLParagraphElement>("#counterDisplay")!.innerText =
    gameData.counter.toString();
}

// Event handler for the counter increment button
function clickedCounterIncrementButton() {
  setCounter(gameData.counter + 1);
  updateCounterDisplay();
}

function initGame() {
  // Clean up the game if it was already initialized (e. g. if you have multiple levels)
  cleanUpGame();

  // Inject the game HTML
  app.innerHTML =
    "<p id='counterDisplay'></p> <button id='counterIncrementButton'>Start</button>";

  // Add event listeners to the game elements
  document
    .querySelector<HTMLButtonElement>("#counterIncrementButton")!
    .addEventListener("click", clickedCounterIncrementButton);
  updateCounterDisplay();
}

function cleanUpGame() {
  // Remove event listeners from the game elements
  document
    .querySelector<HTMLButtonElement>("#counterIncrementButton")
    ?.removeEventListener("click", clickedCounterIncrementButton);
}

// Initialize the game (you should keep this)
initGame();
