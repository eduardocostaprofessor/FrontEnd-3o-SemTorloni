import "./App.css";
import Paragrafo from "./components/paragrafo/paragrafo";
import Title from "./components/title/title";
function App() {
  return (
    <>
      <Title nome="Eduardo" sobrenome="Costa" texto="Bem Vindo, sou Título" />
      <Title texto="Eu sou outro Título" />
      <Paragrafo textoParagrafo = "Lorem Ipsun dolor!!!" />
    </>
  );
}

export default App;
// criar um componente Title
