//THis
"use strict";
let person={
  firstName:"taohid",
  lastName:"Khan",
  fullName: function(){
     return this.firstName+ "  " + this.lastName;
  }
   
}

console.log(person.fullName());
let x=this;
console.log(x);

function myFunction() {
  return this;
}

let y=myFunction();
console.log(y);
