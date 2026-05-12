import { useEffect, useState } from "react";
import "./ciclodevida.css";

export default function CicloDeVida() {
  const [contador, setContador] = useState(0);
  //quando o componente é montado
    useEffect(() => {
        console.log("Componente MONTADO");
        
        // Para o componente desmontado(ciclo de vida), utiliza-se um return com uma função
        return () =>{
            console.log("Componente DESMONTADO");
            
        }
        
    }, [])

    useEffect(() => {
        console.log("Componente ATUALIZADO");
        console.log(`Valor do contador ${contador}`);
        
    },[contador])
    

  return (
    <>
      <h1>Contador: {contador}</h1>
      <button onClick={() => {
        setContador(contador + 1);
      }}>Contar</button>
    </>
  );
}
