document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-presupuesto');
    const producto = document.getElementById('producto');
    const plazo = document.getElementById('plazo');
    const extras = document.getElementById('extras');
    const presupuestoTotal = document.getElementById('presupuesto-total');

    const preciosBase = {
        laptop: 2000,
        telefono: 300,
        gaming: 500,
        hogar: 80
    };

    const preciosPlazo = {
        '1': 90,
        '2': 125,
        '3': 150
    };

    const preciosExtras = {
        ninguno: 0,
        garantia: 100,
        soporte: 50
    };

    function calcularPresupuesto() {
        const precioProducto = preciosBase[producto.value];
        const precioPlazo = preciosPlazo[plazo.value];
        const precioExtra = preciosExtras[extras.value];

        const total = precioProducto + precioPlazo + precioExtra;
        presupuestoTotal.textContent = total;
    }

    // Recalcular presupuesto cada vez que se cambie una opción
    producto.addEventListener('change', calcularPresupuesto);
    plazo.addEventListener('change', calcularPresupuesto);
    extras.addEventListener('change', calcularPresupuesto);

    // Evitar el envío del formulario por ahora
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Presupuesto enviado con éxito!');
        // Aquí podrías enviar los datos a un servidor o realizar otras acciones
    });
});
