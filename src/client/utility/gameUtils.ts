import { Enemy } from './interface';

export const statCheck = (stat: number) => {
  const npcRoll = Math.floor(Math.random() * 10) + 1;
  const weight = 1;
  console.log('INSIDE statCheck Func', stat, npcRoll);
  if (stat > npcRoll * weight) {
    return 'success';
  } else {
    return 'failure';
  }
};

export const fightEnemy = (enemyStrength: number, enemyHealth: number, playerStrength: number, playerHealth: number) => {
  const playerRoll = Math.floor(Math.random() * 4) + 1 + playerStrength;
  const enemyRoll = Math.floor(Math.random() * 4) + 1 + enemyStrength;
  // console.log('ENEMY ROLL', enemyRoll);
  // console.log('PLAYER ROLL', playerRoll);
  if (enemyRoll > playerRoll) {
    const dmg = enemyRoll - playerRoll;
    return { player: (playerHealth - dmg), damage: dmg };
  } else if (playerRoll > enemyRoll) {
    const dmg = playerRoll - enemyRoll;
    return { enemy: (enemyHealth - dmg), damage: dmg };
  } else { // <-- tie
    return { player: (playerHealth - 1), damage: 1 };
  }
};

export const isEnemy = (obj: any): obj is Enemy => {
  return 'strength' in obj && 'health' in obj;
};

// function to add new item to inventory array
export const addItem = (inventory: Array<number>, itemNum: number) => {
  for (let i = 0; i <= inventory.length; i++) {
    if (inventory[i] === 1) {
      inventory.splice(i, 1, itemNum);
      return inventory;
    }
  }
};
