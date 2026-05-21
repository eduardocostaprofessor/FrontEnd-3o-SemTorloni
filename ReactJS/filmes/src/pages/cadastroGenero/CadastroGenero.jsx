import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./CadastroGenero.css";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react";
import api from "../../services/services";

const CadastroGenero = () => {

  // states e variáveis
  const [valor, setValor] = useState("");
  const [editar, setEditar] = useState(false);
  const [listaGeneros, setListaGeneros] = useState([])

  // ciclo de vida e funções

  // POST
  const cadastrarGenero = async (e) => {
    e.preventDefault();
    // validação dos dados preenchidos
    if (valor.trim().length == 0) {
      alert("Gênero deve ser preenchido antes de cadastrar!");
      return false;
    }

    const objCadastro = {
      nome: valor,
    };

    try {
      // Cadastra na api, no endpoint do swagger
      const retornoAPI = await api.post("/Genero", objCadastro);

      if (retornoAPI.status == 201) {
        alert("Gênero cadastrado com sucesso!");
        // limpar os campos
        limparFormulario();
        // chamar o getGeneros
        getGeneros()
      } else {
        alert("Houve algum prolema ao cadastrar!");
      }

      // chamar o get!
    } catch (error) {
      alert("Erro na chamada da API");
      console.log(error);
    }
  }; //fim função cadastrarGenero

  const limparFormulario = () => {
    setValor("");
  };


  const editarGenero = () => {
    
    alert("Função Editar Gênero em desenvolvimento")
  }

  const excluirGenero = async (item) => {
    console.log(item);
    
    try {
      const retornoAPI = await api.delete(`/Genero/${item.id}`)
      // const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)//pra rodar com api local
      console.log(retornoAPI);

      getGeneros()//atualiza a lista
      
    } catch (error) {
      
    }
  }

  useEffect( () => {
    // chamar os dados da api
    getGeneros()
  }, [])

  const getGeneros = async () => {
      
    try {
        const retornoAPI = await api.get("/Genero")//chama a api
        const dados = retornoAPI.data//extrai os dados retornados
        setListaGeneros(dados)//guarda os dados no state (já exibe na lista)

      } catch (error) {
        alert("Erro ao retornar os dados")
      }
  }
  // O jsx
  return (
    <>
      <Header />
      <main>
        <Cadastro
          tituloCadastro="Cadastro de Gêneros"
          visibilidade="none"
          placeholder="gênero"
          valor={valor}
          // função que muda o state
          setValor={setValor}
          funcCadastro={editar ? editarGenero :  cadastrarGenero}
        />

        <Lista
          tituloLista="Lista de Gêneros"
          visibilidade="none"
          //Chama o método para validar:
          lista={listaGeneros}
          //Identifica o tipo de lista:
          tipoLista="genero"
          funcExcluir={excluirGenero}
          funcEditar={editarGenero}

        />
      </main>
      <Footer />
    </>
  );
};

export default CadastroGenero;
