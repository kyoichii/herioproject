
  
window.onload = function(){
    var backbutton = document.getElementById("back-button");
    backbutton.onclick = backprocess; 
}

function backprocess(){
    history.back();
    console.log("aaaaaa")
    return false
}