$(document).ready(function() {
  const galleryWrapper = $('.gallery-wrapper');
  const galleryImages = $('.gallery-image'); // Obtener todas las imágenes
  const imageWidth = galleryImages.eq(0).outerWidth(); // Obtener el ancho de una imagen
  const wrapperWidth = galleryWrapper.width(); // Obtener el ancho del contenedor
  const totalImages = galleryImages.length; // Obtener el número total de imágenes
  const cloneCount = Math.ceil(wrapperWidth / imageWidth) + 1; // Calcular la cantidad de clonaciones necesarias para llenar el contenedor
  let currentIndex = 0;

  // Clonar las imágenes y agregarlas al final del contenedor
  for (let i = 0; i < cloneCount; i++) {
    galleryImages.clone().appendTo(galleryWrapper);
  }

  // Función para mover las imágenes
  function moveImages() {
    currentIndex++;

    // Calcular la posición de desplazamiento
    const newPosition = -currentIndex * totalImages * imageWidth;

    // Animar el desplazamiento
    galleryWrapper.animate({ left: newPosition }, 1000, 'linear', function() {
      // Si se alcanza el final del conjunto clonado, restablecer el índice y la posición
      if (currentIndex === totalImages) {
        currentIndex = 0;
        galleryWrapper.css('left', 0);
      }
    });
  }

  // Iniciar el movimiento de las imágenes
  setInterval(moveImages, 2500);
});
