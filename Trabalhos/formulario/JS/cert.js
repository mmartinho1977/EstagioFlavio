function salvar(){
    localStorage.setItem("cert1", document.querySelector("#cert1").value); 


}

function Curriculoauto(){
    document.getElementById("cert1").innerHTML = localStorage.getItem("cert1");

}