// Arrow function

let myFunction= (a,b)=> a+b;
console.log(myFunction(4,5));
console.log(typeof(myFunction));

hello =(v) => "Hello,  "+ v;

document.getElementById('demo').innerHTML=hello("Parallel Universe!");
console.log(typeof(hello));


hello=()=>{
    document.getElementById('').innerHTML+=this;
}

window.addEventListener("load", hello);


console.log(typeof(hello));

document.getElementById('btn').addEventListener("click",hello);

const person={
    firstName:"taohid",
    lastName: "kahn",
    fullName: ()=>{//you are getting error because this refers to the global context not the person object 
                   // to solve this, avoid arrow function
        return this.firstName + "    "+this.lastName;
    }
}
document.getElementById('demo').innerHTML= perfullName();
