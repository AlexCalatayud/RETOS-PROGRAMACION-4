// let persona = {
//   nombre: "Alexander",
//   apellido: "Ajalla",
//   edad: 17,
//   gamer: true,
//   otaku: true,
// };

// function getPersona(persona) {
//   let getValue = Object.values(persona);
//   getValue.forEach((item) => {
//     console.log(item);
//   });
// }

// getPersona(persona);

//Forma Misa

const imprimirObjeto = (objeto) => {
  for (const key in objeto) {
    console.log(key, objeto[key]);
  }
}

const resp = imprimirObjeto({nombre:'Alexander', apellido:'Ajalla', edad:17});
