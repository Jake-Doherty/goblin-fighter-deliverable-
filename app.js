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
const enterDungeonButton = document.getElementById('enter-dungeon-button');
const audioSlider = document.getElementById('slider');
const playPauseAudioButton = document.getElementById('audio');
const themeSong = new Audio('assets/theme-song.mp3');
const creatureDeathSound = new Audio('assets/male_hurt7-48124.mp3');
const enterDungeonSound = new Audio('assets/entered-dungeon-sound.mp3');

/*  audio stuff  */

playPauseAudioButton.addEventListener('click', async () => {
    themeSong.loop = true;
    themeSong.volume = 0.15;

    if (themeSong.paused) {
        themeSong.play();
    } else {
        themeSong.pause();
    }
});

creatureDeathSound.volume = 0.05;
enterDungeonSound.volume = 0.1;

audioSlider.min = 0;
audioSlider.max = 100;

audioSlider.oninput = () => {
    themeSong.volume = audioSlider.value / 100;
};

/* State */
let playerHealth = 100;
let result = 'Click on a creature to get started!';
let totalCreaturesCrushed = 0;
let playerScore = 0;
let creatures = [
    {
        name: 'Norbert',
        type: 'dragon',
        hp: 8,
        xpValue: 100,
    },
    {
        name: 'Aragog',
        type: 'spider',
        hp: 7,
        xpValue: 75,
    },
    {
        name: 'Fenrir',
        type: 'werewolf',
        hp: 6,
        xpValue: 50,
    },
    {
        name: 'Inferi',
        type: 'inferi',
        hp: 5,
        xpValue: 25,
    },
];

const dragon = {
    type: 'dragon',
    hp: 8,
    xpValue: 100,
};

const spider = {
    type: 'spider',
    hp: 7,
    xpValue: 75,
};

const werewolf = {
    type: 'werewolf',
    hp: 6,
    xpValue: 50,
};

const inferi = {
    type: 'inferi',
    hp: 5,
    xpValue: 25,
};

// Probability Arrays
const userAttacks = [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 7];
const creatureAttacks = [0, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 7];
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

enterDungeonButton.addEventListener('click', () => {
    creatureList.innerHTML = '';

    enterDungeonSound.play();

    result = '';

    const creatureNameArray = [
        'Horace',
        'Hamish',
        'Malcolm',
        'Sanford',
        'Christian',
        'Gerard',
        'Brennan',
        'Jason',
        'Amina',
        'Chauncy',
        'Leta',
        'Orla',
        'Mandy',
        'James',
        'Grim',
        'Declan',
        'Elizabeth',
        'Kaori',
        'Lynette',
        'Scott',
        'Takashi',
        'Bhavana',
        'Trevor',
        'Cho',
        'Penelope',
        'Jada',
    ];

    function displayFirstCreature() {
        const creatureType = getRandomItem(creatureArray);
        const creatureName = getRandomItem(creatureNameArray);

        // declare creature variable assigning creatureType result data to object key:'value' pairs
        const creature = {
            // assign name key a value of the input from add creature form
            name: creatureName,
            type: creatureType.type,
            hp: creatureType.hp,
            xpValue: creatureType.xpValue,
        };

        // push new creature onto creatures array
        creatures.push(creature);

        result += ` ${creature.name} the ${creature.type} has joined the fray!`;
    }

    function displaySecondCreature() {
        const creatureType = getRandomItem(creatureArray);
        const creatureName = getRandomItem(creatureNameArray);

        // declare creature variable assigning creatureType result data to object key:'value' pairs
        const creature = {
            // assign name key a value of the input from add creature form
            name: creatureName,
            type: creatureType.type,
            hp: creatureType.hp,
            xpValue: creatureType.xpValue,
        };

        // push new creature onto creatures array
        creatures.push(creature);

        result += ` ${creature.name} the ${creature.type} has joined the fray!`;
    }

    function displayThirdCreature() {
        const creatureType = getRandomItem(creatureArray);
        const creatureName = getRandomItem(creatureNameArray);

        // declare creature variable assigning creatureType result data to object key:'value' pairs
        const creature = {
            // assign name key a value of the input from add creature form
            name: creatureName,
            type: creatureType.type,
            hp: creatureType.hp,
            xpValue: creatureType.xpValue,
        };

        // push new creature onto creatures array
        creatures.push(creature);

        result += ` ${creature.name} the ${creature.type} has joined the fray!`;
    }

    function displayFourthCreature() {
        const creatureType = getRandomItem(creatureArray);
        const creatureName = getRandomItem(creatureNameArray);

        // declare creature variable assigning creatureType result data to object key:'value' pairs
        const creature = {
            // assign name key a value of the input from add creature form
            name: creatureName,
            type: creatureType.type,
            hp: creatureType.hp,
            xpValue: creatureType.xpValue,
        };

        // push new creature onto creatures array
        creatures.push(creature);

        result += ` ${creature.name} the ${creature.type} has joined the fray!`;
    }

    function displayFifthCreature() {
        const creatureType = getRandomItem(creatureArray);
        const creatureName = getRandomItem(creatureNameArray);

        // declare creature variable assigning creatureType result data to object key:'value' pairs
        const creature = {
            // assign name key a value of the input from add creature form
            name: creatureName,
            type: creatureType.type,
            hp: creatureType.hp,
            xpValue: creatureType.xpValue,
        };

        // push new creature onto creatures array
        creatures.push(creature);

        result += ` ${creature.name} the ${creature.type} has joined the fray!`;
    }

    // array of array of functions
    const arrayOfFunc = [
        [displayFirstCreature, displaySecondCreature, displayThirdCreature],
        [displayFirstCreature, displaySecondCreature, displayThirdCreature, displayFourthCreature],
        [displayFirstCreature, displaySecondCreature, displayThirdCreature, displayFourthCreature],
        [displayFirstCreature, displaySecondCreature, displayThirdCreature, displayFourthCreature],
        [
            displayFirstCreature,
            displaySecondCreature,
            displayThirdCreature,
            displayFourthCreature,
            displayFifthCreature,
        ],
    ];

    // assign random array choice from function array of arrays
    let dungeonChoice = getRandomItem(arrayOfFunc);

    // iterate through dungeon choice and call/execute functions within
    for (let i = 0; i < dungeonChoice.length; i++) {
        dungeonChoice[i]();
    }

    displayCreatures();
    displayResults();
});

addCreatureForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // create new form data variable from add creature form
    const formData = new FormData(addCreatureForm);

    // get random creature from creature array and assign object data to creatureType variable
    const creatureType = getRandomItem(creatureArray);

    // declare creature variable assigning creatureType result data to object key:'value' pairs
    const creature = {
        // assign name key a value of the input from add creature form
        name: formData.get('name'),
        type: creatureType.type,
        hp: creatureType.hp,
        xpValue: creatureType.xpValue,
    };

    // push new creature onto creatures array
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
    if (totalCreaturesCrushed % 10 === 0) {
        playerHealth = 100;
        harryHp.textContent = playerHealth;
    }
    if (playerHealth < 1) {
        playerImage.src = 'assets/ghost.png';
        resetGame.classList.remove('hidden');
        creatureDeathSound.play();
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

        // put event listener in here to make each creature have an event listener when generated
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
            } else if (creatureAttack === 7) {
                result += `${creature.name} got a critical hit on you for ${creatureAttack} damage!!! `;
            } else {
                result += `${creature.name} hit you for ${creatureAttack} damage. `;
            }

            if (creature.hp < 1) {
                creatureDeathSound.play();
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
