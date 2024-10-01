function c() {
  
  b();

  function b() {
    console.log(x);
  }
}
var x = 14;
c();
