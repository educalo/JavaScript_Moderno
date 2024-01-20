//importo las entidades que se han declarado en el fichero moduloexprot
//ya lo podemos utilizar como si lo hubieramos declarado en este fichero
import MyImportedClass, { hello } from "./moduloexport";

//nos tramos todo que se esta exportando de ese fichero
//se almacena todo en un objeto que en este caso es allImports
import * as allImports from "./moduloexport";


console.log(hello());
const myClass = new MyImportedClass();
console.log(myClass.goodbye());

//hay un atributo que es hello
console.log(allImports.hello());
const MyClass2 = new allImports.default();
console.log(MyClass2.goodbye());