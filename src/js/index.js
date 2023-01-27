/**
 * OBJETIVO 1 - quando o usuario clicar no botao de veja o trailer, devemos
 * abrir a modal com o video do trailer
 *          passo 1 = pegar o elemento que representa o botao 
 *          passo 2 = identificar quando o usuario clicar no botao
 *          passo 3 = pegar o elemento da modal
 *          passo 4 = abrir a modal
 * 
 * OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
 *          passo 1 = pegar o elemento fechar modal
 *          passo 2 = identificar quando o usuario clicar no x
 *          passo 3 = fechar a modal
 */

const botaoTrailer = document.querySelector('.botao-trailer')
const fecharModal = document.querySelector('.fechar-modal')
const modal = document.querySelector('.modal')
const video = document.getElementById("video")
const linkVideo = video.src

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => { 
    alternarModal()
    video.setAttribute("src", linkVideo)
})


fecharModal.addEventListener("click", ()=>{
    alternarModal()
    video.setAttribute("src", "")
})

