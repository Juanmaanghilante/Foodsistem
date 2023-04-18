
function callback(tipoHamburguesa,salsa,jamon,queso,tomate,mayonesa,mostaza,lechuga,cebolla){

let carne=1800
let pollo=1500
let vegetariana=1200
let hamburguesa =tipoHamburguesa==="carne"? carne:tipoHamburguesa==="pollo"?pollo:tipoHamburguesa==="vegetariana"?vegetariana:""
let adicionalJamon=jamon === true?30:0
let adicionalQueso=queso ===  true?25:0
let adicionalSalsaMayoMostaza= mayonesa===true || salsa===true || mostaza===true? 5:0
let adicionalLechugaCebolla= lechuga===true || cebolla===true?10:0
let adicionalTomate=tomate===true?15:0

let totalAdicionales= adicionalJamon+adicionalQueso+adicionalLechugaCebolla+adicionalSalsaMayoMostaza+adicionalTomate


return totalAdicionales+hamburguesa

}

function mensaje(nombre,apellido,callback){
    return  "hola"+ nombre+" "+apellido+" "+"el valor de tu pedido es de $"+callback("carne",true,false,true,true,false,true,false,true)

}
console.log(mensaje("Juan","Anghilante",callback));
