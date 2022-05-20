let x = 100

document.getElementById("back-button").onclick = function() {
    history.back();
     return false
};

document.getElementById("forward-button").onclick = function() {
    history.go(1);
    return false
};

document.getElementById("lager-button").onclick = function() {
    x *= 1.05; document.body.style.fontSize = x + '%';
    return false
};

document.getElementById("smaller-button").onclick = function() {
    x /= 1.05; document.body.style.fontSize = x + '%';
    return false
};