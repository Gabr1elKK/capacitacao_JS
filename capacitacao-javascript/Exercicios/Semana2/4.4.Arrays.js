//Declare um array que contenha todas suas matérias do semestre
//e outro que contenha todas as notas que você tirou nelas.

let disciplinas = ["MAT00A", "IRN001", "ELTA01A", "ELTD01A", "MODMAT00A", "ELTD11A", "ECOP13A", "IESTI01"];
let notas = [6.0, 8.0, 6.4, 7.2, 10.0, 10.0, 8.7, 7.9];

console.log("Disciplinas: ");
for (let i in disciplinas){
    console.log("  ", disciplinas[i]);
}

console.log("\nNotas: ");
for (let j in notas){
    console.log("  ", notas[j]);
}