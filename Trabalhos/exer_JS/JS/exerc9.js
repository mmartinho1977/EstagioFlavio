function getInputValue(){
    console.log("inputValue");
 return document.getElementById("box1").value; 
 
}

function clique(inputValue){
    console.log(inputValue);
    var div = document.getElementById("mensage");
    var res;
    for(var i = 0; i< inputValue; i++){
        res = i+1;
        div.innerHTML += "PW" + res + "<br>";
    }
}