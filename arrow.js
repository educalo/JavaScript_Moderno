//funcion tal cual
function doble(a){
    return a*2;
}

//formato arrow de la misma funcion anterior function
const double =a => a * 2;

//no necesita return
const sum =(a,b) => a + b;

//funcion ejemplo de recursividad
const factorial =a =>{
    if (a<=1){
        return 1;
    }
    return a * factorial (a - 1);
}

console.log("double: ", double(2));
console.log("sum: ", sum(1,2));
console.log("factorial", factorial(2));

