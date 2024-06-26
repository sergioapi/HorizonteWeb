/* eslint-disable linebreak-style */
function calcularPresupuesto() {
  const precioServicio = 20.0;
  const ciudad = 'Santiago de Compostela';
  const incrementoDesplazamiento = 0.1;
  const tasas = {
    empresa: 0.15,
    autonomo: 0.1,
    particular: 0.05,
  };
  const preciosFrecuencia = { mensual: 5, trimestral: 8, anual: 12 };
  let presupuesto = 0;

  const checkboxesServicios = document
    .getElementById('cbServicios')
    .querySelectorAll('input[type="checkbox"]');
  let numServicios = 0;
  checkboxesServicios.forEach((checkbox) => {
    if (checkbox.checked) {
      presupuesto += precioServicio;
      numServicios += 1;
    }
  });
  if (numServicios < 1) {
    alert('Seleccione al menos un servicio');
    return;
  }
  const ciudadSeleccionada = document
    .getElementsByName('txt_loc')[0]
    .value.trim();
  if (ciudadSeleccionada === '') {
    alert('Seleccione la ciudad más cercana a su ubicación');
    return;
  }
  if (ciudadSeleccionada.toLowerCase() !== ciudad.toLowerCase()) {
    presupuesto += presupuesto * incrementoDesplazamiento;
  }

  const tipoClienteSeleccionado = document
    .getElementsByTagName('select')[0]
    .value.trim();
  if (Object.prototype.hasOwnProperty.call(tasas, tipoClienteSeleccionado)) {
    presupuesto += presupuesto * tasas[tipoClienteSeleccionado];
  } else {
    alert('Seleccione un tipo de cliente válido');
    return;
  }

  const frecuenciaSeleccionada = document.querySelector(
    'input[name="frecuencia"]:checked',
  );
  if (frecuenciaSeleccionada) {
    presupuesto += preciosFrecuencia[frecuenciaSeleccionada.value];
  } else {
    alert('Seleccione la frecuencia deseada de los servicios');
    return;
  }

  alert(`Tu presupuesto será de: ${presupuesto.toFixed(2)}`);
}

document
  .getElementsByClassName('submit')[0]
  .addEventListener('click', calcularPresupuesto);

/**
 * getElementById() V
 * getElementsByName() V
 * getElementsByClassName() V
 * getElementsByTagName() V
 * querySelectorAll() V
 */
