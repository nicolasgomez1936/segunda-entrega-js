let fecha = new Date()
let año = fecha.getFullYear()
let historial = []
// solicitud de informacion del usuario
let montoInicial = parseFloat(prompt("Por favor ingrese el monto, en pesos argentinos, con el que desea consultar y/u operar"));
let historialinicial= historial.push(montoInicial)
while (isNaN(montoInicial)) {
    montoInicial = parseFloat(prompt("Ingrese un valor numérico: "));
}

let operacion = prompt("¿Qué operación desea realizar? (cambio / plazo fijo / prediccion)").toLowerCase();
while (operacion !== "cambio" && operacion !== "plazo fijo" && operacion !== "prediccion") {
    operacion = prompt("Por favor ingrese una opción válida (cambio / plazo fijo / prediccion)").toLowerCase();
}

if (operacion === "cambio") {
    let monedaCambio = prompt("¿Qué tipo de moneda desea comprar? (USD / EUR / BRL)").toUpperCase();
    let historialcambio= historial.push(monedaCambio)
    while (monedaCambio !== "USD" && monedaCambio !== "EUR" && monedaCambio !== "BRL") {
        monedaCambio = prompt("Por favor ingrese una opción válida (USD / EUR / BRL)").toUpperCase();
    }

    if (monedaCambio === "USD") {
        cambioUsd(montoInicial);
    } else if (monedaCambio === "EUR") {
        cambioEur(montoInicial);
    } else if (monedaCambio === "BRL") {
        cambioBrl(montoInicial);
    }
} else if (operacion === "plazo fijo") {
    let diasPlazoFijo = parseInt(prompt("Por favor ingrese la cantidad de días de duración para el plazo fijo"));
    let historialplazo = historial.push(diasPlazoFijo);
    plazoFijo(montoInicial, diasPlazoFijo);
} else if (operacion === "prediccion") {
    let añoPrediccion = parseInt(prompt("Por favor ingrese el año para el cual le gustaría realizar la predicción"));
    let historialprediccion = historial.push(añoPrediccion);
    prediccion(montoInicial, añoPrediccion);
}
// declaracion de funciones con los objetos dentros de las mismas.
function cambioUsd(montoInicial) {
    let divUsd = {
        sigla: "USD",
        valorPesos: 517.00,
        paisOrigen: "EEUU",
    };
    let resultadoCambioUsd = montoInicial / divUsd.valorPesos;
    alert(`su cambio a USD es: $${resultadoCambioUsd.toFixed(2)}`);
}

function cambioEur(montoInicial) {
    let divEur = {
        sigla: "EUR",
        valorPesos: 521.48,
        paisOrigen: "Unión Europea",
    };
    let resultadoCambioEur = montoInicial / divEur.valorPesos;
    alert(`su cambio a EUR es: €${resultadoCambioEur.toFixed(2)}`);
}

function cambioBrl(montoInicial) {
    let divBrl = {
        sigla: "BRL",
        valorPesos: 91.00,
        paisOrigen: "Brasil",
    };
    let resultadoCambioBrl = montoInicial / divBrl.valorPesos;
    alert(`su cambio a BRL es: R$${resultadoCambioBrl.toFixed(2)}`);
}

function plazoFijo(montoInicial, diasPlazoFijo) {
    // Realizar cálculos del plazo fijo
    let resultadoPlazoFijo = montoInicial + (( 130 / 365) * diasPlazoFijo);
    alert(`su plazo fijo después de ${diasPlazoFijo} días es: $${resultadoPlazoFijo.toFixed(2)}`);
}

function prediccion(montoInicial, añoPrediccion,) {
    let prediccionreal = montoInicial + (0.85*(añoPrediccion - año)); 
    alert("su predicción para el año " + añoPrediccion + ": " + prediccionreal);
}
console.log(historial.length);
console.log(historial);