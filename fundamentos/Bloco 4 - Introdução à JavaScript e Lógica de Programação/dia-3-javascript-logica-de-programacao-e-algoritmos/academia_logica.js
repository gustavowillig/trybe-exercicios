// Exercício 1

const sequencia=[2,7,24,55,70];

let numero=24;

if(sequencia.indexOf(numero)>=0){
    console.log(numero,"está na posição",sequencia.indexOf(numero));
}
else{
    console.log("Elemento não encontrado no array");
}

// Exercício 2

let sequenciaTestar="";

for(let index=3;index<50;index+=2){
    sequenciaTestar+=index;
    if(index!==49){
        sequenciaTestar+=", ";
    }
}
console.log(sequenciaTestar);

// Exercício 3

const primeiroNumero=4;

const finalNumero=30;

let sequenciaexec3=[];

for(let index=primeiroNumero;index<=finalNumero;index++){
    if(index%3===0){
        sequenciaexec3.push(index);

    }
}
if(sequenciaexec3.length>=50){
    console.log("Há 50 ou mais números divisíveis por 3");
}
else{
    console.log("Sequência muito pequena.");
}

