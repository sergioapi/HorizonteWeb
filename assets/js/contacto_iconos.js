// Obtener todas las imágenes de icono
var iconos = document.querySelectorAll(".icono img");

// Iterar sobre cada icono y agregar el evento de mouseover
iconos.forEach(function(icono) {
    icono.addEventListener("mouseover", function() {
        // Cambiar la ruta de la imagen a la versión naranja
        icono.src = icono.src.replace(".png", "_naranja.png");
    });

    // Agregar evento de mouseout para restaurar la imagen original
    icono.addEventListener("mouseout", function() {
        // Restaurar la ruta de la imagen original
        icono.src = icono.src.replace("_naranja.png", ".png");
    });
});
