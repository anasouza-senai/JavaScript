// var popuA = 100.003;
// var popuB = 300.004;
// var ano = 0;

// while (popuA < popuB) {
//     ano++
//     popuA *= 1.03;
//     popuB *= 1.015;
// }
// console.log(`A população A (${Math.round(popuA)}) irá passar a população B (${Math.round(popuB)}) em ${ano} anos!`);


// console.log(`____|____|____`)
// console.log(`____|____|____`)
// console.log(`    |    |    `)

const tabuleiro = [
    [" "," "," "]
    [" "," "," "]
    [" "," "," "]
];
let jogadorAtual = "X"
let jogadorO = "O"

function jogar (jogador) {
    let linha,coluna;

do{
    linha = Math.floor(Math.ramdom() *3);
    coluna = Math.floor(Math.ramdom() *3);
 } while (tabuleiro[linha][coluna] !== " ")


  tabuleiro[linha][coluna] = jogador;
 jogadorAtual = jogadorAtual === "X" ? "O" : "X;"
 }

 function verificaVencedor() {
    for (let i = 0; i < 3; i++) {
        //verifica coluna
        if (tabuleiro[0][i] === tabuleiro[1][i] &&
            tabuleiro[1][i] === tabuleiro[2][i] &&
            tabuleiro[1][i] !== " "
){
    console.log(`O jogador ${tabuleiro[1][i]} ganhou`);
    return tabuleiro[1][i]
 } else if (
        tabuleiro[i][0] === tabuleiro[i][1] &&
        tabuleiro[i][1] === tabuleiro[i][2] &&
        tabuleiro[i][1] !== " "
 ){
    console.log(`O jogador ${tabuleiro[i][1]} ganhou`);
    return tabuleiro[i][1]
   } else if  (
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2] &&
    tabuleiro[1][1] !== " "
   ) {
    console.log(`O jogador ${tabuleiro[1][1]} ganhou`);
    return tabuleiro[1][1]
   } else if  (
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][0] &&
    tabuleiro[1][1] !== " "
) {
    
}
 }
}

jogar(jogadorO);
jogar (jogadorX);
jogar (jogadorO);
jogar (jogadorX);
jogar (jogadorO);
jogar (jogadorX);
jogar (jogador0);

