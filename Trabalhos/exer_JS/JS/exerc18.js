const cars = ["Saab", "Volvo", "Audi", "Austin Martin" ,"BMW"];


   function quantidade(){
   document.getElementById("demo1").innerHTML = cars.length;
}


   function mostrar(){
   document.getElementById("demo2").innerHTML = cars;
}
    
    function mostrar_letra_A(){
    for(var i = 0; i<cars.length; i++){
        if(cars[i].charAt(0).toUpperCase() == 'A'){
            document.getElementById("demo4").innerHTML += cars[i] + "<br>";
        }
    }

}
function adicionar(){
   cars.push("Lemon");
   document.getElementById("demo2").innerHTML = cars;
}

function addList(){
   var ul = document.getElementById("nomes");
   var li;
   ul.innerHTML = "";
   for(var i = 0; i<cars.length; i++){
    li = document.createElement("li");
    li.appendChild(document.createTextNode(cars[i]));
    ul.append(li);

  /*   ul.innerHTML += "<li>" + car[i] + "</li>"; */
    /* ul.appendChild("<li>" + car[i] + "</li>"); */
   }
}