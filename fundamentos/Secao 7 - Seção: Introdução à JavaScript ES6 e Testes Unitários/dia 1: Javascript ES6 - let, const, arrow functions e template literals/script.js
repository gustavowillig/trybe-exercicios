function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  const stringScope = escopo => (escopo  === true) ? 'Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !' : 'Não devo ser utilizada fora do meu escopo (else)';

  console.log(stringScope(false));






  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   const sortOddsAndEvens = (oddsAndEvens) => {

  // Seu código aqui.

//   console.log(oddsAndEvens); // será necessário alterar essa linha 😉

  console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);





const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));




const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));





const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
      if (fraseArray[index] === 'x') {
        fraseArray[index] = nome;
      }
    }  
    return fraseArray.join(' ');
  };
  
//   console.log(substituaX('Bebeto'));

const minhasSkills = (func) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let resultado = `
    ${func}
  
    Minhas três principais habilidades são:`;
  
    skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
      resultado = `${resultado}
      - ${skill}`;
    }); // reatribui e adiciona a skill atual a variável resultado
    return resultado;
  };
  
  console.log(minhasSkills(substituaX('Bebeto')));