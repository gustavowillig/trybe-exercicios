let a = 5;
let b = 3;
let c = 7;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
if(a>b){
  console.log("O maior número é: "+a);
}
else{
  console.log("O maior número é: "+b);
}

if(a>=b && a>=c){
  console.log("O maior número é: "+a);
}
else if(b>=a && b>=c){
  console.log("O maior número é: "+b);
}
else{
  console.log("O maior número é: "+c);
}

if(a>0){
  console.log("O primeiro número é positivo");
}
else if(a<0){
  console.log("O primeiro número é negativo");
}
else{
  console.log("O primeiro número é zero");
}

if(a+b+c===180 && a>0 && b>0 && c>0){
  console.log("Esses três angulos formam um triângulo");
}
else{
  console.log("Esses três angulos não formam um triângulo ou são inválidos");
}