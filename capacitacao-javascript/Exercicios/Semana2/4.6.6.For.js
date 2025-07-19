//Percorra o vetor de notas que voce criou em 4.4.Arrays.js e calcule a média delas
//Após sair do for imprima sua média

//DESAFIO: copie também o vetor de matérias, utilize o for para percorrer os dois vetores
//e imprimir a matéria e a nota correspondente

let notas = [6.0, 8.0, 6.4, 7.2, 10.0, 10.0, 8.7, 7.9];
let media = 0;

for (let i in notas){
    media += notas[i];
}

media = media / notas.length;

console.log("A média das notas nesse semestre é: ", media);