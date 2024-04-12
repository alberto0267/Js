document.addEventListener("DOMContentLoaded", function(){

    let enlaces = document.getElementsByTagName("a");
    if(enlaces.length >=2){

    
    let penultimoEncale =  enlaces[enlaces.length-2];
    let direccion=penultimoEncale.href;
    let enlaces2 = document.getElementById("enlaces")
    enlaces2.textContent +=direccion;
}
else{
    let enlaces2=document.getElementById("enlaceSinNada")
    enlaces2.textContent="NO HAY ENLACES QUE MOSTRAR";
}
})