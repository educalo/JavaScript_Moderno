//exporto a un fichero que se llama modules.js donde he indicado "import"
//cada fichero puede tener solo un export default, pero ni puede tener todos los export nombrados que se quiera
//funcion que devuelve un string "hello"
export const hello = () => "hello";
export const goodbye = () => "godBye";

//daria un error porque ya existe un default
//export default () => "GoodBye";

//por defecto esta exportando una clase
export default class MyClass{
    goodbye(){
        return "goodbye";
    }
}