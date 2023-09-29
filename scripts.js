// Função para exibir o vídeo no modal
function showVideo(videoSrc) {
    var popupContainer = document.getElementById("popup-container");
    var iframe = document.querySelector(".popup-video iframe");
    iframe.src = videoSrc;
    popupContainer.style.display = "block";
}

// Função para fechar o modal
function hideVideo() {
    var popupContainer = document.getElementById("popup-container");
    var iframe = document.querySelector(".popup-video iframe");
    iframe.src = "";
    popupContainer.style.display = "none";
}
