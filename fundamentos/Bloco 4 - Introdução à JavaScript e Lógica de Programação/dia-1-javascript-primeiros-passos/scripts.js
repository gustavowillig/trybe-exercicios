// Exercício 1
let a = 5;
let b = 3;
let c = 7;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Exercício 2
let a = 5;
let b = 3;
let c = 7;

if(a>b){
  console.log("O maior número é: "+a);
}
else{
  console.log("O maior número é: "+b);
}

// Exercício 3
let a = 5;
let b = 3;
let c = 7;

if(a>=b && a>=c){
  console.log("O maior número é: "+a);
}
else if(b>=a && b>=c){
  console.log("O maior número é: "+b);
}
else{
  console.log("O maior número é: "+c);
}

// Exercício 4
let a = 5;
let b = 3;
let c = 7;


if(a>0){
  console.log("O primeiro número é positivo");
}
else if(a<0){
  console.log("O primeiro número é negativo");
}
else{
  console.log("O primeiro número é zero");
}

// Exercício 5
let a = 60;
let b = 60;
let c = 60;

if(a+b+c===180 && a>0 && b>0 && c>0){
  console.log("Esses três angulos formam um triângulo");
}
else{
  console.log("Esses três angulos não formam um triângulo ou são inválidos");
}

// Exercício 6

const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

// Exercício 7

let nota = 3;

nota = nota * 10;

if(nota<0 && nota>100){
  console.log("Erro no input da nota");
}

else if(nota>=90){
  console.log("Nota A");
}
else if(nota>=80){
  console.log("Nota B");
}

else if(nota>=70){
  console.log("Nota C");
}

else if(nota>=60){
  console.log("Nota D");
}

else if(nota>=50){
  console.log("Nota E");
}

else{
  console.log("Nota F");
}

// Exercício 8

const a=3;
const b=5;
const c=7;

if(a%2===0 || b%2===0 || c%2===0){
  console.log("true");
}else{
  console.log("false");
}

// Exercício 9

const a=3;
const b=5;
const c=7;

if(a%2===1 || b%2===1 || c%2===1){
  console.log("true");
}else{
  console.log("false");
}

// Exercício 10

const custo = 10;

const venda = 20;

let custoTotal=1.2*custo;

let lucro;

if(custo<0 || venda<0){
  console.log("Erro nos valores de entrada");
}
else{
  lucro=venda-custoTotal;
  console.log(lucro);
}

//Exercício 11

let salario = 3000;

let base;

let salarioBase;

let aliquota;

let salarioOficial;

if(salario<1556.95){
  base=salario*0.08;
}
else if(salario>=1556.95 && salario<=2594.92){
  base=salario*0.09;
}
else if(salario>=2594.93 && salario<=5189.82){
  base=salario*0.11;
}
else{
  base=570.88;
}

salarioBase=salario-base;

if(salarioBase<1903.99){
  aliquota=0;
}
else if(salarioBase>=1903.99 && salarioBase<=2826.65){
  aliquota=0.075*salarioBase-142.8;
}

else if(salarioBase>=2826.66 && salarioBase<=3751.05){
  aliquota=0.15*salarioBase-354.8;
}

else if(salarioBase>=3751.06 && salarioBase<=4664.68){
  aliquota=0.225*salarioBase-636.13;
}
else{
  aliquota=0.275*salarioBase-869.36;
}

salarioOficial=salarioBase-aliquota;

console.log(salarioOficial);