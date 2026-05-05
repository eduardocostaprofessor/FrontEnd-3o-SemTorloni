const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    800,
    500,
    9876,
    99,
    134
];
console.log(`Array original: ${numeros}`);

// Rodar o map gerando um novo array com o dobro dos números do original
const numerosMultiplicados = numeros.map((num) => {
    return num * 2;
});

console.log();//pula uma linha
console.log(`Array Modificado:`);
console.log();//pula uma linha

let textoResultado = "";
numerosMultiplicados.forEach((num) => {
    textoResultado += `${num} | `; //acumula texto em uma string (sem pular linha)
    
});

// remover o último pipe
// str.substring(0,str.length - 1);
textoResultado = textoResultado.substring(0, textoResultado.length -3);
console.log(textoResultado);//mostra o texto completo