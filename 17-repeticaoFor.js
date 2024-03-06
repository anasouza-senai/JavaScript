// //Laço de repetição FOR
// //escrever para o usuario 1000x "Prestar mais atenção nas aulas"

// // for (let i = 0; i < 1000; i++) {
// //      console.log("Prestar mais atenção nas aulas")
// // }

// //mostrando os numeros pares
// // for (let i = 1; i <= 1000; i+= 2) {
// //     console.log(i)
// // }

// console.log("------------------------------");

// //Escreva todos os numeros de 1 a 20 com FOR
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// console.log("-----------------------------");

// //Escreva todos os números PARES entre 1 e 20 com FOR
// for (let i = 2; i < 20; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// //Dado umvetor com números 5,6,8,14,0,9,7,2.
// //Calcule e exiba a somatíria de seus elementos.

// console.log("-----------------------------");

// const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
// var somar = 0;

// for (let i = 0; i < numeros.length; i++) {
//   somar += numeros[i];
// }
// console.log(`A soma dos elementos do array é: ${somar}`);

// Dado um vetor 5,6,8,14,0,9,7,2.
// Mulatiplicar todos os seus elementos por 3 utilizando o loop FOR
// Em seguida, mostre o novo vetor

// const num2 = [5, 6, 8, 14, 0, 9, 7, 2];
// console.table(num2);
// for (let i = 0; i < num2.length; i++) {
//   num2[i] *= 3;
// }
// console.table(num2);

// Dado a matriz 2x3, escrever para o ususario todos os seus elementos
//com as respectivas posições da matriz
// [8,4,1]
// [3,7,8]

// teste 1
// let nu = [ [8,4,1] [3,7,8] ]
// var matriz = 2

// for (let i = 0; i < matriz.length; i++) {
//   matriz[i] *=3

// }
// console.table(matriz);

console.log("--------------------");

var matriz = [
  [8, 4, 1],
  [3, 7, 8]
];

console.log(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(` matriz[${linha}],${coluna}) = ${matriz[linha][coluna]}`);
  }
}
