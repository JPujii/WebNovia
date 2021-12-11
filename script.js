let boton = document.getElementById("boton2");
boton.addEventListener("click", onClick);
let affirmation = document.getElementById("boton1");
affirmation.addEventListener("click", onClickYes);

function onClick() {
    boton.style.position = "absolute";
    boton.style.top = Math.random() * 85 + "%";
    boton.style.left = Math.random() * 85 + "%";
}

function onClickYes() {
    window.alert("FELICIDADES, AHORA SOMOS PAREJA");
}