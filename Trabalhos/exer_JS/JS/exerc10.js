function  clique(){
   var box = document.getElementById("box").value;
   var div = document.getElementById("quant");
   
   for(i = 0; i<box.length; i++){
    div.innerHTML += box[i] + "<br>";
   }

   div.innerHTML += box.length; 

}