// function x(){
//     var a=20;
//     function y(){
//         var b=500;
//         function z(){
//             console.log(a,b);
           
//         } 
//         z()
//         return z;
      
//     }
//     return y;

     
   
// }


// var q=x();

// console.log(q);




function count1(){
    var cnt=0;
    function x(){
        cnt++;
        console.log(cnt);
    }
    x();
    
}
