function Dateandtime(){
    document.getElementById("Date").innerHTML= Date();
    document.getElementById("Date").style.fontFamily= "cursive";
    document.getElementById("Date").style.color="red";
    document.getElementById("Date").style.backgroundColor="wheat";
}


function light(s){
    var x;
    if(s==1){
      x="./image/pic_bulbon.gif";
    }
    else{
      x="./image/pic_bulboff.gif";
    }
    document.getElementById('image').src= x;
}