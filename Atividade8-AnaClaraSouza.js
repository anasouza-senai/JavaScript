// // class Aluno {
// //   constructor(ra, nome, dataNasc, curso, data) {
// //     this.ra = ra;
// //     this.nome = nome;
// //     this.dataNasc = dataNasc;
// //     this.curso = curso;
// //     this.data = data;
// //   }
// //   calcularIdade() {
// //     return 2024 - this.dataNasc;
// //   }
// //   apresentar() {
// //     console.log(`Olá, eu sou ${this.nome}. Estou cursando ${this.curso}`);
// //   }
// // }

// // const aluno1 = new Aluno(
// //   4143,
// //   "Ana Clara",
// //   2007,
// //   "Desenvolvimento de Sistemas"
// // );
// // aluno1.apresentar();

// //Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// // Crie um sorvete de morango grande
// // Crie um sorvete de chocolate pequeno
// // Crie um sorvete de melancia medio
// // Altere o preço do sorvete de morango grande para R$ 10,51

// class Sorvete {
//   constructor(sabor, preco, tamanho) {
//     this.sabor = sabor;
//     this.preco = preco;
//     this.tamanho = tamanho;
//   }
//   getPreco() {
//     return this.preco;
//   }
//   setPreco(novoPreco) {
//     return this.preco;
//   }
//   setPreco(novoPreco) {
//     this.preco = novoPreco;
//   }
//   pedido() {
//     console.log(
//       `O sorvete escolhido foi ${
//         this.sabor
//       }, no valor de R$${this.getPreco()} no tamanho ${this.tamanho}`
//     );
//   }
// }

// const morango = new Sorvete("Morango", 11, "G");
// const chocolate = new Sorvete("Chocolate", 12, "P");
// const melancia = new Sorvete("Melância", 2, "M");

// morango, pedido();
// chocolate.preco();
// melancia.preco();

// morango.setPreco(10.51);
// morango.pedido();

console.log("---------------------");

// var texto1 = "A arte é o refúgio dos desesperados!"
// var texto2 = "a arte é o refúgio dos desesperados!"

class stringComparador {
  static compareIgnoreCase(texto1, texto2) {
    return texto1.toLowerCase() === texto2.toLowerCase();
  }
}
var texto1 = "A arte é o refúgio dos desesperados!";
var texto2 = "a ARTE é o refúgio dos desesperados!";
console.log(stringComparador.compareIgnoreCase(texto1, texto2));

console.log("-----------------")

class ExtratorDeNumeros {
  static extrairNumeros(string) {
      const regex = /\d+/g;
      return string.match(regex).map(Number);
  }
}

// Exemplo de uso:
const stringExemplo = "Eu tenho 25 anos e meu número de telefone é (14)887566385.";
const numerosEncontrados = ExtratorDeNumeros.extrairNumeros(stringExemplo);
console.log(numerosEncontrados); 

console.log("---------------")

class InversorDeFrase {
  static inverterOrdemDasPalavras(frase) {
      const palavras = frase.split(" ");
  
      const palavrasInvertidas = palavras.reverse();
      
      const novaFrase = palavrasInvertidas.join(" ");
      
      return novaFrase;
  }
}

// Exemplo de uso:
const fraseOriginal = "Eu sou linda";
const fraseInvertida = InversorDeFrase.inverterOrdemDasPalavras(fraseOriginal);
console.log(fraseInvertida);