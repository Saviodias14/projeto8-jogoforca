export default function Jogo(props) {
    return (
        <div className="jogo">
            <img data-test='game-image' src={props.imagem} alt="Imagem da forca"/>
            <div>
                <button data-test='choose-word' onClick={props.iniciaJogo}>Escolher Palavra</button>
                <p data-test='word' className={props.fimDeJogo}>{props.palavraEscolhida}</p>
            </div>
        </div>
    )
}