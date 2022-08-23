// Objetos

// Exercício 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log("Bem-vinda,",info.personagem);

// Exercício 2

info['recorrente']="Sim";

// Exercício 3

for(let key in info){
    console.log(key);
}

// Exercício 4

for(let key in info){
    console.log(info[key]);
}

// Exercício 5

let infoNovo={
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

for(let key in info){
    if(key==="recorrente"){
        console.log("Ambos recorrentes");
    }
    else{
        console.log(info[key],"e",infoNovo[key]);
    }
}

// Exercício 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log("O livro favorito de",leitor.nome,leitor.sobrenome,"se chama",leitor.livrosFavoritos[0].titulo);
  
  // Exercício 7
  leitor['livrosFavoritos'].push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });

// Exercício 8

console.log(leitor.nome,"tem",leitor.livrosFavoritos.length,"livros favoritos");

// Funções

// Exercício 1

function verificaPalindrome(nome){
    let nomeSplit=nome.split("");
    let nomeInvertido=nomeSplit.reverse();
    let nomeInvertidoJoin=nomeInvertido.join("");
    if(nomeInvertidoJoin===nome){
        return true;
    }
    else{
        return false;
    }
}

console.log(verificaPalindrome("arara"));

console.log(verificaPalindrome("desenvolvimento"));

// Exercício 2

function maiorIndice(teste){
    let indiceMaior;

    for(var index=0;index<teste.length;index++){
        if(index===0){
            indiceMaior=index;
        }
        else{
            if(teste[index]>teste[indiceMaior]){
                indiceMaior=index;
            }
        }
    }
    return indiceMaior;
}

console.log(maiorIndice([2, 3, 6, 7, 10, 1]));

// Exercício 3

function menorIndice(teste){
    let indiceMenor;

    for(var index=0;index<teste.length;index++){
        if(index===0){
            indiceMenor=index;
        }
        else{
            if(teste[index]<teste[indiceMenor]){
                indiceMenor=index;
            }
        }
    }
    return indiceMenor;
}

console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));

// Exercício 4

function nomesMaiorCaracter(teste){
    let maiorNome;
    for(var index=0;index<teste.length;index++){
        if(index===0){
            maiorNome=teste[index];
        }
        else{
            if(maiorNome.length<teste[index].length){
                maiorNome=teste[index];
            }
        }
    }
    return maiorNome;
}

console.log(nomesMaiorCaracter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exercício 5

function maisRepete(teste){
    let numeroRepetido=0;
    let numeroRepeticao=0;
    let numeroContador=0;
    let numeroAvaliado=0;
    for(var index=0;index<teste.length;index++){
        numeroAvaliado=teste[index];
        for(var index2=0;index2<teste.length;index2++){
            if(teste[index2]===numeroAvaliado){
                numeroContador++;
            }
        }
        if(numeroContador>numeroRepeticao){
            numeroRepeticao=numeroContador;
            numeroRepetido=numeroAvaliado;
        }
        numeroContador=0;
    }
    return numeroRepetido;
}

console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));

console.log(maisRepete([3, 3, 2, 5, 8, 2, 3]));

// Exercício 6

function somaAte(teste){
    let sum=0;
    for(var index=0;index<=teste;index++){
        sum=sum+index;
    }
    return sum;
}

console.log(somaAte(5));

// Exercício 7

function verificaFimPalavra(word, ending){
    let eFinal=true;
    for(var index=0;index<ending.length;index++){
        if(ending[index]!==word[word.length-ending.length+index]){
            eFinal=false;
        }
    }
    return eFinal;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));