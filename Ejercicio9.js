// Ejercicio 9
// Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
// La función debe tener un objeto como único parámetro.

function toLowercaseKeys(param) {
  return Object.keys(param).map((x) => x.toLowerCase());
}

const myObject = { NamE: "Charles", ADDress: "Home Street" };

const myObjLowercase = toLowercaseKeys(myObject);

console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }
