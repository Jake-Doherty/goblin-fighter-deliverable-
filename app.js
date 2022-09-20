/* Imports */

/* Get DOM Elements */
const harryHp = document.getElementById('hphp-span');
const playerImage = document.getElementById('player-image');
const battleMessage = document.getElementById('battle-result-message');

/* State */
let playerHealth = 100;
let result = 'Click on a creature to get started!';

/* Events */

/* Display Functions */
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
