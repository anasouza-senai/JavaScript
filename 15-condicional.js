//Condição simples única
var anoDeNascimento = 2003;

if (anoDeNascimento > 2003) console.log(`A pessoa nasceu depois de 2003!  `);

if (anoDeNascimento < 2003) console.log(`A pessoa naceu antes de 2003!`);

if (anoDeNascimento == 2003) console.log(`A pessoa nasceu em 2003!`);

//Condicional simoles if-else
var anoDeNascimento = 2002;

if (anoDeNascimento > 2000) console.log(`A pessoa nasceu depois de 2000!`);
else console.log(`A pessoa nasceu antes de 2000!`);

//Condicional composto com if
const login = "admin";
var senha = "123456";

//------------------------------------------------//
const loginUser = "Admin";
const senhaUser = "Admin";
//------------------------------------------------//

if (login == loginUser && senha == senhaUser) console.log(`Acesso permitido!`);
else console.log(`Acesso negado!`);

//função sinaleiro
function sinaleiro(cor) {
  if (cor == "vermelho") console.log(`Pare`);
  else if (cor == "amarelo") console.log(`Preste atenção`);
  else if (cor == "verde") console.log(`Siga`);
  else
    console.log(`Você informou cores diferentes de verde, amarelo e vermelho`);
}
sinaleiro("vermelho");

//desvio condicional if com bloco de comandos 
console.log("---------------------------------------")
var idade = 18

if (idade <= 18) {
    console.log("entrou no if..")
    idade++, console.log("Incrementei a idade...");
    console.log(`A nova idade é ${idade}`);
    console.log(`Agora estou saindo do bloco de codigos if`);
}
console.log(`Terminei!`);

//desvio condicional if inline (terminário)
     //validação (algo == algo) ou (algo > algumacoisa)
     //? (IF)
     //Termos de aceite de IF (se for verdadeiro)
     // : (ELSE)
     //Se for falso
     //TesteDe Validade == teste ? "Bla bla" : ("Ble ble")
var preco = 500;

var resultado = preco <=100 ? "tá barato" : "Vish ta caro!"

console.log(resultado);