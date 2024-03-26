$(document).ready(function() {
    const galleryContainer = $('.gallery-container');
    const galleryImages = $('.gallery-image');
    const totalImages = galleryImages.length;
    const imageWidth = galleryImages.eq(0).outerWidth();
    const transitionDuration = 2000; // Duración de la transición en milisegundos
    const intervalDuration = 1500; // Intervalo entre transiciones en milisegundos
    let currentIndex = 0;

    // Función para mover las imágenes
    function moveImages() {
        // Calcular el índice de la próxima imagen a mostrar
        currentIndex = (currentIndex + 1) % totalImages;

        // Añadir una nueva imagen por la derecha
        const newImage = galleryImages.eq(currentIndex).clone();
        newImage.css('left', `${totalImages * imageWidth}px`); // Posicionar la nueva imagen fuera de la vista
        galleryContainer.append(newImage);

        // Mover todas las imágenes hacia la izquierda
        galleryImages.each(function(index) {
            const currentPosition = parseInt($(this).css('left')) || 0;
            $(this).css('transition', `left ${transitionDuration / 1000}s ease-in-out`);
            $(this).css('left', `${currentPosition - imageWidth}px`);
        });

        // Eliminar la primera imagen de la cola
        setTimeout(() => {
            galleryContainer.children().first().remove();
        }, transitionDuration);
    }

    // Iniciar el movimiento de las imágenes cada intervalo de tiempo
    setInterval(moveImages, intervalDuration);
});
