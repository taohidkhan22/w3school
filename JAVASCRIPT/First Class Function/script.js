
a();
c();//hoisting problem becasue when c invoke it sotred as value undefined
//Function statement

function a(){
    console.log("funciton a");
}


//Function Expression
var c=function(){
    console.log("function c with as variable");
}

