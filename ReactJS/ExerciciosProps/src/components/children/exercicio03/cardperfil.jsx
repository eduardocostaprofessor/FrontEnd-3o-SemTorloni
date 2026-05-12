
// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.

import "./cardperfil.css"

export const Cardperfil = ({nome, idade, profissao}) => {
    return (
        <article className="card-perfil">
            <span className="card-perfil__title">Nome: </span> <span className="card-perfil__description">{nome}</span><br />
            <span className="card-perfil__title">Idade: </span> <span className="card-perfil__description">{idade}</span><br />
            <span className="card-perfil__title">Profissão: </span> <span className="card-perfil__description">{profissao}</span>
        </article>
    )
}