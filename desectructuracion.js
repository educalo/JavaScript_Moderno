//la desectructuracion se aplica a objetos o arrays
const user ={
    name: "Edu",
    surname: "Cano",
    curses: ["Introuccion a React", "React intermedio", "React avanzado"]
}

//estraemos atrimutos desde un objeto pasado como parametro
//es una funcion que se le pasan los atributos del objeto
//de esta manera pasado un objeto extraemos los atributos que contiene
//para luego pintarlos en un string template
const getFullName = ({name, surname}) => `${name}  ${surname}`;
console.log("getFullname:", getFullName(user));


//desectructuramos un objeto dentro de otro
//los tres puntos indican que una vez evaluada se van a extender
//se llama extender el objeto, que coloque todos los atributos que el objeto posee
const newUser ={
    ...user,
    name: "Rosa"
};

//mis atributos que el usuario user pero el nombre es ahora Rosa
console.log(" new user: " ,newUser);

//Extraemos y renombramos atributos extraidos, cambiamos el nombre del atributo de name a newName
const {name: newName, surname: newSurname} = newUser;
console.log("newName:", newName);
console.log("newSurname:", newSurname);


//de que manera la desectructuracion es buena en array
//estamos extrayendo el array que tiene cursos de newUser
//cogemos el primer elemento del array y el resto del array con los ... y almacenarlos en otro array que se llama otherCourses
//firstCourse seria "introduccion a React"
//ohterCourse seria "React intermedio, React avanzado"
const [firstCourse, ...otherCourse] = newUser.curses;
console.log("firstCourse:", firstCourse);
console.log("otherCourse", otherCourse);

//asignacion de atributos a objetos de forma compacta
//resultado seria "Rosa" y el primer curso "Introduccion a React"
const newObject ={newName, firstCourse};
console.log("newObject:", newObject);

//desectructuracion de parametros pasados a una funcion
//...nums sera un array con cada uno de los parametros pasados, por lo tanto el numero de elementos puede ser variable
//reduce funcion nativa de array que va recorriendo los elementos del array
const sum = (...nums) => nums.reduce((total, num) => total + num,0);
console.log("sum:", sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
