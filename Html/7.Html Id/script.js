 function myfunction(){
        var x= document.getElementsByClassName("city")
        for(var i=0;i<x.length;i++)
        {
            x[i].style.display="none";

        }
           
    }
function changetext (){
 document.getElementById("burden").innerHTML="Why Always Me??";
}

function pricehike()
{
    // var x=document.getElementsByClassName("price")
    // // if(x.length>0)
    // // {
    // //     x[0].innerHTML="500Tk";
    // // }
    // x[0].innerHTML="5";

    document.getElementsByClassName("price")[0].innerHTML="600tk";
}