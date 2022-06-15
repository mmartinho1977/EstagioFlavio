function salvar(){
    localStorage.setItem("telefone1", document.querySelector("#telefone1").value);
}
function Curriculoauto(){
    document.getElementById("telefone1").innerHTML = localStorage.getItem("telefone1");
}