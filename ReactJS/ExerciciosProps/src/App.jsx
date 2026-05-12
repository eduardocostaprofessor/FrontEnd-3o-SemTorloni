import "./App.css";
import { Cardperfil } from "./components/children/exercicio03/cardperfil";
import MyComponent from "./components/children/mycomponent";
import Saudacao from "./components/exercicio01/saudacao";
import Produto from "./components/exercicio02/produto";
import { Botao } from "./components/exercicio04/botao";
import { Botao2 } from "./components/exercicio04/botao2";
import { Card } from "./components/exercicio07/Card";
import { ItemLoja } from "./components/exercicio10/itemLoja";

const App = () => {
  // variável array de objetos, no futuro vem da API
  const pessoas = [
    {
      id: 1,
      nome: "Lucas Souza",
      idade: 17,
      profissao: "Estudante",
    },
    {
      id: 2,
      nome: "Nathan Policarpo",
      idade: 18,
      profissao: "Engenheiro",
    },
    {
      id: 30,
      id: 30,
      nome: "Lívia Caires",
      idade: 17,
      profissao: "Nutricionista",
    },
    {
      id: 40,
      nome: "Mayara Gussonato",
      idade: 18,
      profissao: "Jogadora Futebol",
    },
    {
      id: 900,
      nome: "Luis Oliva",
      idade: 17,
      profissao: "Engenheiro de Software",
    },
  ]; //fim do array de objetos

  return (
    //  pessoas.map((p)=>{
    //   return <Cardperfil
    //           key={p.id}
    //           nome={p.nome}
    //           idade={p.idade}
    //           profissao={p.profissao}
    //         />
    //  })

    // <>
    //   {/* <Saudacao nome="Eduardo" />
    // <Saudacao nome="Maria" />
    // <Saudacao nome="Lucas" /> */}
    //   <MyComponent>
    //     <Saudacao nome="Lucas" />
    //     <Produto
    //       nome="Pão Francês"
    //       preco={3.790987}
    //       descricao="Paozinho quentinho, saiu direto do forno para a sua mesa!"
    //     />

    //     {/* Card Perfil */}
    //   </MyComponent>

    //     <Cardperfil nome="Eduardo" idade={43} profissao="Instrutor SENAI" />
    //
    // <Card>
    //   <Botao cor="red" texto="Texto do Botão" />
      
    //   <Botao cor="green" texto="Texto do Botão" />
      
    //   <p>Lorem ipsum dolor, </p>

    //   <Botao2 texto="Cores" cor="purple"/>
    // </Card>
      <>
      <Card>
        <ItemLoja nome="Camisa Polo" preco={79.90} categoria="Vestuário" estoque={5}/>
      </Card>
      <Card>
        <ItemLoja nome="Tênis Nike" preco={479.90} categoria="Vestuário" estoque={0}/>
      </Card>
      </>

  );
};

export default App;
