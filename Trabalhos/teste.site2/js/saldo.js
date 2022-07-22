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


function enableBalanceButton(e){
    
  btn1=document.getElementById("btn1");
  btn2=document.getElementById("btn2");
  btn3=document.getElementById("btn3");
  btn4=document.getElementById("btn4");
  btn5=document.getElementById("btn5");

  if(e.checked){
    
        btn1.disabled=false;
        btn2.disabled=false;
        btn3.disabled=false;
        btn4.disabled=false;
        btn5.disabled=false;
    }
    else{
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;
        btn4.disabled=true;
        btn5.disabled=true;
    }

}





