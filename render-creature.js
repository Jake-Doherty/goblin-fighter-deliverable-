export function renderCreature(creature) {
    const li = document.createElement('li');
    li.classList.add('creature');

    const healthEl = document.createElement('span');
    healthEl.classList.add('health');
    healthEl.textContent = creature.hp;

    const creatureImgEl = document.createElement('img');
    creatureImgEl.classList.add('creature-image');
    if (creature.hp < 1) {
        creatureImgEl.src = './assets/ghost.png';
    } else {
        creatureImgEl.src = './assets/' + creature.type + '.png';
    }

    const creatureName = document.createElement('span');
    creatureName.classList.add('name');
    creatureName.textContent = creature.name;

    li.append(healthEl, creatureImgEl, creatureName);

    return li;
}
