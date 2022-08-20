const marina =18;
const iza = 3;
const silvia = 54;

menorIdade = Math.min(marina,iza,silvia);

if(menorIdade === marina){
    console.log("Marina é a pessoa mais jovem e possui",marina,"anos de idade.")
}

if(menorIdade === iza){
    console.log("Iza é a pessoa mais jovem e possui",iza,"anos de idade.")
}

if(menorIdade === silvia){
    console.log("Silvia é a pessoa mais jovem e possui",silvia,"anos de idade.")
}

let age = 20;
let sex = 'F';
let weight = 65;
let height = 170;
let calculo;

if(sex === 'M'){
    calculo=height*6.25+weight*9.99-idade*4.92+5;
}

if(sex === 'F'){
    calculo=height*6.25+weight*9.99-idade*4.92-161;
}

console.log("A taxa metabólica basal é ",calculo.toFixed(2),"Kcal");

let option = prompt("E aí ");

switch(option){
    case 1:
        console.log("1 - Trybe Lanche Feliz");
        break;
    case 2:
        console.log("2 - McTrybe");
        break;
    case 3:
        console.log("3 - TrybeWooper");
        break;
    case 4:
        console.log("4 - X-Trybe");
        break;
    case 5:
        console.log("5 - Triplo Trybe com JS");
        break;
    default:
        console.log("Ainda não possuímos esta opção :(");
}
