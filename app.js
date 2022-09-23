/* Imports */

import { renderCreature } from './render-creature.js';
import { getRandomItem } from './utils.js';

/* Get DOM Elements */
const harryHp = document.getElementById('hphp-span');
const playerImage = document.getElementById('player-image');
const battleMessage = document.getElementById('battle-result-message');
const creaturesCrushed = document.getElementById('creatures-crushed');
const score = document.getElementById('score');
const creatureList = document.getElementById('creatures-list');
const resetGame = document.getElementById('reset-game-button');
const addCreatureForm = document.getElementById('add-creature-form');
const removeDeadCreatureButton = document.getElementById('remove-dead-creatures-button');

/* State */
let playerHealth = 100;
let result = 'Click on a creature to get started!';
let totalCreaturesCrushed = 0;
let playerScore = 0;
let creatures = [
    {
        name: 'Norbert',
        type: 'dragon',
        hp: 7,
        xpValue: 100,
    },
    {
        name: 'Aragog',
        type: 'spider',
        hp: 6,
        xpValue: 75,
    },
    {
        name: 'Fenrir',
        type: 'werewolf',
        hp: 5,
        xpValue: 50,
    },
    {
        name: 'Inferi',
        type: 'inferi',
        hp: 4,
        xpValue: 25,
    },
];

const dragon = {
    type: 'dragon',
    hp: 7,
    xpValue: 100,
};

const spider = {
    type: 'spider',
    hp: 6,
    xpValue: 75,
};

const werewolf = {
    type: 'werewolf',
    hp: 5,
    xpValue: 50,
};

const inferi = {
    type: 'inferi',
    hp: 4,
    xpValue: 25,
};

// Probability Arrays
const userAttacks = [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 7];
const creatureAttacks = [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5];
const creatureArray = [
    inferi,
    inferi,
    inferi,
    inferi,
    werewolf,
    werewolf,
    werewolf,
    spider,
    spider,
    dragon,
];

/* Events */
addCreatureForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addCreatureForm);
    const creatureType = getRandomItem(creatureArray);

    const creature = {
        name: formData.get('name'),
        type: creatureType.type,
        hp: creatureType.hp,
        xpValue: creatureType.xpValue,
    };

    creatures.push(creature);

    result = `${creature.name} the ${creature.type} has joined the fray!`;

    displayCreatures();
    displayResults();

    addCreatureForm.reset();
});

removeDeadCreatureButton.addEventListener('click', () => {
    const stillFighting = [];
    for (const creature of creatures) {
        if (creature.hp > 0) {
            stillFighting.push(creature);
        }
    }
    creatures = stillFighting;
    displayCreatures();
});

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
        resetGame.classList.remove('hidden');
    } else {
        playerImage.src = 'assets/harry-potter-round.png';
        resetGame.classList.add('hidden');
    }
}

function displayCreatures() {
    creatureList.innerHTML = '';

    for (const creature of creatures) {
        const creatureEl = renderCreature(creature);
        creatureList.append(creatureEl);

        // put event listener in here
        creatureEl.addEventListener('click', () => {
            if (creature.hp < 1) {
                result = `${creature.name} has passed through the veil, you can't hurt them anymore you MONSTER!`;
                displayResults();
                return;
            }
            if (playerHealth < 1) {
                result = `You're dead! Click 'Reset Game' to keep playing!`;
                displayResults();
                return;
            }

            const userAttack = getRandomItem(userAttacks);
            const creatureAttack = getRandomItem(creatureAttacks);

            playerHealth = Math.max(0, playerHealth - creatureAttack);
            creature.hp = Math.max(0, creature.hp - userAttack);

            result = '';
            if (userAttack === 0) {
                result += 'You missed! ';
            } else if (userAttack === 7) {
                result += `critical hit on ${creature.name} for ${userAttack} damage!!! `;
            } else {
                result += `You hit ${creature.name} for ${userAttack} damage. `;
            }

            if (creatureAttack === 0) {
                result += `${creature.name} missed! `;
            } else {
                result += `${creature.name} hit you for ${creatureAttack} damage. `;
            }

            if (creature.hp < 1) {
                totalCreaturesCrushed++;
                playerScore += creature.xpValue;
                score.textContent = playerScore;
                displayScoreboard();
            }

            displayResults();
            displayPlayer();
            displayCreatures();
        });
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
displayCreatures();
displayResults();
