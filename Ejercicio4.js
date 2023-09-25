// Ejercicio 4
// Dado tres arrays de números, sacar en un nuevo array la intersección de estos.

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

const interseccion = arrNumber1.filter(
  (elem) => arrNumber2.includes(elem) && arrNumber3.includes(elem)
);
console.log(interseccion);
