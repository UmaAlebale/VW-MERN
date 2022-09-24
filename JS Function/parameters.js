//JavaScript Function Parameters

//Function Parameters and Arguments

function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}

/*Function parameters are the names listed in the function definition.

Function arguments are the real values passed to (and received by) the function.*/


//Default Parameters
/*If a function is called with missing arguments (less than declared), the missing values are set to undefined.

Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:*/

function myFuction( x, y){
    if (y===undefined){
        y = 2;
    }
}

//ECMAScript 2015 allows default parameter values in the function declaration:

function myFunction(x, y = 2){

}


//The Arguments Object
/*
JavaScript functions have a built-in object called the arguments object.

The argument object contains an array of the arguments used when the function was called (invoked).*/

x = sumAll( 1, 13, 52, 85, 113, 230, 560);

function sumAll(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
       
        sum += arguments[i];
    }
    return sum;
}
console.log(x);


//Arguments are Passed by Value
/*The parameters, in a function call, are the function's arguments.

JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

If a function changes an argument's value, it does not change the parameter's original value.

Changes to arguments are not visible (reflected) outside the function.

Objects are Passed by Reference
In JavaScript, object references are values.

Because of this, objects will behave like they are passed by reference:

If a function changes an object property, it changes the original value.

Changes to object properties are visible (reflected) outside the function.
*/
