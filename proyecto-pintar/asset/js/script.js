

function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

    // Pintar en verde apenas carga la página
    pintar(ele); // usa el valor por defecto "green"

  // Cambiar a amarillo al hacer clic
ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
});