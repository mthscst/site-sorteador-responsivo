const buttonActive = document.querySelector(".button")

function playDraw(){
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert (result)
}


buttonActive.addEventListener("click", playDraw)