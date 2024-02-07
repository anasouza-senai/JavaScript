var nome = "Stella";
var banco = "Bradesco";
var agencia = 8736;
var conta = 4103981464268756;
var saldo = 3600;

console.log("Bem-vindo", nome, "ao", banco, "!");
console.log("Seu número de conta é:", conta, "e sua agência é:", agencia);
console.log("Seu saldo atual é de R$", saldo);

console.log("Você efetuou uma compra de R$20,00. Seu saldo atual é de: R$",saldo-=20);
console.log("Você recebeu um pix de R$100,00. Seu saldo atual é de: R$",saldo+=100);
console.log("Você recebeu um pix de R$500,00. Seu saldo atual é de: R$",saldo+=500);
console.log("Você efetuou uma compra de R$700,00. Seu saldo atual é de: R$",saldo-=700);
console.log("Você efetuou uma compra de R$10,00. Seu saldo atual é de: R$",saldo-=10);
console.log("Seu saldo atual é de R$", saldo);
