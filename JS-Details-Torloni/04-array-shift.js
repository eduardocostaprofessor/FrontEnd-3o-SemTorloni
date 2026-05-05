let frutasVermelhas = [];
// frutasCitricas[0] = "Morango";
frutasVermelhas.push("Morango");
frutasVermelhas.push("Maçã");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Tomate");
frutasVermelhas.push("Cereja");

console.log(frutasVermelhas);
let fuitRemovedFromFirstArray = frutasVermelhas.shift();//remove o primeiro item do array
console.log(`${fuitRemovedFromFirstArray} foi removido da cesta!`);
console.log(frutasVermelhas);
