

function laClaveSecreta(clave){
    let claveDescifrada="";

    for(let i= clave.length-1;i>=0;i--) {
       if(clave [i] != "*" )claveDescifrada +=clave[i]
    }
    return claveDescifrada
}
console.log(laClaveSecreta(["s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]))