/* eslint-disable linebreak-style */
function cargarDatosXML(idEmpleado, divEmpleado) {
  const rutaXML = 'http://localhost/horizonteweb/assets/datos/personal.xml';
  // Solicitud AJAX para cargar el archivo XML
  $.ajax({
    url: rutaXML,
    dataType: 'xml',
    success(xmlDoc) {
      console.log('Exito en la carga de datos');
      // Encuentra el empleado con el ID correspondiente en el archivo XML
      const empleado = $(xmlDoc).find(`empleado[id='${idEmpleado}']`);

      // Obtén los datos del empleado del XML
      const nombre = empleado.find('nombre').text();
      const estudios = empleado.find('estudios').text();
      const departamento = empleado.find('departamento').text();
      const email = empleado.find('email').text();
      const ciudad = empleado.find('ciudad').text();
      const telefono = empleado.find('tlf').text();
      console.log('Telefono del empleado ', telefono);
      const descripcion = empleado.find('descripcion').text();
      // Actualiza el contenido del contenedor de texto con los datos del empleado
      divEmpleado.find('h1').text(nombre);
      divEmpleado.find('h3').text(estudios);
      divEmpleado.find('#primer_dato').text(`Departamento ${departamento}`);
      divEmpleado.find('.datos_contacto:eq(0)').text(email);
      divEmpleado.find('.datos_contacto:eq(1)').text(`${ciudad} ${telefono}`);
      divEmpleado.find('.datos_contacto:eq(2)').text(telefono);
      console.log(divEmpleado.find('.datos_contacto:eq(0)'));
      console.log(divEmpleado.find('.datos_contacto:eq(1)'));
      console.log(divEmpleado.find('.datos_contacto:eq(2)'));
      divEmpleado.find('.datos').text(descripcion);
    },
    error(xhr, status, error) {
      divEmpleado.text('Error en la carga de datos');
      console.error('Error al cargar los datos XML:', error);
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar todos los contenedores de empleados
  const contenedoresEmpleados = document.querySelectorAll(
    '.contenedor-empleado',
  );

  // Recorrer todos los contenedores de empleados
  contenedoresEmpleados.forEach((contenedorEmpleado) => {
    // Obtener la imagen de cada contenedor de empleado
    const imagenEmpleado = contenedorEmpleado.querySelector('.empleado');

    // Variable para almacenar el temporizador
    let timeout;
    let textoVisible = false;

    // Agregar evento de click a cada contenedor de empleado
    imagenEmpleado.addEventListener('click', () => {
      // Cancelar el temporizador si existe
      clearTimeout(timeout);

      // Obtener el texto informativo correspondiente a la posición de la imagen
      const textoEmpleadoDer = contenedorEmpleado.querySelector('.texto_emp_der');
      const textoEmpleadoIzq = contenedorEmpleado.querySelector('.texto_emp_izq');

      // Mostrar o ocultar el texto del empleado según su estado actual
      if (textoVisible) {
        if (textoEmpleadoDer) {
          if (window.innerWidth >= 1500) {
            contenedorEmpleado.style.transform = 'translateX(-250px)';
          }

          textoEmpleadoDer.classList.remove('mostrar');
          contenedorEmpleado.style.transform = 'translateX(0px)';
        } else if (textoEmpleadoIzq) {
          if (window.innerWidth >= 1500) {
            contenedorEmpleado.style.transform = 'translateX(250px)';
          }
          textoEmpleadoIzq.classList.remove('mostrar');
          contenedorEmpleado.style.transform = 'translateX(0px)';
        }

        if (window.innerWidth >= 1500) {
          // Ocultar todos los contenedores de empleados de la misma fila excepto el actual
          const filaActual = contenedorEmpleado.parentElement;
          const contenedoresFila = filaActual.querySelectorAll(
            '.contenedor-empleado',
          );
          contenedoresFila.forEach((contenedor) => {
            if (contenedor !== contenedorEmpleado) {
              contenedor.style.opacity = '1';
            }
          });
        }

        textoVisible = false;
      } else {
        if (textoEmpleadoDer) {
          if (window.innerWidth >= 1500) {
            contenedorEmpleado.style.transform = 'translateX(-250px)';
          }
          textoEmpleadoDer.classList.add('mostrar');
          textoEmpleadoDer.style.zIndex = '20';
          console.log('cargando datos de ', textoEmpleadoDer.id);
          cargarDatosXML(textoEmpleadoDer.id, $(textoEmpleadoDer));
        } else if (textoEmpleadoIzq) {
          if (window.innerWidth >= 1500) {
            contenedorEmpleado.style.transform = 'translateX(250px)';
          }
          textoEmpleadoIzq.classList.add('mostrar');
          textoEmpleadoIzq.style.zIndex = '20';
          console.log('cargando datos de ', textoEmpleadoIzq.id);
          cargarDatosXML(textoEmpleadoIzq.id, $(textoEmpleadoIzq));
        }

        if (window.innerWidth >= 1500) {
          // Ocultar todos los contenedores de empleados de la misma fila excepto el actual
          const filaActual = contenedorEmpleado.parentElement;
          const contenedoresFila = filaActual.querySelectorAll(
            '.contenedor-empleado',
          );
          contenedoresFila.forEach((contenedor) => {
            if (contenedor !== contenedorEmpleado) {
              contenedor.style.opacity = '0';
            }
          });
        }

        textoVisible = true;
      }
    });
  });
});

const anchoAnterior = window.innerWidth; // Almacena el ancho de la ventana inicialmente
let estabaPorEncimaDe1500 = anchoAnterior >= 1500; // Verifica si la ventana inicialmente estaba por encima de 1500px

window.addEventListener('resize', () => {
  const anchoActual = window.innerWidth; // Obtiene el ancho actual de la ventana
  const estaPorEncimaDe1500 = anchoActual >= 1500; // Verifica si la ventana actualmente está por encima de 1500px

  // Verifica si la ventana ha cruzado el umbral de 1500px
  if (estabaPorEncimaDe1500 !== estaPorEncimaDe1500) {
    // Coloca aquí el código que deseas ejecutar cuando la ventana cruce el umbral de 1500px
    const contenedoresEmpleados = document.querySelectorAll(
      '.contenedor-empleado',
    );

    // Recorrer todos los contenedores de empleados
    contenedoresEmpleados.forEach((contenedorEmpleado) => {
      // Obtener la imagen de cada contenedor de empleado
      const imagenEmpleado = contenedorEmpleado.querySelector('.empleado');

      // Obtener el texto informativo correspondiente a la posición de la imagen
      const textoEmpleadoDer = contenedorEmpleado.querySelector('.texto_emp_der');
      const textoEmpleadoIzq = contenedorEmpleado.querySelector('.texto_emp_izq');

      if (textoEmpleadoDer) {
        contenedorEmpleado.style.transform = 'translateX(0px)';
        textoEmpleadoDer.classList.remove('mostrar');
      } else if (textoEmpleadoIzq) {
        contenedorEmpleado.style.transform = 'translateX(0px)';
        textoEmpleadoIzq.classList.remove('mostrar');
      }

      const filaActual = contenedorEmpleado.parentElement;
      const contenedoresFila = filaActual.querySelectorAll(
        '.contenedor-empleado',
      );
      contenedoresFila.forEach((contenedor) => {
        if (contenedor !== contenedorEmpleado) {
          contenedor.style.opacity = '1';
        }
      });
    });
    estabaPorEncimaDe1500 = estaPorEncimaDe1500;
  }
});
