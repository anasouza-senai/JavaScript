const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log(numeros[2]);

numeros[2] = 6;
console.log(numeros);
console.log(numeros[2]);

//Criando variedades de tipo array (vetores)

var dinos = ["Tiranossauro Rex", "Estegossauro", "Anquilossauro"];
console.log(dinos); //retorna todos os itens do aray
console.log(dinos[0]); //retorna o primeiro indice do array
console.log("");
console.table(dinos); // cria tabela com os itens do array
console.log(dinos.length);
console.log("O vetor tem", dinos.length, "elementos!"); //mostrando quantidades de itens no array

//adicionando elementos ao vetor existente
dinos.push("Brotossauro"); //array.puch adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("Ticerátops"); //adiciona itens no inicio do array
console.table(dinos);

//Alterando elementos com base no indice (posição)
dinos[3] = "Titanossauro";
console.table(dinos);

//Obtendo um elementos com base no seu indice
console.log("Primeira posição:", dinos[0]); //retorna um elemento especifico 
console.log("Segunda posição:", dinos[1]);
console.log("Item da posição 20", dinos[19]) // retorna indefinido

//Removendo elemnetos do vetor
dinos.pop() //remove o ultimo elemento do vetor 
console.table(dinos);

dinos.shift(); //remove o prim

console.log("")
console.log("---------------Continuação Aula-----------")
var dinos =[
    "Ticerátops",
    "Tiranossauro",
    "Estegossauro",
    "Anquilossauro",
    "Brotossauro",
    "Ictiossauro",
    "Pterodátilo",
    "Espinossauro",
];

console.table(dinos);

var elementoProcurado = "Brotossauro";
var posicaoc = dinos.indexOf(elementoProcurado);
console.log ("O " + elementoProcurado + " está no indice " + posicao)

var elementoProcurado = "Pterodátilo";
var posicaoc = dinos.indexOf(elementoProcurado);
console.log ("O " + elementoProcurado + " está no indice " + posicao)

var elementoProcurado = "Ticerátops"
var posicaoc = dinos.indexOf(elementoProcurado);
console.log ("O " + elementoProcurado + " está no indice " + posicao)

//criando copia de array (vetor)
var copia1 = dinos.slice();// .slice faz uma copia real do item de vetor 
console.log("vetor copia 1");
console.log(copia1);

var copia2 = dinos.slice(1,3);
console.log("Vetor copia 2");
console.table(copia2);
