## 1- Variables y operaciones
## ¿Que es una variable y para qué sirve?

- Es una forma de almacenar información en la memoria RAM,
- reutilizarlas , calcularlas ,etc

## ¿Cuál es la diferencia entre declarar e inicializar una variable?

- Declarar es dar un nombre a la variable ej: `let numero`
- Inicializar es **asignar** un valor a la variable ej: `numero = 1`

## ¿Cuál es la diferencia entre sumar números y concatenar strings?

- La suma se realiza unicamente con variables de tipo `number`
- Y la concatenacion se realiza uniendo `string` con otros valores para

## ¿Qué operador me permite sumar o concatenar?

- El operador suma : `+`

## Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre `const nombre = 'Alexander'`
- Apellido `const apellido = 'Ajalla'`
- Nombre de usuario `let userName = 'SatouKz'`
- Edad `let edad = 17`
- Correo electrónico `let email = 'alexander.ajalla404@gmail.com'`
- Mayor de edad `let mayorEdad = false`
- Dinero ahorrado `let ahorro = 2000`
- Deudas `let deudas = 0`

## Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en un archivo nuevo.

`const persona = {nombre = 'Alexander', apellido = 'Ajalla', username = 'SatouKz', edad = 17, email = 'alexander.ajalla404@gmail.com', mayorEdad = false, ahorros = 2000, deudas = 0,}`

## Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (Nombre y apellido)
  `const nombreCompleto =persona.nomrbe + ' ' + persona.apellido`

- Dinero real (dinero ahorrado menos deudas)
  `const patrimonio = persona.ahorro - persona.deudas`

## 2- Funciones
## ¿Qué es una función?

- Es un conjunto de instrucciones agrupados en un bloque de código

## ¿Cuándo me sirve usar una función en mi código?
- Me sirve para dividir mis tareas en diferentes funciones que realizan una única tarea

## ¿Cuál es la diferencia entre parámetros y argumentos de una función?

- parámetros son cuando inicializamos la función 
- argumentos son cuando llamamos a la función 

## Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

`function presentacion(completeName, nickName) {const frase = `Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.` return frase; } const res = presentacion(completeName, nickname); console.log(res)`

##3- Condicionales
## ¿Qué es una condicional?

- Los condicionales es una forma de controlar el flujo de ejecución de ni código. Por el lado verdadero y el falso.

## ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

- Existen 4 tipos : if else , else if , switch e if ternario.

## ¿Puedo combinar funciones y condicionales?


## Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos durante un año");
      default: break;
}

`if(tipoDeSuscripcion === free){
    console.log('Solo puedes tomar cursos gratis')
} else if(tipoDeSuscripcion === 'Basic'){
    console.log('Puedes tomar casi todos los cursos durante un mes')
} else if(tipoDeSuscripcion === 'Expert'){
    console.log('Solo puedes tomar casi todos los cursos durante un año')
}else if(tipoDeSuscripcion === 'ExpertPlus'){
    console.log('Tú y alguien más pueden tomar TODOS los cursos durante un año')
};`

## Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

`if(tipoDeSuscripcion === free) console.log('Solo puedes tomar cursos gratis')`
`if(tipoDeSuscripcion === 'Basic') console.log('Puedes tomar casi todos los cursos durante un mes')`
`if(tipoDeSuscripcion === 'Expert') console.log('Puedes tomar casi todos los cursos durante un año')`
`if(tipoDeSuscripcion === ExpertPlus) console.log('Tú y alguien más pueden tomar todos los cursos durante un año')`  

## Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

`const subs = ['free', 'Basic', 'Expert', 'ExpertPlus'] const mensaje = ['mens1', 'm2', 'm3', 'm4'] const pos = subs.indexOf (tiposDeSubscripcion) if (pos !== -1) { console.log(mensaje[pos]) }`

