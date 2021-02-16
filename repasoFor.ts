function devolverSuma(arrayPalabras){
    let sumaCaracteres=0
    for(let i=0;i<arrayPalabras.length;i++){
        sumaCaracteres += arrayPalabras[i].length
    }
    return sumaCaracteres
}

function mostrarImpares(impares){
    
    for(let i=0;i<impares;i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}
function devolverArray(arrayNumeros){
    let numero=0
    for(let i=0;i<arrayNumeros.length/2;i++){
        numero = arrayNumeros[i];
        arrayNumeros[i] = arrayNumeros[arrayNumeros.length -1 -i];
        arrayNumeros[arrayNumeros.length-1-i]=numero
    }
    
    
    return arrayNumeros
}





