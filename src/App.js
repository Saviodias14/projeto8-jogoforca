import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";
import alfabeto from "./alfabeto";
import forca0 from './assets/forca0.png'
import forca1 from './assets/forca1.png'
import forca2 from './assets/forca2.png'
import forca3 from './assets/forca3.png'
import forca4 from './assets/forca4.png'
import forca5 from './assets/forca5.png'
import forca6 from './assets/forca6.png'
import sorteiaPalavra from "./palavraAleatoria";
import palavraParaArray from "./palavraParaArray";

function arrayDeClasses(length, bool) {
  let novoArray = []
  for (let i = 0; i < length; i++) {
    novoArray.push(bool)
  }
  return novoArray
}


export default function App() {
  const [palavraEscolhida, setPalavraEscolhida] = useState([])
  const [palavraEscolhidaCriptografada, setPalavraEscolhidaCriptografada] = useState('')
  const [habilitaBotao, setHabilitaBotao] = useState(arrayDeClasses(26, true))
  const [letrasUsadas, setLetrasUsadas] = useState('')
  const [erros, setErros] = useState(forca0)
  const [palavraSorteada, setPalavraSorteada] = useState('')


  function iniciaJogo() {
    setHabilitaBotao(arrayDeClasses(26, false))
    let sorteio = sorteiaPalavra(palavras)
    setPalavraSorteada(sorteio)
    let novaPalavra = underline(sorteio)
    setPalavraEscolhida(novaPalavra)
    setPalavraEscolhidaCriptografada(exibe(novaPalavra))
  }
  
  function underline(palavra) {
    let palavraExibida = []
    for (let i = 0; i < palavra.length; i++) {
      palavraExibida.push('_')
    }
    console.log(palavra)
    return palavraExibida
  }

  function exibe(palavra) {
    let palavraExibida = ''
    for (let i = 0; i < palavra.length; i++) {
      palavraExibida = palavraExibida+' '+palavra[i]
    }
    console.log(palavra)
    return palavraExibida
  }

function mudaPalavra() {
  if (palavraSorteada.includes(letrasUsadas)) {
    let arrayDaPalavra = palavraEscolhida
    for (let i = 0; i < palavraEscolhida.length; i++) {
      if (palavraSorteada[i] === letrasUsadas) {
        arrayDaPalavra[i] = letrasUsadas
      }
    }
    return exibe(arrayDaPalavra)
  }
  return palavraEscolhidaCriptografada
}

return (
  <div>
    <Jogo iniciaJogo={iniciaJogo} imagem={erros} palavraEscolhida={palavraEscolhidaCriptografada} />
    <Letras arrayDeLetras={alfabeto} habilitaBotao={habilitaBotao} setHabilitaBotao={setHabilitaBotao} setLetrasUsadas={setLetrasUsadas} mudaPalavra={mudaPalavra()} setPalavraEscolhidaCriptografada={setPalavraEscolhidaCriptografada} />
  </div>
);
}