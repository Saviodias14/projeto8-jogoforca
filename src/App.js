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
  const [erros, setErros] = useState(forca0)
  const [palavraSorteada, setPalavraSorteada] = useState('')
  const [fimDeJogo, setFimDeJogo] = useState('')


  function iniciaJogo() {
    setHabilitaBotao(arrayDeClasses(26, false))
    let sorteio = sorteiaPalavra(palavras)
    setPalavraSorteada(sorteio)
    let novaPalavra = underline(sorteio)
    setPalavraEscolhida(novaPalavra)
    setPalavraEscolhidaCriptografada(exibe(novaPalavra))
    setErros(forca0)
    setFimDeJogo('')
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
      palavraExibida = palavraExibida + ' ' + palavra[i]
    }
    console.log(palavra)
    return palavraExibida
  }

  function mudaPalavra(letraUsada) {
    let corDaPalavra
    if (palavraSorteada.includes(letraUsada)) {
      let arrayDaPalavra = palavraEscolhida
      for (let i = 0; i < palavraEscolhida.length; i++) {
        if (palavraSorteada[i] === letraUsada) {
          arrayDaPalavra[i] = letraUsada
        }
      }
      if(!arrayDaPalavra.includes('_')){
        corDaPalavra='verde'
        setFimDeJogo(corDaPalavra)
        setHabilitaBotao(arrayDeClasses(26, true))
      }
      return exibe(arrayDaPalavra)
    } else {
      let imagem = erros
      if(imagem===forca5){
        corDaPalavra='vermelho'
        setFimDeJogo(corDaPalavra)
        setHabilitaBotao(arrayDeClasses(26, true))
      }
      switch (erros) {
        case forca0:
          setErros(forca1)
          break
        case forca1:
          setErros(forca2)
          break
        case forca2:
          setErros(forca3)
          break
        case forca3:
          setErros(forca4)
          break
        case forca4:
          setErros(forca5)
          break
        case forca5:
          setErros(forca6)
          break
        default:
          break
      }
    }
    if(corDaPalavra==='vermelho'){
      return palavraSorteada
    }
    return palavraEscolhidaCriptografada
  }

  return (
    <div>
      <Jogo iniciaJogo={iniciaJogo} imagem={erros} palavraEscolhida={palavraEscolhidaCriptografada} fimDeJogo={fimDeJogo} />
      <Letras arrayDeLetras={alfabeto} habilitaBotao={habilitaBotao} setHabilitaBotao={setHabilitaBotao} mudaPalavra={mudaPalavra} setPalavraEscolhidaCriptografada={setPalavraEscolhidaCriptografada} />
    </div>
  );
}