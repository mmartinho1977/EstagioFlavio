function salvar(){
    localStorage.setItem("link-pessoal1", document.querySelector("#link-pessoal1").value);
}

function Curriculoauto(){
    document.getElementById("link-pessoal1").innerHTML = localStorage.getItem("link-pessoal1");
}