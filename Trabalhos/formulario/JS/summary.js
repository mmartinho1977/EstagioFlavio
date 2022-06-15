function salvar(){
    localStorage.setItem("summary1", document.querySelector("#summary1").value);
}
function Curriculoauto(){
    document.getElementById("summary1").innerHTML = localStorage.getItem("summary1");
}