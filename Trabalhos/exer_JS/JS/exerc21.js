function clique(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var soma;
    var produto;
    var divisao;
    var resto_divisao;

    soma = num1 + num2;
    produto = num1 * num2;
    divisao = num1 / num2;
    resto_divisao = num1 % num2;
/*     document.getElementById("soma").innerHTML = soma;
    document.getElementById("produto").innerHTML = produto;
    document.getElementById("divisao").innerHTML = divisao;
    document.getElementById("resto_divisao").innerHTML = resto_divisao; */
    document.getElementById("table").innerHTML = "<table border=1>" +

    "<tr> <th> soma </th> <th> produto </th> <th> divisão </th> <th> resto da divisão </th> </tr>"+
    "<tr> <td>" + soma +" </td> <td> "+ produto +" </td> <td> "+ divisao +" </td> <td>  "+resto_divisao +"  </td> </tr>"
    "</table>";

    
}