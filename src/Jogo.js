export default function Jogo(props) {
    return (
        <div className="jogo">
            <img src={props.imagem} alt="Imagem da forca"/>
            <div>
                <button onClick={props.iniciaJogo}>Escolher Palavra</button>
                <p>{props.palavraEscolhida}</p>
            </div>
        </div>
    )
}