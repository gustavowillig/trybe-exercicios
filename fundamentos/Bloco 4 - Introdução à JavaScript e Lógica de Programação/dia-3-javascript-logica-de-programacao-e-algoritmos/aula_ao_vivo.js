let playerA = 'papel';
let playerB = 'tesoura';

if(playerA ==='pedra'){
    if(playerB === 'tesoura'){
        console.log("Player 1 won");
    } else if(playerB === 'papel'){
        console.log("Player 2 won");
    }
    else{
        console.log("Draw");
    }
}
else if(playerA==='tesoura'){
    if(playerB==='papel'){
        console.log("Player 1 won");
    } else if(playerB==='pedra'){
        console.log("Player 2 won");
    } else{
        console.log("Draw");
    }
} else if(playerA ==='papel'){
    if(playerB==='tesoura'){
        console.log("Player 2 won");
    } else if(playerB==='pedra'){
        console.log("Player 1 won");
    } else{
        console.log("Draw");
    }
}