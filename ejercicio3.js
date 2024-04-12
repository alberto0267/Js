function anade(){
    let lista = document.getElementById("lista");
    
    // Crear un nuevo elemento li
    let nuevoElemento = document.createElement("li");
    
    // Agregar texto al nuevo elemento
    nuevoElemento.textContent = "Nuevo elemento añadido";
    
    // Agregar el nuevo elemento a la lista
    lista.appendChild(nuevoElemento);
}