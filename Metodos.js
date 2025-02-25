let numeros = [1,2,3,4,5,6,7,8,9,10]

let numerosalcuadrado = numeros.map(function(numeros){
    return numeros * numeros;
})
console.log(numeros)
console.log(numerosalcuadrado)


let filtrodenumeros = numerosalcuadrado.filter(function(numerosalcuadrado){
    return numerosalcuadrado > 40;
})
console.log(filtrodenumeros)