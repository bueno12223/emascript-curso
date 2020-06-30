const { count } = require("console");

let personas = {
    name: "jesus",
    age: 19,
    country: "PA",
}
// EC5
console.log(personas.name, personas.age); 
// ES6+
//guardamos en una variable de que objeto sacamos el name y age
let {name, age} = personas;
 console.log(name, age);


 // arrays
 arraya[1,2,3,4]
 arrayb[5,6,7,8]

 // se puede traer array
 //arraytotal [...arraya,...arrayb, 9, 10];

 // objetos
 let name = "jesus"
 let age = 19
 let country = "PA"

// antes
objA = {age: age, name: name}
 
// ahora se asign auatomaticamente
objB = {age, name, country}

// arreglos de objetos
 const autos = [
    {marca: "tesla", modelo:"X", annio: 2020},
    {marca: "toyota", modelo:"lancer", annio: 2015}
]
// antes
let listaTotal = autos.map(function () {
    // y asi traemos los onjetos de array a una funcion
    console.log(autos.modelo);
    console.log(autos.annio);

} );
// ahora podemos usar un arrow funcition
let listaTotal2 = autos.map( autos => {
    console.log(autos.modelo);
    console.log(autos.annio);

} );
// tambien es valido
let listaTotal2 = (modelo,annio) => {
    console.log(autos.modelo);
    console.log(autos.annio);

} ;
// no bloques, funciones anonimas leglible
let listaTotal3 = num => num1 * num2