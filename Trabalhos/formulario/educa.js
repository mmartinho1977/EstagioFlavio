function salvar(){
    localStorage.setItem("educacao1", document.querySelector("#educacao1").value);
}

function Curriculoauto(){
    document.getElementById("educacao1").innerHTML = localStorage.getItem("educacao1");
}