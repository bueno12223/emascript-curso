/**
 * Spread Operator
 */
// primero ponemos lo que nesecitamos de un objeto  luego ..all pone el resto del objeto
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
  };
  
  let { name, ...addInfo } = obj; // esto le dice, sacame nombre de objeto y luego el resto
  console.log(`name: ${name}`); // o alrevez, sacarle algo a un objeto
  console.log( addInfo);
  
  let { country, ...nameAndAge } = obj;
  console.log(`name and age: `, nameAndAge);
  
  /**
   * Porpagation Properties
   */
  const person = {
    name: 'Oscar',
    age: 32
  };
  
  const personInformation = {
    ...person,
    country: 'MX' // agrega lo del ojeto anterior y algo extra en estte caso conutry
  };
  console.log(, personInformation);
  
  /**
   * Promise Finally
   */
  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
  helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));
  // se ingresa en .finally que ejecuta algo cuando acaba la promesa 
  /**
   * Regex
   */
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const match = regexData.exec('2018-04-28');
  const year = match[1];
  const month = match[2];
  const day = match[3];
  console.log('Date -> ', year, month, day);






  //--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//----------------trim---------------------------/
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // final

//-------------optional catch biding-------------/

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//-------------fromEntries----------------------/
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);```