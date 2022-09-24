/*Invoking a JavaScript Function
The code inside a function is not executed when the function is defined.

The code inside a function is executed when the function is invoked.*/

function myFuction(a,b){
    return a * b;
}
myFuction(4,6); // window.myFuction(4,6); both are same.


//What is this?
/*
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

//In an object method, this refers to the object.

//Alone, this refers to the global object.

//In a function, this refers to the global object.

//In a function, in strict mode, this is undefined.

//In an event, this refers to the element that received the event.

//Methods like call(), apply(), and bind() can refer this to any object.*/



//Invoking a Function as a Method

/*In JavaScript you can define functions as object methods.

The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):*/

const myObject ={
    firstName : "Umakant",
    lastName : "Alebale",
    fullName :function (){
        return this.firstName +" "+ this.lastName;
    }
}
console.log(myObject.fullName());



//Invoking a Function with a Function Constructor

/*-If a function invocation is preceded with the new keyword, it is a constructor invocation.

It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:*/
//function constructor

function myfunc(arg1,arg2){
    this.firstName = arg1;
    this.lastName = arg2;
   
}
const myObj = new myfunc("Umakant","Alebale");
console.log(myObj.firstName);