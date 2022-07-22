/* function clique(){
    var nome = document.getElementById("nome").value;
    document.getElementById("box").innerHTML = nome +" "+"mora em Lisboa / 1400-100, em Alfama, na Rua Nova, 503"
}
 */


function clique(){
    const pessoa = {
        nome: "flavio",
        cidade: "lisboa",
        codigo_postal: "5555-555",
        zona: "Alfama",
        rua: "rua nova",
        num_casa: "505"
      };
    
      document.getElementById("box").innerHTML = "O/A " + pessoa.nome + " mora em " + pessoa.cidade + " / " + pessoa.codigo_postal + ", " + pessoa.zona + ", na " + pessoa.rua + ", " + pessoa.num_casa + ".";
}
