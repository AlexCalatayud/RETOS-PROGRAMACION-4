// let nombres = ["Gianella", "Mayra", "Gabi"];
// function arrayNombres(nombres) {
//   nombres.forEach((nombres) => {
//     console.log(`Hola de nuevo ${nombres}`);
//   });
// }
// arrayNombres(nombres);

//Forma Misa
const imprimirArray = (array) => {
  for (const item of array) {
    console.log(item);
  }
};

const resp = imprimirArray(["a", 2, false, 4]);

console.log(resp);
