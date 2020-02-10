 /**
  * type inference
  * Typescript is trying to guess the data type
  */
let mango = 5; 
    mango = null;
    mango = undefined;


/**
 * type inference does not work
 * For type inference, declaration and initialization must be done on same line
 */
let bananas; // 
    bananas = 1;
    bananas = 'd';


/**
 * type annotations
 * we define the data type
 * declaredDataType || null || undefined can be assigned
 */
let apples: number = 4;
    apples = null; 
    apples = undefined;


/**
 * only null || undefined can be assigned
 */
let something: null = null;
    something = undefined; 


//  arrays
let codes: string[] = ['c', 'c++', 'javaScript'];


//  classes
class First {};
let first: First = new First();


// Object literals
let point: {x: number, y: string, z: boolean} = {
    x: 1,
    y: '2',
    z: true
};


// function
let log: (number)=> void = (i: number) => {
    console.log(i);
}

/**
 * type annotation uses
 * -------------------
 * when we declare a variable and initialize it later
 * when we want varibale of type that can not be infered
 * when a function returns the 'any' type and we need to specify
 * 
 * type inference
 * ---------------
 *     always
 */

//  when we want varibale of type that can not be infered
 let numbers = [-1, -2, 3];
 let numberAboveZero: boolean | number = false;
 for (let i of numbers) {
     if(numbers[i] > 0) {
         numberAboveZero = numbers[i]
     }
 }

 // when a function returns the 'any' type and we need to specify
 const json = '{"x": 1, "y": 2}';
 let coordinates = JSON.parse(json); // type infered as 'any'

 coordinates.abc = ''; // does not catch error as 'abc' is not a property

 //  right way
 let cord: {x: number, y: number} = JSON.parse(json);


 // ES2015 destructuring in function
 var foo = function({date, weather}: {date: Date, weather: string}) {
     console.log(date);
     console.log(weather);
 }

 // ES5 syntax for the above
 var foo1 =function(forecast: {date: Date, weather: string}) {
    console.log(forecast.date);
    console.log(forecast.weather);
 }
 
 // Object destructuring
 var obj = {
     name: "Lalit",
     age: 22,
     body: {
        height: 6,
        weight: 80
    }
 }

 const { age }: { age: number } = obj;
 const { body: {height, weight}}: { body: {height: number, weight: number}} = obj;
