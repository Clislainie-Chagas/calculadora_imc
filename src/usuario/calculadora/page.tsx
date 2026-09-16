'use client'
import { useState } from "react"
import "../../style.css"
import "tailwindcss"

function Calculadora() {

    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [resultado, setResultado] = useState("")

    function calcularIMC() {

        const p = parseFloat(peso)
        const a = parseFloat(altura)

        if (!isNaN(p) && !isNaN(a) && a > 0) {
            const imc = p / (a * a)
            if (imc < 18) {
                setResultado("Abaixo do peso")
            } else if (imc >= 18 && imc < 25) {
                setResultado("Peso normal")
            } else if (imc >= 25 && imc < 30) {
                setResultado("Sobrepeso")
            } else if (imc >= 30 && imc < 35) {
                setResultado("Obesidade grau 1")
            } else {
                setResultado("Obesidade grau 2")
            }
        } else {
            setResultado("Por favor, insira valores válidos para peso e altura.")
        }
        setPeso("")
        setAltura("")
    }

    return (
        <div className="box-principal" >
            <div className="box-secundary">
                <p>Digite seu peso</p>
                <input value={peso} onChange={e => setPeso(e.target.value)}
                    type="number" placeholder="Exemplo: 60" /> kg <br /><br />

                <p>Digite sua altura</p>
                <input value={altura} onChange={e => setAltura(e.target.value)}
                    type="text" placeholder="Exemplo: 1.75" /> m <br /><br />

                <div className="resultado">

                    <button onClick={calcularIMC} className="botao">
                        Calcular
                    </button><br />

                    <span className="result">Resultado: {resultado}</span>
                </div>
            </div>
        </div>
    )
}

export default Calculadora