import Jogo from "./Jogo";
import Letras from "./Letras";
const letras = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m'
,'n','o','p','q','r','s','t','u','v','w','x','y','z']

export default function App() {
  return (
    <div>
      <Jogo imagem='assets/forca0.png' palavraEscolhida='_ _ _ _ _ _ _ _'/>
      <Letras arrayDeLetras={letras} disabled={false} classeDeHabilitacao='abled'/>
    </div>
  );
}