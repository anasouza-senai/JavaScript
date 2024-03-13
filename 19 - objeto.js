// class Pessoa {
//   constructor(pNome, pIdade) {
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
//   apresentarSe() {
//     console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //Criando objetos do "tipo" Pessoa
// var pessoa1 = new Pessoa("Talda Dienifer", 52);
// var p2 = new Pessoa("Taldo Pedrin", 18);
// pessoa1.apresentarSe();
// p2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// p2.envelhecer();
// p2.apresentarSe();

// console.log("------------------------");

// //Abstração: abstrair características importantes e descartar itens irrelevantes
// console.log(`-----------------Abstração------------`);
// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }
//   alimentar() {
//     console.log(`${this.nome} foi alimentado`);
//   }
// }
// const meuPet = new Pet("Rex", 2, "Cachorro");
// console.log(
//   `Meu pet é um ${meuPet.tipo}, chamado ${meuPet.nome} e tem ${meuPet.idade} anos!`
// );

// meuPet.alimentar();

// console.log("---------------Herança-------------");
// class animal {
//   constructor(nome, idade, tipoAlimentacao) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimentacao = tipoAlimentacao;
//   }

//   emitirSom() {
//     console.log(`Barulho padrão de animal!`);
//   }
// }

// class Cachorro extends animal {
//   alimentar() {
//     console.log(`O cachorro ${this.nome} foi alimentado`);
//   }

//   emitirSom() {
//     console.log(`🐶 Au Au! 🐶`);
//   }
// }
// const pet = new animal("Carlos", 10, "Comida espacial");
// const meuCachorro = new Cachorro("Rex", 3, "Ração");

// meuPet.alimentar();
// pet.emitirSom();
// console.log("");
// meuCachorro.alimentar();
// meuCachorro.emitirSom();

// console.log("--------------Encapsulamento-----------")
// class Petzinho {
//     constructor(nome, idade, tipo) {
//         this.nome = nome;
//         this.idade = idade;
//         this.tipo = tipo;
//     }

//     getNome() {
//         return this.nome;
//     }

//     setNome(novoNome) {
//         this.nome = novoNome;
//     }
// }

// const novoPetzinho = new Petzinho("Bob", 3, "Cachorro");

// console.log(novoPetzinho.getNome()); //Bob
// // novoPetzinho.setNome("Rex");
// // console.log(novoPetzinho.getNome()); //Rex

// console.log("--------------------Polimorfismo--------------------");
// class Animalzinho {
//   constructor(nome) {
//     this.nome = nome;
//   }


//   fazerBarulho() {
//     console.log("O animal faz um barulho genérico.");
//   }
// }


// class Cachorro extends Animalzinho {
//   constructor(nome) {
//     super(nome);
//   }


//   fazerBarulho() {
//     console.log("O cachorro late!");
//   }
// }


// class Gato extends Animalzinho {
//   constructor(nome) {
//     super(nome);
//   }


//   fazerBarulho() {
//     console.log("O gato mia!");
//   }
// }


// // Exemplo de uso
// const animais = [
//   new Cachorro("Rex"),
//   new Gato("Mia"),
//   new Animalzinho("Bob"), // Animal genérico
// ];


// for (const animal of animais) {
//   animal.fazerBarulho();
// }

console.log("-------------Exemplos-----------")
//Criando uma classe Retângulo
class Retangulo {
  constructor(comprimento, largura){  
   this.comprimento = comprimento;
   this.largura = largura;
 
  }
  obterArea(){ 
  return this.comprimento * this.largura
}  
obterPerimetro(){
   return this.comprimento * 2 + this.largura * 2;
 }
 setComprimento(novoComprimento){
  this.comprimento = novoComprimento
 }
 setLargura(novaLargura){
  this.largura = novaLargura;
 }
}

//Criando um objeto do "tipo" Retângulo
const ret1 = new Retangulo(10, 15);

function displayRet(retangulo){
console.table(retangulo);
console.log(`comprimento = ${retangulo.comprimento}`);
console.log(`largura = ${retangulo.largura}`);
console.log(`area = ${retangulo.obterArea()}`);
console.log(`perimetro = ${retangulo.obterPerimetro()}`);
}
displayRet(ret1);
ret1.setComprimento(20)
displayRet(ret1);
ret1.setLargura(20);
displayRet(ret1);
