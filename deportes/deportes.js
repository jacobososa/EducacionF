//Arreglo que contiene las respuestas correctas
let correctas = [2,2,3,1,2];

//Respuestas del usuario

let opcion_elegida=[];
let cantidad_correctas=0;

//funcion
function respuesta(num_pregunta, seleccionada){
    //guardar la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;
    //codigo para guardar el color al seleccionar una opción
    id="p" + num_pregunta;
    
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "rgba(169, 169, 169, 0.8)"; 
    labels[5].style.backgroundColor = "rgba(169, 169, 169, 0.8)";
    labels[7].style.backgroundColor = "rgba(169, 169, 169, 0.8)";

    //doy el color a label seleccionado
    seleccionada.parentNode.style.backgroundColor = "rgba(202, 156, 196, 0.8)";
}

//Funcion que compara  los arreglos para saber  cuantas estuvieran correctas
function corregir(){
    cantidad_correctas = 0;
    for(i=0; i < correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
} 