// Ejemplo imperativo  "mapearDoble"
// const mapearDoble = arr => {
//   const arrRetorno = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrRetorno.push(arr[i] * 2);
//   }
//   return arrRetorno;
// };

// refactor mapearDoble
const _map = (arr, func) => {
  const arrRetorno = [];
  for (let i = 0; i < arr.length; i++) {
    arrRetorno.push(func(arr[i]));
  }
  return arrRetorno;
}
const mapearDoble = arr => _map(arr, num => num * 2)

// siguienteDelDoble
// const siguienteDelDoble = arr => {
//   const arrRetorno = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrRetorno.push(arr[i] * 2 + 1);
//   }
//   return arrRetorno;
// };

// Refactor siguienteDelDoble
const identidad = val => val;
const siguiente = num => num + 1;
const doble = num => num * 2;
const compose = (...fns) =>
  fns.reduce( (prev, actual) => arg => actual(prev(arg)) , identidad);
const siguienteDelDoble = arr => arr.map(compose(doble, siguiente))

// Funciones en el aire, ¿cómo unirlas?
// const caracDesdeStr = str => {
//   const trimmed = str.trim();
//   const number = parseInt(trimmed);
//   const nextNumber = number + 1;
//   return String.fromCharCode(nextNumber);
// };

// Refactor caracDesdeStr
const caracDesdeStr = str =>
  [str]
  .map(str => str.trim())
  .map(parseInt)
  .map(siguiente)
  .map(numSiguiente => String.fromCharCode(numSiguiente))[0]

module.exports = { mapearDoble, siguienteDelDoble, caracDesdeStr };