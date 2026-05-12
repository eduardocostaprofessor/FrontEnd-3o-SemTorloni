// 07) Crie um componente chamado Card utilizando props.children.
// O componente deve criar uma caixa estilizada e mostrar
//  qualquer conteúdo dentro dela.
import "./Card.css"
export const Card = ({children}) => {
  return <div className="Card">{children}</div>;
};
