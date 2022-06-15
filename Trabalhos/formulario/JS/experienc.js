function salvar(){
    localStorage.setItem("experiencia1", document.querySelector("#experiencia1").value);
}
function Curriculoauto(){
    document.getElementById("experiencia1").innerHTML = localStorage.getItem("experiencia1");
}