//JavaScript Function call()
//Method reuse ;-With the call() method, you can write a method that can be used on different objects.


const person = {
    firstName : "Umakant",
    lastName : "Alebale",
    fullName : function(){
        return this.firstName + " " +this.lastName
    }
    
}
let X = person.fullName();
console.log(X);


//call() examples
memberDetails = function (designation){

    return this.firstName +" " +this.lastName +" "+this.idNo + " "+this.membership +" "+ designation;
}

const member1 = {
        firstName:"Umakant",
        lastName:"Alebale",
        idNo:12345,
        membership: "boardMember"
    }
const member2 = {
        firstName:"Sainath",
        lastName:"Alebale",
        idNo:112233,
        membership: "boardMember"
    }
const member3 = {
        firstName:"Shiva",
        lastName:"Alebale",
        idNo:445566,
        membership: "boardMember"
    }

   console.log( memberDetails.call(member1 , "Founder & CEO"));

   //Apply
   console.log( memberDetails.apply(member1 , ["Founder & CEO"])); 

   //The Difference Between call() and apply()
/*The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.*/


//JavaScript Function bind()
//Function Borrowing -With the bind() method, an object can borrow a method from another object.

/*The example below creates 2 objects (person and member).

The member object borrows the fullname method from the person object:*/

const volksWagen ={
    carName: "Polo",
    color:"Red",
    cc:1200,
carDetails : function (){
    return this.carName +" "+this.color+" "+this.cc;
}

}
const skoda ={
    carName: "Rapid",
    color:"White",
    cc:1500,
}
const audi ={
    carName: "R8",
    color:"Yellow",
    cc:2000,
}

let carDetails=volksWagen.carDetails.bind(skoda);
console.log(carDetails());