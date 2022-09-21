/* Imports */

import { renderCreature } from './render-creature.js';

/* Get DOM Elements */
const harryHp = document.getElementById('hphp-span');
const playerImage = document.getElementById('player-image');
const battleMessage = document.getElementById('battle-result-message');
const creaturesCrushed = document.getElementById('creatures-crushed');
const score = document.getElementById('score');
const creatureList = document.getElementById('creatures-list');

/* State */
let playerHealth = 100;
let result = 'Click on a creature to get started!';
let totalCreaturesCrushed = 5;
let playerScore = 10000;
let creatures = [
    { name: 'Norbert', type: 'dragon', hp: 6 },
    { name: 'Aragog', type: 'spider', hp: 5 },
    { name: 'Fenrir', type: 'werewolf', hp: 4 },
    { name: 'Inferi', type: 'inferi', hp: 0 },
];

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

function displayCreatures() {
    creatureList.innerHTML = '';

    for (const creature of creatures) {
        const creatureEl = renderCreature(creature);

        // put event listener in here

        creatureList.append(creatureEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
displayResults();
displayScoreboard();
displayCreatures();
