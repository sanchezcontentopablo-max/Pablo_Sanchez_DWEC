console.log("¡Hola DWEC! Mi taller ya funciona.");

// ---------- Contador de clics ----------

const boton = document.getElementById("boton");
const aviso = document.getElementById("aviso");

let contador = 0;

if (boton && aviso) {
    boton.addEventListener("click", function () {
        contador++;
        const veces = contador === 1 ? "vez" : "veces";
        aviso.textContent = "Has pulsado el botón " + contador + " " + veces;
    });
}

// ---------- Modo noche ----------
// El tema elegido se guarda en localStorage para que se mantenga al cambiar
// de página o volver otro día. Si el usuario no ha elegido nunca, se respeta
// la preferencia de su sistema operativo.

const CLAVE_TEMA = "tema";
const botonModo = document.getElementById("modonoche");

function leerTemaGuardado() {
    try {
        return localStorage.getItem(CLAVE_TEMA);
    } catch (error) {
        return null; // navegación privada o almacenamiento bloqueado
    }
}

function guardarTema(tema) {
    try {
        localStorage.setItem(CLAVE_TEMA, tema);
    } catch (error) {
        // Si no se puede guardar, el tema funciona igual durante la visita.
    }
}

function aplicarTema(claro) {
    document.body.classList.toggle("tema-claro", claro);
    if (botonModo) {
        botonModo.textContent = claro ? "🌙" : "☀️";
        botonModo.setAttribute("aria-label", claro ? "Activar modo noche" : "Activar modo claro");
    }
}

const temaGuardado = leerTemaGuardado();
const sistemaClaro = window.matchMedia("(prefers-color-scheme: light)").matches;
aplicarTema(temaGuardado ? temaGuardado === "claro" : sistemaClaro);

if (botonModo) {
    botonModo.addEventListener("click", function () {
        const claro = !document.body.classList.contains("tema-claro");
        aplicarTema(claro);
        guardarTema(claro ? "claro" : "oscuro");
    });
}
