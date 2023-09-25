// Ejercicio 6
// Crea una función que redondee un número float a un número específico de decimales.
// La función debe tener dos parámetros:
// Primer parámetro es un número float con x decimales
// Según parámetro es un int que indique el número de decimales al que redondear
// Evitar usar el método toFixed()

const redondeoDecimas = (num1, num2) => {
  let valor = Math.pow(10, num2);
  return Math.round(num1 * valor) / valor;
};

const roundedResult = redondeoDecimas(5.54312345, 2);
console.log(roundedResult);
