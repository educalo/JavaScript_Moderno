
//identificadores
let extLet =1;
var extVar =1;

if (true){
    let intLet=1;
    var intVar=1;

console.log("Dentro de la función");
console.log("extLet:", extLet);
console.log("extVar:", extVar);
console.log("intLet:", intLet);
console.log("intLet:", intVar);

}

console.log("Fuera de la función");
console.log("extLet:", extLet);
console.log("extVar:", extVar);
//da error porque ha sido declarada dentro del bloque de la funcion
//console.log("intLet:", intLet);
//console.log("intVar:", intVar);

//mos da error porque no se puede moficar una variable const
const a=1;
//a=3;