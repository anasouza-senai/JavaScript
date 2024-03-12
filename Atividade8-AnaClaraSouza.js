class Aluno {
  constructor(ra, nome, dataNasc, curso, data) {
    this.ra = ra;
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.curso = curso;
    this.data = data;
  }
  calcularIdade() {
    return 2024 - this.dataNasc;
  }
  apresentar() {
    console.log(`Olá, eu sou ${this.nome}. Estou cursando ${this.curso}`);
  }
}

const aluno1 = new Aluno(
  4143,
  "Ana Clara",
  2007,
  "Desenvolvimento de Sistemas"
);
aluno1.apresentar();
