function clique(){
var resultado =  document.getElementById("user").value;

    if(resultado < 10){

   document.getElementById("box").innerHTML = "mau";
    } else if(resultado >10 && resultado <14){

    document.getElementById("box").innerHTML = "medio";

    }else {
        
    document.getElementById("box").innerHTML = "bom";
    }

    
}

