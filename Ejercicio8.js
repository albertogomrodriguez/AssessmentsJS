// Ejercicio 8
// Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
// La función debe tener 2 parámetros:
// Primer parámetro debe ser el número de bytes
// Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

const fromBytesToFormattedSizeUnits = (bytes, precision = 3) => {
  const unit = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  if (bytes === 0) {
    return "0 " + unit[0];
  }

  const size = Math.abs(bytes);
  const index = Math.floor(Math.log(size) / Math.log(1024));
  const formattedSize = (size / Math.pow(1024, index)).toPrecision(precision);

  return formattedSize + unit[index];
};

const result = fromBytesToFormattedSizeUnits(456456564456);
console.log(result); // 123MB
