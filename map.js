//sintaxis completa del metodo map
//arr.map(function(element, index, array){  }, this);
//function callback es llamada en cada elemento del arreglo
//element elemento actual
//index es el indice el elemento actual
//array completo
//se utlizará dentro de la funcion callback y el valor por defecto es undefined


//1.-Recorro todo el array y multiplico cada elemento por 2 en este caso
let numeros = [10, 20, 30, 40]
let multiplicador = 2;

let productos = numeros.map(numero => numero * multiplicador);

console.log(productos);

// [20, 40, 60, 80]

//metodo si utilizamos map
/*const numeros1 = [2, 7, 4, 6];
const doble = [];
for(let i = 0; i < numeros1.length; i++) {
    doble.push(numeros[i] * 2)
}
*/


//2.-Recorro todos los elementos del array y le añado un sufijo
let prefijos = ["super", "spider", "ant", "iron"]
let sufijo = "man";

let nombresCompletos = prefijos.map(prefijo => prefijo + sufijo);

console.log(nombresCompletos);

// ["superman", "spiderman", "antman", "ironman"]

//3.- recorremos todos los elementos del array y añadimos una funcion para hacer un recalculo con una condicion
let prefijos1 = ["wonder", "spider", "ant", "iron"]
let hombre = "man";
let mujer = "woman";

let nombresCompletos1 = prefijos1.map(function(prefijo, indice) {
    return (indice == 0) ? prefijo + mujer : prefijo + hombre;
 });

console.log(nombresCompletos1);

["wonderwoman", "spiderman", "antman", "ironman"]

//4.- Recorremos todos los elementos del array y utlizamos el indice del array
let nombresCompletos2 = ["wonderwoman", "spiderman", "antman", "ironman"]

nombresCompletos2.map(function(nombre, indice) {
    console.log(`${nombre} esta en la posición ${indice}`);
});

/* Resultado del anterior código
"wonderwoman esta en la posición 0"
"spiderman esta en la posición 1"
"antman esta en la posición 2"
"ironman esta en la posición 3"
*/

//otro ejemplo map
const urls = [
    'https://google.com',
    'https://intel.com',
    'https://oracle.com'
];
const enlacesHTML = urls.map((url) => `<a href="${url}">${url}</a>`);
console.log(enlacesHTML);
//resultado
/*
[
    '<a href="https://google.com">https://google.com</a>',
    '<a href="https://intel.com">https://intel.com</a>',
    '<a href="https://oracle.com">https://oracle.com</a>'
  ]
*/
//vamos a ver ahora cómo crear un array de meses donde los meses pares aparezcan en mayúsculas

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

const mesesParesEnMayusculas = meses.map((mes, index) => {
    if(index % 2 != 0) {
        return mes.toUpperCase();
    } 
    return mes;
 });

 /*
 [
  'Enero',      'FEBRERO',
  'Marzo',      'ABRIL',
  'Mayo',       'JUNIO',
  'Julio',      'AGOSTO',
  'Septiembre', 'OCTUBRE',
  'Noviembre',  'DICIEMBRE'
]
*/

console.log(mesesParesEnMayusculas);


//entre todos los meses del array queremos colocar solamente en mayúsculas el mes actual.
const mesesActualEnMayusculas = meses.map((mes, index) => {
    let numeroDeMes = new Date().getMonth();
    if(index == numeroDeMes) {
        return mes.toUpperCase();
    } 
    return mes;
 });

 console.log(mesesActualEnMayusculas);