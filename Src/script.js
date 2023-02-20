console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer")
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal")
const LinkDoVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk";

function alternarModal() {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", LinkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});






