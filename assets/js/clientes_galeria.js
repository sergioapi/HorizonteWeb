document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const totalImages = galleryImages.length;
    const imageWidth = galleryImages[0].offsetWidth;
    const transitionDuration = 2000; // Duración de la transición en milisegundos
    const intervalDuration = 1500; // Intervalo entre transiciones en milisegundos
    let currentIndex = 0;

    // Función para mover las imágenes
    function moveImages() {
        // Calcular el índice de la próxima imagen a mostrar
        currentIndex = (currentIndex + 1) % totalImages;

        // Añadir una nueva imagen por la derecha
        const newImage = galleryImages[currentIndex].cloneNode(true);
        newImage.style.left = `${totalImages * imageWidth}px`; // Posicionar la nueva imagen fuera de la vista
        galleryContainer.appendChild(newImage);

        // Mover todas las imágenes hacia la izquierda
        for (let i = 0; i < totalImages; i++) {
            const currentPosition = parseInt(galleryImages[i].style.left) || 0;
            galleryImages[i].style.transition = `left ${transitionDuration / 1000}s ease-in-out`;
            galleryImages[i].style.left = `${currentPosition - imageWidth}px`;
        }

        // Eliminar la primera imagen de la cola
        setTimeout(() => {
            galleryContainer.removeChild(galleryContainer.firstElementChild);
        }, transitionDuration);
    }

    // Iniciar el movimiento de las imágenes cada intervalo de tiempo
    setInterval(moveImages, intervalDuration);
});
