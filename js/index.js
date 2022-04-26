document.getElementById("back-button").onclick = function() {
    history.back();
     return false
};

document.getElementById("forward-button").onclick = function() {
    history.go(1);
    return false
};
  