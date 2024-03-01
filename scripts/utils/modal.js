function modal(imgPath = "") {
    let modal = document.createElement("section");
    modal.classList.add("modalSection");
    modal.id = "modal"

    modal.onclick = function modalClose() {
        modal.remove()
    }
    
    let modalImg = document.createElement("img")
    modalImg.src = imgPath
    
    modal.appendChild(modalImg)
    document.body.appendChild(modal)
}