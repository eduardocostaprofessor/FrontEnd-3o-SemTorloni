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

// Retornar todas as camisetas do perfil feminino: "F"

// const camisetasFemininas = estoque.filter((camiseta) => {
//   return camiseta.perfil == "F";
// });

// console.log(camisetasFemininas);
// let qtdPromocao = 0;
// const produtosPromocao = estoque.filter((p)=>{
//   if(p.promocao == true) {
//     qtdPromocao += p.quantidade;
//   }
//   return p.promocao == true;
// });
// console.log(`Quantidade de produtos em promoção: ${qtdPromocao}`);

// console.log(produtosPromocao);


// Retornar todas as camisetas em promoção













const produtosPromocao = estoque.filter((p)=>{
  return p.promocao == true;
});

let qtdPromocao = 0;
produtosPromocao.forEach((p) => {
    qtdPromocao += p.quantidade;
});

console.log(`Quantidade de produtos em promoção: ${qtdPromocao}`);
console.log(produtosPromocao);