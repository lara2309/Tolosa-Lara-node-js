function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        console.log("El año ingresado es bisiesto");
    } else {
        console.log("El año ingresado no es bisiesto");
    }
}

// Ejemplo de uso
esBisiesto(2024);
esBisiesto(2023);
