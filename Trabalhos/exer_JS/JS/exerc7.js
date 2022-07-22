function showMensage(e){

    if(e === document.activeElement){

        e.value ="ganhou focus";
    }
    if(e.id == "box1"){
        document.getElementById("box2").value= "perdeu focus";

    }else{
        document.getElementById("box1").value= "perdeu focus";
    }
}
