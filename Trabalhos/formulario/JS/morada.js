function salvar(){
    localStorage.setItem("morada1", document.querySelector("#morada1").value);
}
function Curriculoauto(){
    document.getElementById("morada1").innerHTML = localStorage.getItem("morada1");
}