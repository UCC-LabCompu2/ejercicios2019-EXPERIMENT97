/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function saludar(){
    alert("Hola Lucas")
}
function convertir(id_elem, valor_elem) {
    if(isNaN(valor_elem)){
        alert("El valor de "+id_elem+" debe ser numerico");
        document.getElementById(id_elem).value = "";
    }
    if(!isNaN(valor_elem)){
        if(id_elem == "metro"){
            document.getElementById("pulgada").value = valor_elem*39.3701;
            document.getElementById("pie").value = valor_elem*3.28084;
            document.getElementById("yarda").value = valor_elem*1.09361;
        }
        if (id_elem == "pulgada"){
            document.getElementById("metro").value = valor_elem*0.0254;
            document.getElementById("pie").value = valor_elem*0.0833333;
            document.getElementById("yarda").value = valor_elem*0.0277778;
        }
        if (id_elem == "pie"){
            document.getElementById("metro").value = valor_elem*0.3048;
            document.getElementById("pulgada").value = valor_elem*12;
            document.getElementById("yarda").value = valor_elem*0.333333;;
        }
        if (id_elem == "yarda"){
            document.getElementById("metro").value = valor_elem*0.9144;
            document.getElementById("pulgada").value = valor_elem*36;
            document.getElementById("pie").value = valor_elem*3;
        }
    }
}