console.log("/////////////////// HOISTING AND TEMPORAL DEADZONE ///////////////////");

sayHello(); // Hoisted using FUNCTION, the body is also copied instead of setting undefined
function sayHello(){
    console.log("Hello");
}

console.log(hoistedVar); // Hoisted using VAR but will get undefined
var hoistedVar = 10;

let myName = "Alex";

// {
//   console.log(myName); // As let myName was hoisted, meaning the 'Sam' one was hoisted. So, the engine knows not to use the 'Alex' one.
//   let myName = "Sam";
// }

{
  console.log(myName); // No block scoped redeclaration. So, the engine knows it can use the 'Alex' one.
}

// sayHi is hoisted but is in TEMPORAL DEADZONE(because we used let or const): where hoisting is done but no value(not even undefined) is set and is locked away from use
// console.log(sayHi);      // In temporal deadzone
// sayHi();                 // In temporal deadzone   
// let sayHi = function(){
//     console.log("Hi");
// }
// sayHi;                   // Does nothing alone, needs to be used as a function call or passed somewhere and then used as a function call
// console.log(sayHi);      // Prints the function and doesn't execute it
// sayHi();                 // Calls the function and works as expected


// As we are using var, sayHi will be hoisted and assigned undefined. Calling () on undefined will throw the not function error.
// sayHi();                 // Not a function as hoisted value is undefined currently
// console.log(sayHi);      // HOISTED but undefined
// var sayHi = function(){
//     console.log("Hi");
// }
// sayHi;                   // Does nothing alone, needs to be used as a function call or passed somewhere and then used as a function call
// console.log(sayHi);      // Prints the function and doesn't execute it
// sayHi();                 // Calls the function and works as expected
// Not Hoisted because it is a function expression using let. But it could have been hoisted if var was used and we'd get undefined

console.log("/////////////////// DIFFERENT TYPES OF FUNCTION USAGE ///////////////////");
console.log("")
console.log("/////////////////// ASSIGNMENT TO VARIABLES ///////////////////");

let greet = function() {
    console.log("Greetings ")
}

let returnGreet = function() {
    return "Greetings ";
}
console.log(greet);
greet();
console.log("")
console.log("/////////////////// PASSED AS AN ARGUMENT ///////////////////");

// THIS IS CALLED A HIGHER ORDER FUNCTION, as it takes another function as an argument
function greetMe(greetingFunction, fullName){ 
    greetingFunction(); // Prints the function's work or the greet()/returnGreet() gets called normally
    console.log(greetingFunction(), fullName, "example"); // Triggers greet()/returnGreet() and after that, it checks if it returned anything, if not prints undefined
}
greetMe(greet, "Sandesh");
greetMe(returnGreet, "Sandesh");
console.log("")
console.log("/////////////////// RETURN A FUNCTION ///////////////////");

function solve(num1){
    return function(num1){
        return num1*num1;
    }
}
 // ans becomes function, but doesn't return the 5*5 result, just the function declaration, 5 here doesn't do anything apart from avoiding function call error
let ans = solve(5);
let finalAns = ans(10);
console.log(finalAns);
console.log(ans);
console.log("")
console.log("/////////////////// USE FUNCTION IN DATA STRUCTURES ///////////////////");

const arr = [
    function(a,b){
        return (a+b);
    },
    function(a,b){
        return (a-b);
    },
    function(a,b){
        return (a*b);
    },
];
let first = arr[0];
console.log(first);
console.log(first(1,2));
console.log("")
console.log("/////////////////// USE AS AN OBJECT'S PROPERTY ///////////////////");

let object1 = {
    greet1: function(){
        console.log("Greet1")
    },
    greet2: () => {
        console.log("Greet2")
    }
}

object1.greet1();
object1.greet2();