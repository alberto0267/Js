document.addEventListener("DOMContentLoaded", function(){
    let enlaces = document.getElementsByTagName("a");
    let contadorEnlaces = document.getElementById("enlaces")
    contadorEnlaces.textContent += enlaces.length;
})