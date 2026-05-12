import { useState } from "react";
import "./cadfruta.css";

function CadFruta() {
  // states, variáveis e funções

  // state do formulário
  const [fruta, setFruta] = useState(""); // cria um state string vazia
  const [quantidade, setQuantidade] = useState(0); // cria um state string vazia
  const [arrFrutas, setArrFrutas] = useState([
    { id: 1, nome: "Abacaxi", quantidade: 10 },
    { id: 2, nome: "Mamão", quantidade: 20 },
  ]); //cria um state array vazio

  function Cadastrar(e) {
    e.preventDefault();//evita o submit do formulário
    //cadastra os dados no state
    setArrFrutas([
                ...arrFrutas,
                { id: Date.now(), nome: fruta, quantidade: quantidade }
              ]);

    
    limparFormulario() // Após cadastrar, limpar os campos do formulário

    return false;
  }

  // Limpa os states
  function limparFormulario() {
    setFruta("")
    setQuantidade(0)
  }


  return (
    <section className="sessao-cadastro">
      <h1>Cadastro</h1>
      <form action="" method="post" onSubmit={Cadastrar} >
        <fieldset className="cadastro">
          <label htmlFor="fruta" className="cadastro__rotulo">
            Digite o nome da Fruta
          </label>
          <input
            type="text"
            id="fruta"
            className="cadastro__entrada"
            placeholder="Digite o nome da fruta"
            onChange={(e) => {
              setFruta(e.target.value);
            }}
          />
          <input
            type="number"
            id="qtdFruta"
            className="cadastro__entrada"
            placeholder="Digite a quantidade"
            onChange={(e) => {
              // let q = parseInt(e.target.value)//transforma o texto digitado em número
              setQuantidade(parseInt(e.target.value));
            }}
          />
          <button type="submit" className="cadastro__btn-cadastrar">Cadastrar</button>
          <br />
          <label htmlFor="">{fruta}</label>
        </fieldset>
      </form>
      <ul className="listagem">
        {arrFrutas.map((f) => {
          return (
            <li key={f.id}>
              Fruta: {f.nome} | Quantidade: {f.quantidade}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CadFruta;
