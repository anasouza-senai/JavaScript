var matriz = [
    [24,87,157],
    [9,52,12],
    [43,72,3],
];
console.table(matriz);
console.log(matriz[0][0],matriz[1][1],matriz[2][2])
console.log(matriz[0][2],matriz[1][1],matriz[2][0])
console.log(matriz[2][2],matriz[1][1],matriz[0][0])
console.log(matriz[2][0],matriz[1][1],matriz[0][2])

//Atividade 
var cadastro = ["Stella Albuquerque",20,"Preto","Cereja","Rua Seridó no Jardim Europa, Sp ", "Gucci"]
console.log("Olá " + cadastro[0]+"! " + "Seja bem-vinda ao nosso sistema. ");
console.log("Você mora no endereço " + cadastro[4]+"e tem um pet chamado " + cadastro[5] + "!");
console.log("Sua idade é " + cadastro[1] + ", e gosta muito da fruta " + cadastro[3]);
console.log("E por ultimo sua cor favorita é " + cadastro[2]);
