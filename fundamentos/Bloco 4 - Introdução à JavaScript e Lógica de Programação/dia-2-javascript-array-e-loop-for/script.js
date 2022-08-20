let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1
for(var index=0;index<numbers.length;index++){
    console.log(numbers[index]);
}

// Exercício 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
for(var index=0;index<numbers.length;index++){
    soma=soma+numbers[index];
}
console.log(soma);

// Exercício 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
for(var index=0;index<numbers.length;index++){
    soma=soma+numbers[index];
}
let media;
media=soma/numbers.length;
console.log(media);

// Exercício 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
for(var index=0;index<numbers.length;index++){
    soma=soma+numbers[index];
}
let media;
media=soma/numbers.length;
if(media>20){
    console.log(media,"maior que 20");
}
else{
    console.log(media,"menor ou igual a 20");
}

// Exercício 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior;
for(var index=0;index<numbers.length;index++){
    if(index===0){
        maior=numbers[index];
    }
    else if(maior<numbers[index]){
        maior=numbers[index];
    }
}
console.log(maior);

// Exercício 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar=0;
for(var index=0;index<numbers.length;index++){
    if(numbers[index]%2===1){
        impar++;
    }
}
console.log(impar);

// Exercício 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor;
for(var index=0;index<numbers.length;index++){
    if(index===0){
        menor=numbers[index];
    }
    else if(menor>numbers[index]){
        menor=numbers[index];
    }
}
console.log(menor);

// Exercício 8

let numbers=[];
for(var index=1;index<26;index++){
    numbers.push(index);
}
console.log(numbers);

// Exercício 9

let numbers=[];
let resultado=0;
for(var index=1;index<26;index++){
    numbers.push(index);
}

for(var index=0;index<numbers.length;index++){
    resultado=numbers[index]/2;
    numbers[index]=resultado;
}
console.log(numbers);

//Exercício Bonus 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

  console.log(numbers);

//Exercício Bonus 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

  console.log(numbers);

  //Exercício Bonus 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumbers=[];
for(var index=0;index<numbers.length;index++){
    if(index===numbers.length-1){
        novoNumbers.push(numbers[index]*2);
    }
    else{
        novoNumbers.push(numbers[index]*numbers[index+1]);
    }
}

console.log(novoNumbers);



