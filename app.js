/* Imports */

/* Get DOM Elements */
const harryHp = document.getElementById('hphp-span');
const playerImage = document.getElementById('player-image');

/* State */
let playerHealth = 100;

/* Events */

/* Display Functions */
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
