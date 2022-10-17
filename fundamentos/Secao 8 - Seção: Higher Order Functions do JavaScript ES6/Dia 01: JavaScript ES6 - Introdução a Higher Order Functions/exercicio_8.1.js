const gerarPessoa = (nomePessoa) => {
  const email = nomePessoa.toLowerCase().split(' ').join('_');
  return {nomeCompleto: nomePessoa, email: `${email}@trybe.com`};
}

const newEmployees = () => {
  const employees = {
    id1: gerarPessoa('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: gerarPessoa('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: gerarPessoa('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());

const verificar = (numeroApostado, numeroSorteado) => {
  let resultado;
  if (numeroApostado === numeroSorteado) {
    resultado = 'Parabéns você ganhou';
  } else {
    resultado = 'Tente novamente';
  }
  return resultado;
}

const sorteioMassa = (numeroApostado, funcaoDeCheck) => {
  const numeroSorteado = Math.round(Math.random()*4)+1; //math.floor serve
  console.log(funcaoDeCheck(numeroApostado, numeroSorteado)); 
}

sorteioMassa(1, verificar);


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const processoAuto = (arrayCorreto,arrayEstudante) => {
  let resultadoCorreto = 0;
  for (let index = 0; index < arrayCorreto.length; index += 1) {
    if (arrayCorreto[index] === arrayEstudante[index]) {
      resultadoCorreto += 1;
    } else if (arrayEstudante[index] != 'N.A') {
      resultadoCorreto -= 0.5;
    }
  }
  return resultadoCorreto;
}

const corretorAutomatico = (arrayCorreto, arrayEstudante, funcaoExtra) => {
  console.log(funcaoExtra(arrayCorreto, arrayEstudante));
}

corretorAutomatico(RIGHT_ANSWERS, STUDENT_ANSWERS, processoAuto);

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragao = (dragon) => {
  const minDmg = 15;
  const Dmg = Math.floor(Math.random() * dragon.strength);
  const dragonDmg = (Dmg > minDmg) ? Dmg : minDmg;
  return dragonDmg;
}

const danoWarrior = (warrior) => {
  const minDmg = warrior.strength;
  const Dmg = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg));
  const warriorDmg = (Dmg > minDmg) ? Dmg : minDmg;
  return warriorDmg;
}

const objetoTurnoMago =  (mage) => {
  let danoCausado = 0;
  const minDanoCausado = mage.intelligence;
  let manaGasta = 0;
  if (mage.mana < 15) {
    danoCausado = 'Não possui mana suficiente';
    manaGasta = 0;
  } else {
    danoCausado = Math.floor(Math.random() * (mage.intelligence * 2));
    danoCausado = (danoCausado > minDanoCausado) ? danoCausado : minDanoCausado;
    manaGasta = 15;
  }
  return {danoMago: danoCausado, manaMagoTurno: manaGasta};
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorAttack) => {
    const warriorSlash = warriorAttack(warrior);
    dragon.healthPoints -=warriorSlash;
    warrior.damage = warriorSlash;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageMagic = mageTurnStats.danoMago;
    mage.mana -= mageTurnStats.manaMagoTurno;
    dragon.healthPoints -= mageMagic;
    mage.damage = mageMagic;
  },
  dragonTurn: (dragonAttack) => {
    const dragonCausaDano = dragonAttack(dragon);
    warrior.healthPoints -= dragonCausaDano;
    mage.healthPoints -= dragonCausaDano;
    dragon.damage = dragonCausaDano;
  },
  turnResults: () => battleMembers
};

while (warrior.healthPoints > 0 && mage.healthPoints > 0 && dragon.healthPoints > 0) {
  gameActions.warriorTurn(danoWarrior);
  gameActions.mageTurn(objetoTurnoMago);
  if (dragon.healthPoints > 0) {
    gameActions.dragonTurn(danoDragao);
  }

}

console.log(gameActions.turnResults());