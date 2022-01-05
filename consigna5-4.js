let persona = {
  nombre: "Alexander",
  apellido: "Ajalla",
  edad: 17,
  gamer: true,
  otaku: true,
};

function getPersona(persona) {
  let getValue = Object.values(persona);
  getValue.forEach((item) => {
    console.log(item);
  });
}

getPersona(persona);
