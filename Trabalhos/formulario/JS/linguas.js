function salvar(){
    localStorage.setItem("linguas1", document.querySelector("#linguas1").value);
}

function Curriculoauto(){
    document.getElementById("linguas1").innerHTML = localStorage.getItem("linguas1");
}