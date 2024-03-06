document.getElementById("btnCalcular").addEventListener("click", calcularPresupuesto);

function calcularPresupuesto() {
    let precio_servicio = 20.0;
    let ciudad = "Santiago de Compostela";
    let incremento_desplazamiento = 0.1;
    let tasas = {
        empresa: 0.15,
        autonomo: 0.10,
        particular: 0.05
    };
    const precios_frecuencia = { mensual: 5, trimestral: 8, anual: 12 };
    let presupuesto = 0;

    const checkboxesServicios = document.getElementById("cbServicios").querySelectorAll('input[type="checkbox"]');
    checkboxesServicios.forEach(function (checkbox) {
        if (checkbox.checked) {
            presupuesto += precio_servicio;
        }
    });

    let ciudadSeleccionada = document.getElementsByName("txt_loc")[0].value.trim();
    if (ciudadSeleccionada.toLowerCase() !== ciudad.toLowerCase()) {
        presupuesto += presupuesto * incremento_desplazamiento;
    }

    let tipoClienteSeleccionado = document.getElementsByName('lista_tipo_cliente')[0].value.trim();
    if(tasas.hasOwnProperty(tipoClienteSeleccionado)){
        presupuesto += presupuesto * tasas[tipoClienteSeleccionado];
    } else {
        alert("Seleccione un tipo de cliente válido");
        return;
    }

    let frecuenciaSeleccionada = document.querySelector('input[name="frecuencia"]:checked');
    if (frecuenciaSeleccionada) {
        presupuesto += precios_frecuencia[frecuenciaSeleccionada.value];
    }

    alert('Tu presupuesto será de: ' + presupuesto.toFixed(2));

}

/**
 * getElementById()
 * getElementsByName()
 * getElementsByClassName()
 * getElementsByTagName()
 * querySelectorAll()
 */