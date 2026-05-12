import { useState } from "react"

export const Botao2 = ({ texto, cor }) => {
    const [novaCor, setNovaCor] = useState(cor)
    const [numeroCor, setNumeroCor] = useState(0)

    function trocaCor() {

        const proximoNumero = numeroCor + 1

        setNumeroCor(proximoNumero)

        if (proximoNumero == 1) {
            setNovaCor("blue")

        } else if (proximoNumero == 2) {
            setNovaCor("yellow")

        } else {
            setNovaCor("red")
            setNumeroCor(0)
        }
    }

    return (
        <button
            onClick={trocaCor}
            style={{ backgroundColor: novaCor }}
        >
            {texto}
        </button>
    )
}