function idadeCalculada(anoDeNascimento, anoAtual) {
  return anoDeNascimento - anoAtual;
}
var anoDeNascimento = 2007;
var anoAtual = 2024;

console.log(
  `anoDeNascimento - anoAtual = ${idadeCalculada(anoAtual, anoDeNascimento)}`
);

console.log(`----------------------------`);

function kmsRodado(quantidade) {
  return quantidade * 12;
}
var quantidade = 5;

console.log(
  `quantidade de quilometros rodados com 5 litros é = ${kmsRodado(quantidade)}`
);

console.log("--------------------------");

function votar(idade) {
  if (idade < 16) console.log(`Você não pode votar`);
  else if (idade >= 16 && idade < 18)
    console.log(`Você pode votar mas não é obrigatorio`);
  else console.log(`Você não pode votar`);
}

//var idade2 = 18;
function votacao(idade2) {
  switch (true) {
    case idade2 <= 16:
      console.log(`Você não pode votar`);
      break;
    case idade2 >= 16 && idade2 < 18:
      console.log(`Você pode votar, mas não é obrigatório`);
      break;
    default:
      console.log(`Você Pode votar`);
      break;
  }
}
votacao(6);
