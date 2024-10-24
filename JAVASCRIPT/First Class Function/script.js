
//Function statement{hoisting problem becasue when c invoke it sotred as value undefined}
a();
c();
function a(){
    console.log("funciton a");
}


//Function Expression
var c= function (){
    console.log("function `C`");
    return x;
}



//Named function expression

var d= function abc(){
    console.log(abc);
}

d();

//First class Function

let s= function xxx(param){
    console.log('First class function');
    console.log(param);
    return xxx;
   
}


const p=s;

p(d);
console.log(p);