//saludo//
let saludo="¡hola!"
let nombre= "Juanma"

//apellido//
let apellido ="Anghilante"
// concatenacion 
console.log(saludo + " "+nombre+" "+apellido)
// sueldo actual
let sueldoactual=100000
let tuSueldoEs="tu sueldo actual es de $"
console.log( tuSueldoEs+" "+sueldoactual)

//porcentaje aumento//
var porcentajeaumento=25
var elPorcentaje="el incremento de tu sueldo es en un %"
console.log( elPorcentaje+" "+porcentajeaumento)
//calculo del aumento//
let calculoAumento=((sueldoactual*porcentajeaumento)/100)

let incremento="el valor en pesos del incremento es de $"

console.log(incremento+" "+calculoAumento)
//sueldo nuevo
nuevoSueldox=(calculoAumento+sueldoactual)
sueldoFinal=" y tu nuevo sueldo es de $"
console.log(sueldoFinal+" "+nuevoSueldox)
