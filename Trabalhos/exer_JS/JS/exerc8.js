
var resultado =  document.getElementById("text");

function clique(){
   
    if(resultado < 10){

   document.getElementById("box").innerHTML = "mau";
    } else if(resultado >10 ){

    document.getElementById("box").innerHTML = "medio";
    alert("a");
    }else {
        
    document.getElementById("box").innerHTML = "bom";
    }


}

