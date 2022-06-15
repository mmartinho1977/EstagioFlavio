function salvar(){
    localStorage.setItem("hobbies1", document.querySelector("#hobbies1").value);
}

function Curriculoauto(){
    document.getElementById("hobbies1").innerHTML = localStorage.getItem("hobbies1");
}