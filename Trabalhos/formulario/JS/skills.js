function salvar(){
    localStorage.setItem("skills1", document.querySelector("#skills1").value);
}
function Curriculoauto(){
    document.getElementById("skills1").innerHTML = localStorage.getItem("skills1");
}