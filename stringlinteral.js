//
const libs=["React", "Vue", "Angular"];

//la comilla especial derecha de la tecla p indica que se esta declarando un string de este tipo que va a contener variables
console.log(`Este curso es sobre ${libs[0]}`);

//si la longitud es mayor que 1 imprimir string que contiene dicha longitud, sino imprimimos el string estatico
//finalmente junto el resultado de lo que contiene el array entre comas y un espacio
const l = libs.length;
console.log(`
    ${ l > 1 ? `These ${l} libraries`  : "This library"}:
    ${libs.join(", ")}...
    `)
