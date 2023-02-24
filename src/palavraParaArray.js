export default function palavraParaArray(palavra){
    let arrayDaPalavra=[]
      for(let i=0; i<palavra.length;i++){
        arrayDaPalavra.push(palavra[i])
      }
      return arrayDaPalavra
}