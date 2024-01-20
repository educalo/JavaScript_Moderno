//Atributos
//Metodos de instancia y estaticos
//Herencia

class Greeter{
    name = "unnamed";
    static greetWord ="Hello";

    constructor({name}){
        this.name = name;
    }
    greet(){
        return `${Greeter.greetWord}, Soy ${this.name}`;
    }

}

//herencia
//una clase puede extender otra
class User extends Greeter{
    surname="";
    constructor({name, surname}){
        //constructor de la clase padre
        super({name});
        this.surname = surname;
    }
    //estmos sobreescribiendo un metodo del padre
    greet(){
        //llamo al greet del padre y el apellido al del hijo
        return `${super.greet()} ${this.surname}`;
    }
}

const user = new User({ name: "Edu", surname: "Cano"});
//devuelve Hello, soy Eduardo Cano
console.log(user.greet());
Greeter.greetWord ="Hola";
//devuelve Hola, soy Eduardo Cano
console.log(user.greet());
