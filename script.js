let colors = ["Red", "Green", "Blue"];
let pickedColor = "";

function startGame() {
  // Randomly pick a color
  let randomIndex = Math.floor(Math.random() * colors.length);
  pickedColor = colors[randomIndex];
  document.getElementById("result").textContent = "Guess the color!";
}

function makeGuess(userGuess) {
  if (userGuess === pickedColor) {
    document.getElementById("result").textContent = "🎉 You Win! Correct color: " + pickedColor;
  } else {
    document.getElementById("result").textContent = "❌ Wrong! Try again.";
  }
}

// Start game when page loads
startGame();
