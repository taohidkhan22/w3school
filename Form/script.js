function convertBinary(num) {
  var bin = [];
  var index = 0;
  while (num > 0) {
    bin[index++] = num % 2;
    num = math.floor(num / 2) ;
  }
  for (var i = index - 1; i >= 0; i--) {
    console.log(bin[i]);
  }
}

convertBinary(8);
