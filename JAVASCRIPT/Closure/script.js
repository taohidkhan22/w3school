function x() {
    var a = 39;
     function z() {
        function y(){
            console.log(a);
        }
     
    }
  }
  var z = x();
  console.log(z);
  z();
  
  x();