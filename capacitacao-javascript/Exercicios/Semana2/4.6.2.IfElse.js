//Faça um condicional para verificar se a nota de calculo deu para passar

// DESAFIO: dado um valor em R$, verificar se você precisa de moedas ou não
// Dica: tenta ver as casas decimais

let nota = 5.5;

if (nota >= 6){
    console.log("Graças a deus foi");
}else{
    console.log("Mais um semestre de puro sofrimento vem aí");
}

console.log("\n");

let dinheiro = 8.00, bolo = 3.50;

if (dinheiro - (bolo * 2) != 0.00){
    if (dinheiro < (bolo * 2)){
        console.log("Você precisa de", ((bolo * 2) - dinheiro), "em moedas");
    }else{
        console.log("Você não precisa de moedas");
    }
}else{
    console.log("Você não precisa de moedas");
}
