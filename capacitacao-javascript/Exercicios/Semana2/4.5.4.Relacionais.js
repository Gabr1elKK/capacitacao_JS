//Crie um objeto pessoa com as propriedades nome, idade e altura. Crie duas variáveis Pessoa1 e Pessoa2, e atribua valores diferentes para cada uma das propriedades.
//Compare as variáveis Pessoa1 e Pessoa2 com os operadores relacionais e mostre no console o resultado de cada comparação.

const pessoa1 = {
    nome: "Gabriel",
    idade: 22,
    altura: 1.70,
};

const pessoa2 = {
    nome: "Higor",
    idade: 25,
    altura: 1.70,
};

if (pessoa1.idade < pessoa2.idade){
    console.log(pessoa2.nome, "é mais velho que", pessoa1.nome);
}

if (pessoa1.altura == pessoa2.altura){
    console.log(pessoa1.nome, "e", pessoa2.nome, "possuem a mesma altura");
}

if (pessoa1.nome != pessoa2.nome){
    console.log(pessoa1.nome, "e", pessoa2.nome, "possuem nomes diferentes");
}