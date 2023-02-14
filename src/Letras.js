
export default function Letras(props){
    return(
        <div className="letras">
            <ul>
            {props.arrayDeLetras.map((l)=><li><button className={props.classeDeHabilitacao} disabled={props.disabled}>{l}</button></li>)}
            </ul>
        </div>
    )
}