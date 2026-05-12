// 10 ) Crie um componente chamado ItemLoja que receba:
// nome
// preco
// categoria
// estoque
// Regras:
// Se o estoque for maior que 0, mostrar: Produto disponível
// Caso contrário: Produto indisponível

import "./itemLoja.css";
export const ItemLoja = ({ nome, preco, categoria, estoque }) => {
  
    if (estoque > 0) {
    return (
    <p>
      Produto: {nome} <br />
      Preço: {preco} <br />
      Categoria: {categoria} <br />
      Quantidade Estoque: {categoria} <br />
      Situação: Produto Disponível
    </p>)
  } else {
    return (
      <p>
        Produto: {nome} <br />
        Preço: {preco} <br />
        Categoria: {categoria} <br />
        Quantidade Estoque: {categoria} <br />
        Situação: <strong>Produto Indisponível</strong>
      </p>
    )
  }
};
