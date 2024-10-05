function x(){
  for(let i=1;i<=10;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
  }
  console.log("javascript in-depth");
}
x();
