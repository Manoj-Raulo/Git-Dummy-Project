const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  attempts++;

  if (userGuess < 1 || userGuess > 100) {
    message.textContent = '⛔ Please enter a number between 1 and 100.';
  } else if (userGuess < secretNumber) {
    message.textContent = '📉 Too low! Try again.';
  } else if (userGuess > secretNumber) {
    message.textContent = '📈 Too high! Try again.';
  } else {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
  }
}
