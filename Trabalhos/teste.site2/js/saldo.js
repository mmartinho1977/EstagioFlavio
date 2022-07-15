function addBalence(btn){
    /* var button=document.getElementById("btn"); */
    var balance=document.getElementById("saldo-2").innerText.replace("$","");
    if(btn==="btn1"){
       balance=parseFloat(balance) + 1;
    }
    else if(btn=="btn2"){
        balance=parseFloat(balance) + 5;
    }
    else if(btn=="btn3"){
        balance=parseFloat(balance) + 10;
    }
    else if(btn=="btn4"){
        balance=parseFloat(balance) + 20;
    }
    else if(btn=="btn5"){
        balance=parseFloat(balance) + 50;
    }
    document.getElementById("saldo-2").textContent=balance + "€";
    document.getElementById("saldo").textContent=balance + "€";
    localStorage.setItem("Balance", balance);
        
}

/* function addBalence(btn){

    if (confirm("Deseja confirmar essa operação?")) {

        return true;

    } else {

        return false;

    }

} */