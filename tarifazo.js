let pagoMes =1500;

let consumKwh = 450;

let ajuste = consumKwh >=300 ? pagoMes += pagoMes* 0.20: 'sin ajuste tarifario'

console.log( 'se ajusto su tarifa electrica en un 20% ahora su boleta es de   $' +ajuste);
console.log(ajuste);