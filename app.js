console.log("¡Hola DWEC! Mi taller ya funciona.");

const boton = document.getElementById("boton");
const aviso = document.getElementById("aviso");

let contador = 0;

if (boton && aviso) {
    boton.addEventListener("click", function () {
        contador++;
        aviso.textContent = "Has pulsado el botón " + contador + " veces";
    });
}

const botonModo = document.getElementById("modonoche");

if (botonModo) {
    botonModo.addEventListener("click", function () {
        document.body.classList.toggle("tema-claro");

        if (document.body.classList.contains("tema-claro")) {
            botonModo.textContent = "🌙";
        } else {
            botonModo.textContent = "☀️";
        }
    });
}