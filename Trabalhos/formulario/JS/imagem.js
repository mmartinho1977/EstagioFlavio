function salvar(){




    localStorage.setItem("imagem", document.querySelector("#imagem").value);
}
function Curriculoauto(){

document.getElementById("imagem").innerHTML = localStorage.getItem("imagem");
}