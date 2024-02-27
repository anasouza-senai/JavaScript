var frutas = ["banana", "maçã", "pera", "uva", "morango"];
console.table(frutas);
frutas.push("tangerina");
console.table(frutas);
frutas.unshift("goiaba");
console.table(frutas);

console.log("A fruta do índice 5 é:", frutas[5]);

// frutas.splice(4,1);

var posicao = frutas.indexOf("morango");
frutas.splice(posicao, 1);
console.table(frutas);

var copia = frutas.slice(2,5);
console.table(copia);

//Atividade

var num = [ 15,22,38,41,50];
console.table(num);

console.log([3])

var copia2 = num.slice();

copia2[0] = num [0] * 2;
copia2[1] = num [1] * 2;
copia2[2] = num [2] * 2;
copia2[3] = num [3] * 2;
copia2[4] = num [4] * 2;
console.table(copia2);