//JS Functions are defined with "function" keyword

/*Function declaration
function functionName(){
    fuction statement
} */
//Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
// let a = 4, b = 5;
function myFunction (a,b){
    return a * b;
}
console.log(myFunction(4,6));





//Function Expression
//A function expression can be stored in a variable:

const A = function (x,y){
    return x * y ;
};
console.log(A);
console.log(A(4,10));

/*The function above is actually an anonymous function (a function without a name).

Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

The function above ends with a semicolon because it is a part of an executable statement. */





//The Function() Constructor

const fConstructor = new Function ( "a" ,"b", "return a * b")
console.log(fConstructor(5,6));




//Self-Invoking Functions
/* Function expressions can be made "self-invoking".

A self-invoking expression is invoked (started) automatically, without being called.

Function expressions will execute automatically if the expression is followed by ().

You cannot self-invoke a function declaration.

You have to add parentheses around the function to indicate that it is a function expression:

The function below is actually an anonymous self-invoking function (function without name).*/

(function () {
    console.log( "Hello world");
})();




//Functions Can Be Used as Values
//JavaScript functions can be used in expressions:
//Functions are Objects
//JavaScript functions have both properties and methods.
//1.The arguments.length property returns the number of arguments received when the function was invoked:

function propertyOfFuction(a ,b){
    return arguments.length;

}
//2.The toString() method returns the function as a string:

function propertyOfFuction ( a,b){
    return a * b ;
}
let text =propertyOfFuction.toString();
console.log(text);


//Arrow Fuctions
/* Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.*/

//ES5
let Z = function regularFuction(a , b){
    return a * b;
}

//ES6
let S = (a , b) => a * b;

const D = (a,b) => { return a * b}; //Good habit


