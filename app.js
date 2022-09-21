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

/* State */
let playerHealth = 100;
let result = 'Click on a creature to get started!';
let totalCreaturesCrushed = 0;
let playerScore = 0;
let creatures = [
    {
        name: 'Norbert',
        type: 'dragon',
        hp: 6,
        xpValue: 100,
    },
    {
        name: 'Aragog',
        type: 'spider',
        hp: 5,
        xpValue: 75,
    },
    {
        name: 'Fenrir',
        type: 'werewolf',
        hp: 4,
        xpValue: 50,
    },
    {
        name: 'Inferi',
        type: 'inferi',
        hp: 0,
        xpValue: 25,
    },
];

const dragon = {
    type: 'dragon',
    hp: 6,
    xpValue: 100,
};

const spider = {
    type: 'spider',
    hp: 5,
    xpValue: 75,
};

const werewolf = {
    type: 'werewolf',
    hp: 4,
    xpValue: 50,
};

const inferi = {
    type: 'inferi',
    hp: 3,
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
                result = `They've passed through the veil, you can't hurt them anymore you MONSTER!`;
                displayResults();
                return;
            }

            const userAttack = getRandomItem(userAttacks);
            const creatureAttack = getRandomItem(creatureAttacks);

            playerHealth = Math.max(0, playerHealth - creatureAttack);
            creature.hp = Math.max(0, creature.hp - userAttack);

            result = '';
            if (userAttack === 0) {
                result += 'You missed!';
            } else {
                result += `You hit ${creature.name} for ${userAttack}`;
            }

            if (creatureAttack === 0) {
                result += `${creature.name} missed!`;
            } else {
                result += `${creature.name} hit you for ${creatureAttack}`;
            }

            if (creature.hp < 1) {
                totalCreaturesCrushed++;
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
displayResults();
displayScoreboard();
displayCreatures();
