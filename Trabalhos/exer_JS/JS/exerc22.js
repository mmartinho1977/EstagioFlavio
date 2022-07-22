var time = 5;
function clique(){

    if(time < 0){
        time = 5;
    }
    document.getElementById("timer").innerHTML = time;
    time--; 
}

function sleep(ms){
    const date = Date.now();
    var current_date = null;
    do{
        current_date = Date.now();
    }while( current_date-date < ms)
}

setInterval(clique, 1000);
