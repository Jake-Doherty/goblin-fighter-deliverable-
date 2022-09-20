/* Imports */

/* Get DOM Elements */
const harryHp = document.getElementById('hphp-span');
const playerImage = document.getElementById('player-image');
const battleMessage = document.getElementById('battle-result-message');
const creaturesCrushed = document.getElementById('creatures-crushed');
const score = document.getElementById('score');

/* State */
let playerHealth = 100;
let result = 'Click on a creature to get started!';
let totalCreaturesCrushed = 5;
let playerScore = 10000;

/* Events */

/* Display Functions */
function displayScoreboard() {
    creaturesCrushed.textContent = totalCreaturesCrushed;
    score.textContent = playerScore;
}

function displayResults() {
    battleMessage.textContent = result;
}

function displayPlayer() {
    harryHp.textContent = playerHealth;
    if (playerHealth < 1) {
        playerImage.src = 'assets/ghost.png';
    } else {
        playerImage.src = 'assets/harry-potter-round.png';
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
displayResults();
displayScoreboard();
