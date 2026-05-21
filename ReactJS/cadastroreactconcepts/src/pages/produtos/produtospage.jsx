import { useEffect, useState } from "react";
import "./produtospage.css"; //node_modules
import fotoProduto from "/images/hero.png"; // o barra já é a pasta public
import api from "../../Services/services";


export const ProdutosPage = () => {
  //   states - campos do formulário
  const [listaProdutos, setListaProdutos] = useState([]);
  
  const [id, setId] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [imagem, setImagem] = useState("hero.png");
  const [editar, setEditar] = useState(false);

  // functions
  // carregado
  useEffect(() => {
    getDados();
  }, []);


 //Get Dados
  const getDados = async () => {
    try {
      const retornoAPI = await api.get("/produtos")
      const dados = await retornoAPI.data;
      setListaProdutos(dados); //guarda os dados no state
    } catch (error) {
      console.log(error);
    }
  };


  const cadastrarProduto = async (e) => {
    e.preventDefault(); //Não deixa o formulário ser postado

    // validar os dados
    if (
      titulo.trim().length == 0 ||
      descricao.trim().length == 0 ||
      isNaN(preco) ||
      preco == 0
    ) {
      //se deixou de preencher algum campo
      alert("Preencha todos os campos corretamente");
      return false;
    }

    //cadastrar na api
    const objProduto = {
      titulo: titulo,
      descricao: descricao,
      preco: preco,
      imagem: imagem,
    };

    // console.log(objProduto);
    const retornoAPI = await api.post("/produtos", objProduto);
    const produtoCadastrado = await retornoAPI.data;
    setListaProdutos([...listaProdutos, produtoCadastrado]);

    // limpar o formulário para o próximo cadastros
    limparFormulario();
  }; //fim do cadastrar

  function limparFormulario() {
    setId(0);
    setTitulo("");
    setDescricao("");
    setPreco(0);
  }

  // Deletar
  const deletar = async (id) => {
    // perguntar pro usuário se quer apagar realmente o produto
    if( !confirm("Você realmente quer apagar o produto?") )
        return false

    try {
      const retornoAPI = await api.delete(`/produtos/${id}`)
      //gera uma nova lista sem o produto apagado (remove o produto da lista)
      const novaLista = listaProdutos.filter((prod) => {
        return prod.id != id;
      });

      //se apagou avisa o usuário
      if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
        alert("Produto apagado com sucesso!");
        setListaProdutos(novaLista); //atualiza a lista no state
        //getDados(); //listar dados
      } else {
        alert("Erro ao cadastrar o produto");
      }
    } catch (error) {}
  };

  const editarProduto = async (e) => {
    e.preventDefault()
    // validar formmulário
    if (
      titulo.trim().length == 0 ||
      descricao.trim().length == 0 ||
      isNaN(preco) ||
      preco == 0
    ) {
      //se deixou de preencher algum campo
      alert("Preencha todos os campos corretamente");
      return false;
    }
    // criar o objeto Cadastro
    const objProduto = {
      titulo: titulo,
      descricao: descricao,
      preco: preco,
      imagem: imagem,
    };
    try {
      // chamar o fetch com o verbo PUT
      const retornoAPI = await api.put(`/produtos/${id}`, objProduto);
      console.log(retornoAPI);
      
      if(retornoAPI.status == 200){
        getDados()
        limparFormulario()
        setEditar(false)
        
      } else {
        alert("Erro ao recarregar os dados")
      }
    } catch (error) {
      alert("Deu erro ao alterar os dados, possível servidor fora do ar!")
    }
  } //fim função

  return (
    <>
      <h1>Página de Produtos</h1>

      <form action="" onSubmit={editar ? editarProduto : cadastrarProduto}>
        <div className="linha">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            placeholder="titulo"
            id="titulo"
            value={titulo}
            onChange={(e) => {
              setTitulo(e.target.value);
            }}
          />
        </div>
        <div className="linha">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            placeholder="descricao"
            id="descricao"
            value={descricao}
            onChange={(e) => {
              setDescricao(e.target.value);
            }}
          />
        </div>
        <div className="linha">
          <label htmlFor="preco">Preço</label>
          <input
            type="text"
            placeholder="preco"
            id="preco"
            value={isNaN(preco) ? 0 : preco}
            onChange={(e) => {
              setPreco(parseFloat(e.target.value));
            }}
          />
        </div>
        <br />
        {/* Só aparece na tela se o editar for true */}
        {editar && (
          <button
            onClick={() => {
              setEditar(false);
              limparFormulario();
            }}
          >
            Cancelar
          </button>
        )}

        <button>Salvar</button>
      </form>
      <br />
      <br />
      <section className="lista-produtos">
        {listaProdutos.map((p) => {
          return (
            <article key={p.id} className="card-produto">
              <img className="foto-produto" src={fotoProduto} alt="" />
              <h2>{p.titulo}</h2>
              <p>{p.preco}</p>
              <p>{p.descricao}</p>

              {/* Apagar */}
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  deletar(p.id);
                }}
              >
                Apagar
              </a>
              {/* Editar */}
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();

                  // preenche o formulário
                  setEditar(true);
                  setId(p.id)
                  setTitulo(p.titulo);
                  setDescricao(p.descricao);
                  setPreco(p.preco);
                }}
              >
                Editar
              </a>
            </article>
          );
        })}
      </section>
    </>
  );
};
