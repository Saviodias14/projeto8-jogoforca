export default function sorteiaPalavra(array){
    const numeroAleatorio = (Math.random() * (array.length))
    return array[Math.floor(numeroAleatorio)]
}