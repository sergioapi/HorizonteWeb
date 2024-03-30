/* eslint-disable linebreak-style */

const rutaJson = 'http://localhost/horizonteweb/assets/datos/contacto.json';

fetch(rutaJson)
  .then((response) => {
    // Verifica si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    // Parsea la respuesta JSON
    return response.json();
  })
  .then((data) => {
    // Acceso a los datos JSON cargados
    console.log(data);

    // Utiliza los datos para actualizar la página HTML
    actualizarPagina(data);
  })
  .catch((error) => {
    // Maneja cualquier error que pueda ocurrir durante la carga
    console.error('Se produjo un error:', error);
  });

function actualizarPagina(data) {
  // Actualiza la dirección
  document.getElementById('direccion').querySelector('.valor').innerHTML = `${data.direccion.calle}<br>${data.direccion.ciudad}`;

  // Actualiza el horario
  document
    .getElementById('horario')
    .querySelector(
      '.valor',
    ).textContent = `Lunes - Jueves: ${data.horario['Lunes-Jueves']}\nViernes: ${data.horario.Viernes}`;

  // Actualiza los emails
  document.getElementById('mail').querySelector('.valor').textContent = data.emails.join('\n');

  const tlfs = [];
  data.telefonos.forEach((telefono) => {
    if (telefono[0] === '6') {
      tlfs.push(`Wpp: ${telefono}`);
    } else {
      tlfs.push(`Tlfn: ${telefono}`);
    }
  });

  // Actualiza los teléfonos utilizando la etiqueta <br>
  document.getElementById('tlf').querySelector('.valor').innerHTML = tlfs.join('<br>');
}

// Obtener todas las imágenes de icono
const iconos = document.querySelectorAll('.icono img');

// Iterar sobre cada icono y agregar el evento de mouseover
iconos.forEach((icono) => {
  icono.addEventListener('mouseover', () => {
    // Cambiar la ruta de la imagen a la versión naranja
    icono.src = icono.src.replace('.png', '_naranja.png');
  });

  // Agregar evento de mouseout para restaurar la imagen original
  icono.addEventListener('mouseout', () => {
    // Restaurar la ruta de la imagen original
    icono.src = icono.src.replace('_naranja.png', '.png');
  });
});
