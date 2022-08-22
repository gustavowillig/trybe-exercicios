// Exercício 1

let numero=10;
let fatorial=1;

for(var index=numero;index>=1;index--){
    fatorial=fatorial*index;

}
console.log(fatorial);

// Exercício 2

let word='tryber';

let invertWord='';

for(var index=word.length-1;index>=0;index--){
    invertWord+=word[index];
}
console.log(invertWord);

// Exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior;

let menor;

for(var index=0;index<array.length;index++){
    if(index===0){
        maior=array[index];
        menor=array[index];
    }
    else{
        if(array[index].length>maior.length){
            maior=array[index];
        }
        if(array[index].length<menor.length){
            menor=array[index];
        }
    }
}
console.log("A maior palavra é",maior);
console.log("A menor palavra é",menor);

// Exercício 4
var counter=0;
var numeroPrimo;

for(var index=3; index<50;index++){
    counter=0;
    for(var divisor=1;divisor<=index;divisor++){
        if(index%divisor===0){
            counter++;
        }
    }
    if(counter===2){
        numeroPrimo=index;
    }
}
console.log(numeroPrimo);