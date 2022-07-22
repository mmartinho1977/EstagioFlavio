function pares(){
    var div = document.getElementById("pares");
    var cont = 0;
    while (cont<=20) {
        var resto = cont % 2;
        if (resto === 0){
            mostra(cont);
           /*  div.innerHTML += cont + "<br>"; */
        }
        cont = cont + 1;
    }
}

function pares2(){
    var div = document.getElementById("pares");
    for(var i=0; i<=20; i++){
        if(i % 2 === 0){ 
            div.innerHTML += i + "<br>";
        }
    }
}
function mostra(cont){
    var div = document.getElementById("pares");
    div.innerHTML += cont + "<br>";
}