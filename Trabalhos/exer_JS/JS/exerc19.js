function clique(){
   const points = [5, 7, 1, 8, 9];
   document.getElementById("demo1").innerHTML = points;  
   
   points.sort();
   points.reverse();
   document.getElementById("demo2").innerHTML = points;
}

var array = [];

function addToArray(){
   var number = document.getElementById("number").value;

   array.push(number);

   document.getElementById("numbers").innerHTML = array;
}
