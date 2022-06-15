function salvar(){


    localStorage.setItem("sobrenome1", document.querySelector("#sobrenome1").value);


}



function Curriculoauto()
{
   

    document.getElementById("sobrenome1").innerHTML = localStorage.getItem("sobrenome1");
}