function alterar(){
    
    var image = document.getElementById("img");
    
    if( image.src.includes("lampada.jpg")){
        
        image.src = "../images/lampada-on.jpg";
    }else{
        image.src = "../images/lampada.jpg";
    }
}
