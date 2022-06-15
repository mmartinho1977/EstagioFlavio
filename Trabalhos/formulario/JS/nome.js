function salvar(){

    localStorage.setItem("nome1", document.querySelector("#nome1").value);
}
function Curriculoauto(){
   

    document.getElementById("nome1").innerHTML = localStorage.getItem("nome1");
}