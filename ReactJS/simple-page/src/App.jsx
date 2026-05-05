import './App.css';

function App() {
  return(
    
    //  <!-- block/bloco/componente -->
    <nav className="mae">
      <a href="#" className="mae__filho">Home</a>
      <a href="#" className="mae__filho">Quem Somos</a>
      <a href="#" className="mae__filho">Contato</a>
      <a href="#" className="mae__filho mae__filho--success">Entrar</a>
      <a href="#" className="mae__filho mae__filho--button-default">Cadastrar</a>

      {/* <!-- componente/bloco --> */}
      <div className="card-perfil">
        {/* <!-- elemento/element --> */}
        <img
          className="card-perfil__image"
          src="./images/mulher-perfil.avif"
          alt="foto de perfil do usuário"
        />
      </div>
    </nav>


  );
}

export default App;