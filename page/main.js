function calcularCuotas() {
    // Obtener el precio de contado
    const precioContado = parseFloat(document.getElementById('precioContado').value);

    if (isNaN(precioContado)) {
        alert('Por favor, ingrese un precio válido');
        return;
    }

    // Cálculo para 3 cuotas
    const precioLista3Cuotas = precioContado * 1.06 * 1.21;
    const valorCuota3 = precioLista3Cuotas / 3;

    // Cálculo para 6 cuotas
    const precioLista6Cuotas = precioContado * 1.12 * 1.21;
    const valorCuota6 = precioLista6Cuotas / 6;

    // Cálculo para 9 cuotas
    const precioLista9Cuotas = precioContado * 1.19 * 1.21;
    const valorCuota9 = precioLista9Cuotas / 9;

    // Cálculo para 12 cuotas
    const precioLista12Cuotas = precioContado * 1.26 * 1.21;
    const valorCuota12 = precioLista12Cuotas / 12;

    // Mostrar resultados
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Resultados del Simulador</h2>
        <p><strong>Precio de Contado:</strong> $${precioContado.toFixed(2)}</p>
        
        <div class="plan-details">
            <div>
                <h3>Plan 3 Cuotas</h3>
                <p>Precio de Lista: $${precioLista3Cuotas.toFixed(2)}</p>
                <p>Valor de cada cuota: $${valorCuota3.toFixed(2)}</p>
            </div>
        </div>

        <div class="plan-details">
            <div>
                <h3>Plan 6 Cuotas</h3>
                <p>Precio de Lista: $${precioLista6Cuotas.toFixed(2)}</p>
                <p>Valor de cada cuota: $${valorCuota6.toFixed(2)}</p>
            </div>
        </div>

        <div class="plan-details">
            <div>
                <h3>Plan 9 Cuotas</h3>
                <p>Precio de Lista: $${precioLista9Cuotas.toFixed(2)}</p>
                <p>Valor de cada cuota: $${valorCuota9.toFixed(2)}</p>
            </div>
        </div>

        <div class="plan-details">
            <div>
                <h3>Plan 12 Cuotas</h3>
                <p>Precio de Lista: $${precioLista12Cuotas.toFixed(2)}</p>
                <p>Valor de cada cuota: $${valorCuota12.toFixed(2)}</p>
            </div>
        </div>
    `;
}