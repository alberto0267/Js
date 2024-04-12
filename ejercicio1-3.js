document.addEventListener("DOMContentLoaded", function(){
    let enlaces = document.getElementsByTagName("a");
    let contadorEnlaces = document.getElementById("enlaces");
    let contador = 0;
    
    for(let i = 0; i < enlaces.length; i++) {
        if(enlaces[i].href.includes("http://prueba")) {
            contador++;
        }
    }

    if (contador === 0) {
        contadorEnlaces.textContent = "No hay enlaces que enlacen a http://prueba";
    } else {
        contadorEnlaces.textContent += contador;
    }
});