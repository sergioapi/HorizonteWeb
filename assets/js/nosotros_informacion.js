/* USO DE JES6:
    - Funciones arrow.
    - Desestructuración de objetos. Ejemplo: const { scrollHeight, clientHeight } = textoElement;
    - Uso de let y const en lugar de var para declarar variables.
*/

const textos = [
    "Somos una firma internacional de servicios legales y fiscales.",
    "Asesoramos a nivel local, regional y global.",
    "Abarcamos todos los ángulos del derecho de los negocios.",
    "Nuestra actividad se centra en el asesoramiento integral a empresas de todo tipo.",
    "Dominamos los ámbitos contable, fiscal, laboral, mercantil, jurídico y financiero."
];

let currentIndex = 0;
const textoElement = document.querySelector('.texto-tecleado');
const cursorElement = document.querySelector('.cursor');

const mostrarSiguienteTexto = () => {
    if (currentIndex >= textos.length) {
        currentIndex = 0;
    }
    escribirTexto(textos[currentIndex]);
    currentIndex++;
}

const escribirTexto = (texto) => {
    textoElement.textContent = '';
    let index = 0;
    let totalLetters = 0;
    const intervalo = setInterval(() => {
        textoElement.textContent += texto[index];
        totalLetters++;
        const { scrollHeight, clientHeight } = textoElement;
        textoElement.style.width = scrollHeight > clientHeight ? "100%" : `${totalLetters * 100 / texto.length}%`;
        index++;
        if (index >= texto.length) {
            clearInterval(intervalo);
            setTimeout(borrarTexto, 2000);
        }
    }, 100);
}

const borrarTexto = () => {
    let index = textoElement.textContent.length;
    const intervalo = setInterval(() => {
        textoElement.textContent = textoElement.textContent.slice(0, index);
        index--;
        textoElement.style.width = `${(index + 1) * 100 / textos[currentIndex - 1].length}%`;
        if (index < 0) {
            clearInterval(intervalo);
            setTimeout(mostrarSiguienteTexto, 1000);
        }
    }, 70);
}

mostrarSiguienteTexto();
