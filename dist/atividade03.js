"use strict";
function calcularDesconto(valorCompra, Descontoinicial) {
    let valorTotal = valorCompra - Descontoinicial;
    let descontoadicional = 0;
    if (valorTotal >= 90 && valorTotal <= 100) {
        descontoadicional = 0.05 * valorTotal;
    }
    else if (valorTotal > 100) {
        descontoadicional = 0.1 * valorTotal;
    }
    let valorFinal = valorTotal - descontoadicional;
    console.log(`o valor final da compra é :${valorFinal}`);
    return valorFinal;
}
calcularDesconto(460, 100);
