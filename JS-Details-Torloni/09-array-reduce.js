const estoque = [
  {
    descricao: "Camisa Polo",
    cor: "Verde",
    preco: 49.99,
    perfil: "M",
    quantidade: 10,
    promocao: false
  },
  {
    descricao: "Camisa Polo",
    cor: "Amarela",
    preco: 29.99,
    perfil: "F",
    quantidade: 15,
    promocao : true
  },
  {
    descricao: "Camisa Polo",
    cor: "Azul",
    preco: 29.99,
    perfil: "M",
    quantidade: 100,
    promocao : true
  },
  {
    descricao: "Camisa Polo",
    cor: "Roxa",
    preco: 49.99,
    perfil: "F",
    quantidade: 5,
    promocao : false
  },
];



// Reduz o array a um único elemento. No caso um somatório, por exemplo:
let totalPreco = 0;
let totalEstoque = estoque.reduce((total, produto) => {
    totalPreco += produto.preco * produto.quantidade;
    return total + produto.quantidade;
}, 0);

console.clear();
console.log(`Você tem um total de ${totalEstoque} produtos no estoque`);
console.log(`O valor total do seu estoque é R$${totalPreco.toFixed(2)}`);












console.clear();
let nome = "Eduardo";
let sobrenome = "Costa";
let idadeDele = 37;

let edu = {
nome,
sobrenome,
idade : idadeDele
};

console.log(edu);

