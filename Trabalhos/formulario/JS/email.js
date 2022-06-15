function salvar(){
    localStorage.setItem("email1", document.querySelector("#email1").value);
}
function Curriculoauto(){
    document.getElementById("email1").innerHTML = localStorage.getItem("email1");
}