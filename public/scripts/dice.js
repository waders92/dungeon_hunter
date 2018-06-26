"use strict";

let enemyName = "";
let enemyImage = "";
let attackCounter = 0;
let moveCounter = 0;
let playerHitPoints = 0;
let monsterHitPointTotal = playerHitPoints;
let characterName;

function diceRoll(value) {
  return Math.floor((Math.random() * value + 1));
}

function nameSelector() {
  let value = 10;
  let availableNames = [

    "",
    "Sturm Brightblade",
    "Caramon Majere",
    "Andre of Astora",
    "Gravelord Nito",
    "Unbreakable Patches",
    "Flint Fireforge",
    "Siegward of Catarina",
    "Yoel of Londor",
    "Eygon of Carim",
    "Horace the Hushed"
  ];

  let result = diceRoll(value);
  let randomName = availableNames[result];
  characterName = randomName;
  return randomName;
}

function enemySelector() {
  let value = 6;
  let availableEnemies = [
    {},

    {
      image: 'images/skeleton.png',
      name: 'Skeleton'
    },

    {
      image: 'images/orc.jpg',
      name: 'Savage Orc'
    },

    {
      image: 'images/deathknight.gif',
      name: 'Death Knight'
    },

    {
      image: 'images/rogue.jpg',
      name: 'Rogue'
    },

    {
      image: 'images/goblin.jpg',
      name: 'Goblin'
    },

    {
      image: 'images/dwarf.jpg',
      name: 'Dwarf Marauder'
    }
  ];

  let result = diceRoll(value);
  let randomEnemy = availableEnemies[result];
  return randomEnemy;
}

let moveButton = document.querySelector("#move-btn");
moveButton.addEventListener("click", function() {
  characterMoveResult();
  let characterSteps = moveCounter += 1;
  displayMovesTaken(characterSteps);
})

let parryButton = document.querySelector("#parry-btn");
parryButton.addEventListener("click", function() {
  loadParrySequence();
})

let nameSelectorButton = document.querySelector("#character-name");
nameSelectorButton.addEventListener("click", function() {
  document.getElementById("random-name").innerHTML = nameSelector();
});

let allStatsBtn = document.querySelector("#all-stats");
allStatsBtn.addEventListener("click", function() {
  let value = 20;
  let value2 = 12;
  let constitutionValue = diceRoll(value) + diceRoll(value);
  let strengthValue = diceRoll(value) + diceRoll(value);
  let dexterityValue = diceRoll(value) + diceRoll(value);
  let intelligenceValue = diceRoll(value);
  let hitpointsValue = (diceRoll(value) + diceRoll(value2)) * 10;
  playerHitPoints = hitpointsValue;
  monsterHitPointTotal = (hitpointsValue - (hitpointsValue * .10));
  displayPlayerStats(constitutionValue, strengthValue, dexterityValue, intelligenceValue, hitpointsValue)
});

function displayPlayerStats(constitutionValue, strengthValue, dexterityValue, intelligenceValue, hitpointsValue) {
  document.getElementById("constitution-value").innerHTML = "Con:&nbsp;&nbsp;" + constitutionValue;
  document.getElementById("strength-value").innerHTML = "Str:&nbsp;&nbsp;" + strengthValue;
  document.getElementById("dexterity-value").innerHTML = "Dex:&nbsp;&nbsp;" + dexterityValue;
  document.getElementById("intelligence-value").innerHTML = "Int:&nbsp;&nbsp;" + intelligenceValue;
  document.getElementById("hitpoints-value").innerHTML = "HP:&nbsp;&nbsp;" + hitpointsValue;
}

let attackButton = document.querySelector("#attack-btn");
attackButton.addEventListener("click", function() {
  let playerAttack = attackRoll();
  let damage = calculateDamage(playerAttack);
  let monsterUpdate = updateMonsterHitPoints(damage);
  displayPlayerHit(playerAttack, damage);
  console.log("M ---> " + monsterUpdate);
  deathCheckMonster(monsterUpdate);
  let monsterAttack = attackRoll();
  let monsterDamage = calculateDamage(monsterAttack);
  let playerUpdate = updatePlayerHitpoints(monsterDamage);
  displayEnemyHit(monsterAttack, monsterDamage);
  console.log("P -----> " + playerUpdate);
  deathCheckPlayer(playerUpdate);
  let battleRounds = attackCounter += 1;
  displayBattleRounds(battleRounds);
});

function attackRoll() {
  let value = 4;
  let attackOptions = [
    "",
    "miss!",
    "hit!",
    "hit!",
    "critical hit!"
  ];

  let result = diceRoll(value);
  let attackText = attackOptions[result];
  return result;
}

function calculateDamage(modifier) {
  let missHit = 0;
  let value = 8;
  if (modifier === 4) {
    let criticalHit = diceRoll(value) * 5;
    return criticalHit;
  } else if (modifier === 2 || modifier === 3) {
    let regularHit = diceRoll(value) * 3;
    return regularHit;
  } else {
    return missHit;
  }
}

function updatePlayerHitpoints(oldAmount) {
  playerHitPoints -= oldAmount;
  document.getElementById("player-hitpoint-tally").innerHTML = "YOUR hitpoints: &nbsp;&nbsp&nbsp;" + playerHitPoints;
  return playerHitPoints;
}

function updateMonsterHitPoints(oldAmount) {
  monsterHitPointTotal -= oldAmount;
  document.getElementById("enemy-hitpoints").innerHTML = enemyName + " hitpoints: &nbsp;&nbsp&nbsp;" + monsterHitPointTotal;
  return monsterHitPointTotal;
}

function deathCheckPlayer(hitpoints) {
  if (hitpoints <= 0) {
    document.getElementById("player-hitpoint-tally").innerHTML = "YOU DIED!";
    document.getElementById("warrior-image").src = "images/dead.jpg";
    removeControlButtons();
    removeAttackText();
    playAgain();
    loadGameSaveForm();
  }
}

function deathCheckMonster(hitpoints) {
  if (hitpoints <= 0) {
    document.getElementById("enemy-hitpoints").innerHTML = enemyName + " DIED!";
    document.getElementById("monster-image").src = "images/dead.jpg";
    removeControlButtons();
    removeAttackText();
    playAgain();
    loadGameSaveForm();
  }
}

function playAgain() {
  document.getElementById("play-again-button").style.display = 'inline';
}

function loadGameSaveForm() {
  document.getElementById("save-game").style.display = "block";
  document.getElementById("form-rounds").value = attackCounter + 1;
  document.getElementById("char-name").value = characterName;
}

function removeAttackText() {
  document.getElementById("attack-text").style.display = 'none';
}

function removeControlButtons() {
  document.getElementById("attack-btn").style.display = 'none';
  // document.getElementById("run-btn").style.display = 'none';
  document.getElementById("parry-btn").style.display = 'none';
  document.getElementById("play-again-button").style.display = 'inline';
}

function displayPlayerHit(playerAttack, damage) {
  if (playerAttack === 4) {
    document.getElementById("player-combat-result").innerHTML = "CRITICAL hit on " + enemyName + " for " + damage + " damage !!!"
  } else if (playerAttack === 3 || playerAttack === 2) {
    document.getElementById("player-combat-result").innerHTML = "You hit " + enemyName + " for " + damage + " damage !!!"
  } else {
    document.getElementById("player-combat-result").innerHTML = "YOU swing and MISS !!!"
  }
}

function displayEnemyHit(monsterAttack, monsterDamage) {
  document.getElementById("enemy-combat-result").style.display = 'inline-block';
  if (monsterAttack === 4) {
    document.getElementById("enemy-combat-result").innerHTML = "CRITICAL hit on YOU for  " + monsterDamage + " damage !!!"
  } else if (monsterAttack === 3 || monsterAttack === 2) {
    document.getElementById("enemy-combat-result").innerHTML = enemyName + " hits YOU for " + monsterDamage + " damage !!!"
  } else {
    document.getElementById("enemy-combat-result").innerHTML = enemyName + " swings and MISSES !!!!!"
  }
}

function displayBattleRounds(rounds) {
  document.getElementById("battle-rounds").innerHTML = "Rounds: " + rounds;
}

function displayMovesTaken(moves){
  console.log(moves);
  document.getElementById("total-steps").innerHTML = "Steps: " + moves;
}

function characterMoveResult() {
  let value = 4;
  let options = [
    "",
    "nothing",
    "nothing",
    "attacked",
    "attacked"
  ];

  let result = diceRoll(4);
  let moveResult = options[result];
  if (result === 0 || result === 1 || result === 2) {
    document.getElementById("movement-update").innerHTML = "Nothing encountered. Click (Move) to continue....";
  } else {
    loadAttackSequence();
  }
}

function loadEnemyMocking() {
  document.getElementById("run-img").style.display = 'block';
  document.getElementById("run-img").src = enemyImage;
  document.getElementById("run").style.display = 'block';
  document.getElementById("go-back").style.display = 'inline-block';
}

function loadAttackSequence() {
  let chosenEnemy = enemySelector();
  enemyImage = chosenEnemy.image;
  enemyName = chosenEnemy.name;
  document.getElementById("total-steps").style.display = 'none';
  document.getElementById("move-btn").style.display = 'none';
  document.getElementById("starting-map").style.display = 'none';
  document.getElementById("enter-dungeon-text").style.display = 'none';
  document.getElementById("monster-image").style.display = 'block';
  document.getElementById("monster-display-name").style.display = 'block';
  document.getElementById("attack-text").innerHTML = "A " + enemyName.toUpperCase() + " attacks you!<br>(ATTACK or PARRY)";
  document.getElementById("monster-image").src = enemyImage;
  document.getElementById("monster-display-name").innerHTML = enemyName;
  document.getElementById("enemy-hitpoints").innerHTML = enemyName + " hitpoints: &nbsp;&nbsp&nbsp;" + monsterHitPointTotal;
  document.getElementById("player-hitpoint-tally").innerHTML = "YOUR hitpoints: &nbsp;&nbsp&nbsp;" + playerHitPoints;
  document.getElementById("movement-update").style.display = 'none';
  document.getElementById("attack-btn").style.display = 'inline-block';
  document.getElementById("parry-btn").style.display = 'inline-block';
  // document.getElementById("run-btn").style.display = "inline-block";
}

function loadParrySequence() {
  let parryValue = 20;
  let result = diceRoll(parryValue);
  let parryResult = checkIfParry(result);
  let superCritValue = deliverSuperCrit();
  if (parryResult === true) {
    console.log(parryResult);
    displaySuperCrit(superCritValue, parryResult);
    let monsterHitPoints = updateMonsterHitPoints(superCritValue);
    deathCheckMonster(monsterHitPoints);
    let battleRounds = attackCounter += 1;
    displayBattleRounds(battleRounds);
    document.getElementById("enemy-combat-result").style.display = 'none';

  } else {
    document.getElementById("enemy-combat-result").style.display = 'inline-block';
    console.log(parryResult);
    let monsterAttack = attackRoll();
    let monsterDamage = calculateDamage(monsterAttack);
    let playerUpdate = updatePlayerHitpoints(monsterDamage);
    displaySuperCrit(superCritValue, parryResult);
    displayEnemyHit(monsterAttack, monsterDamage);
    deathCheckPlayer(playerUpdate);
    let battleRounds = attackCounter += 1;
    displayBattleRounds(battleRounds);
  }
}

function deliverSuperCrit() {
  let value = 20;
  let superCritValue = (diceRoll(value) + diceRoll(value)) * 5;
  console.log(superCritValue);
  return superCritValue;
}

function displaySuperCrit(value, parryResult) {
  if (parryResult === false) {
    document.getElementById("player-combat-result").innerHTML = "You try to PARRY and MISS!!!";
  } else
    document.getElementById("player-combat-result").innerHTML = "You PARRY and RIPOSTE for " + value + " damage!!!";
}

function checkIfParry(chance) {
  return (chance >= 18 && chance < 20) ? true : false;
}