//Curly braces define the block
// when multiple statement in the js needs to combine together then the term block comes up
// Let and scope are block scope because 
let  b=200;
{
  let a = 10;
const  b = 20;
   const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(b);
