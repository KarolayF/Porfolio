
let secretNumber;
let attempts;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const newGameButton = document.getElementById('newGameButton');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');


function startNewGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    guessInput.value = '';
    message.textContent = '';
    message.className = '';
    attemptsDisplay.textContent = 'Intentos: 0';
    guessInput.disabled = false;
    guessButton.disabled = false;
    guessInput.focus();
    console.log('Número secreto (para pruebas):', secretNumber);
}


function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    

    if (isNaN(userGuess)) {
        alert('Por favor ingresa un número entre 1 y 10');
        return;
    }
    

    if (userGuess < 1 || userGuess > 10) {
        alert('El número debe estar entre 1 y 10');
        guessInput.value = '';
        return;
    }
    
    attempts++;
    attemptsDisplay.textContent = `Intentos: ${attempts}`;
    

    if (userGuess === secretNumber) {
        message.textContent = `¡Felicitaciones! Adivinaste el número en ${attempts} ${attempts === 1 ? 'intento' : 'intentos'}`;
        message.className = 'success';
        guessInput.disabled = true;
        guessButton.disabled = true;
    } else if (userGuess < secretNumber) {
        message.textContent = 'El número secreto es mayor';
        message.className = 'error';
    } else {
        message.textContent = 'El número secreto es menor';
        message.className = 'error';
    }
    

    guessInput.value = '';
}


guessButton.addEventListener('click', checkGuess);
newGameButton.addEventListener('click', startNewGame);


guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

document.addEventListener('DOMContentLoaded', startNewGame);