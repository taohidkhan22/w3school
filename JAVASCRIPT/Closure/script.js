function x(){

    var a=39;
   
    return  function y(){
        console.log(a);
    }
    
}



var z= x();
console.log(z);
z();