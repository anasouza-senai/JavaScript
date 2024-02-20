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

dinos.shift(); //remove o primeiro item do vetor 
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do indice 1, contando 1 
console.table(dinos);