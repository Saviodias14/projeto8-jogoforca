import { useState } from "react"
export default function Chute(props) {
    const [palavraDoInput, setPalavraDoInput] = useState('')

    const pegaPalavra = (event) => {
        const {value} = event.target
        setPalavraDoInput(()=>{
            const novoArray = value
            return novoArray
        })
    }
    console.log(palavraDoInput)

    return (
        <div className="chutar">
            <p>Já sei a palavra!</p>
            <input dta-test="guess-input" name="chute" value={palavraDoInput} onChange={pegaPalavra} disabled={props.habilitaBotao.includes(false)?false:true}></input>
            <button data-test="guess-button" onClick={()=>{
                setPalavraDoInput('')
                props.setPalavraEscolhidaCriptografada(props.palavraChutada(palavraDoInput))}}>Chutar</button>
        </div>
    )
}