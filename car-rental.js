let alquiler=(tipo,dias,sillabb)=>{
    let valor=0;
    switch(tipo){
        case'compacto':valor=14000;break;
        case'mediano':valor=17000;break;
        case'camioneta':valor=28000;break;
}
sillabb?valor+=1200:''
return 'Estimado cliente en base al tipo de vehiculo'+tipo+"alquilado ,considerando los" +dias, "el monto a pagar es de $"+valor*dias
}

console.log(alquiler('compacto',9   ,false));
