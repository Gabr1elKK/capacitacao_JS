//Como o Do While não é frequentemente usado seja criativo e crie um exemplo de uso para ele

let cafe = 0;

do {
  console.log("Debugando a vida... " + cafe + " xícaras de café e contando.");
  cafe++;
} while (cafe < 7 && Math.random() < 0.95);

console.log("Fim do expediente ou coma cafeínico? Quem sabe! Nível de cafeína atingido: " + cafe + ".");

if (cafe >= 7) {
  console.log("Parabéns! Você alcançou o nirvana do desenvolvedor. Ou um ataque cardíaco. Um dos dois.");
} else {
  console.log("Ah, desistiu cedo. O código ainda tem bugs que nem você consegue ver.");
}