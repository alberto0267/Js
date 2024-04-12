function muestra(){
    let enlace= document.getElementById("enlace");
    let texto=document.getElementById("adicional");

    // texto.classList.remove("oculto");
    // enlace.style.display="none";
    if(texto.classList.contains("oculto")){
        texto.classList.remove("oculto");
        enlace.textContent="volver a ocultar";
    }
    else{
        texto.classList.add("oculto");
        enlace.textContent="seguir leyendo";
    }
}