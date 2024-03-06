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

var tabuleiro = [
    [" "," "," "]
    [" "," "," "]
    [" "," "," "]
];
let jogadorX = "X"
let jogadorO = "O"

function jogar (jogador) {
    let linha,coluna;

do{
    linha = Math.floor(Math.ramdom() *3);
    coluna = Math.floor(Math.ramdom() *3);
 } while (tabuleiro[linha][coluna] !== " ")


  tabuleiro[linha][coluna] = jogador;
 }

jogar(jogadorO);
jogar (jogadorX);
jogar (jogadorO);
jogar (jogadorX);
jogar (jogadorO);
jogar (jogadorX);
jogar (jogador0);

