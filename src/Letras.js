

export default function Letras(props) {
    function desabilitaLetra(array, index) {
        const novoArray = [...array]
        novoArray[index] = true
        return novoArray
    }
    return (
        <div className="letras">
            <ul>
                {props.arrayDeLetras.map((l, i) => <li key={l}><button
                    onClick={() => {
                        props.setHabilitaBotao(desabilitaLetra(props.habilitaBotao, i))
                        props.setPalavraEscolhidaCriptografada(props.mudaPalavra(l))
                    }}
                    className={props.habilitaBotao[i] ? 'disabled' : 'abled'}
                    disabled={props.habilitaBotao[i]}>{l}</button></li>)}
            </ul>
        </div>
    )
}