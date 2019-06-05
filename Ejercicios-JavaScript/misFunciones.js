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
function suma() {
    document.opeMat.sum_total.value = Number (document.opeMat.sum_num1.value) + Number (document.opeMat.sum_num2.value);
}
function rest() {
    document.opeMat.res_total.value = Number (document.opeMat.res_num1.value) - Number (document.opeMat.res_num2.value);
}
function mult() {
    document.opeMat.mul_total.value = Number (document.opeMat.mul_num1.value) * Number (document.opeMat.mul_num2.value);
}
function divi() {
    document.opeMat.mul_total.value = Number (document.opeMat.div_num1.value) / Number (document.opeMat.div_num2.value);
}
function conv_Grados_Rad(id_elem, valor) {
    if(id_elem=="grados"){
        document.getElementById("radianes").value = valor*Math.PI/180;
    }
    if(id_elem=="radianes"){
        document.getElementById("grados").value = valor*180/Math.PI;
    }
}
function nostrar_ocultar(id_elem) {
    if(id_elem=="ocultarDiv"){
        document.getElementById("unDiv").style.display = 'none';
    }
    if(id_elem=="mostrarDiv"){
        document.getElementById("unDiv").style.display = 'block';
    }
}
function dibujarCircCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#1854ac"; //Color
    ctx.beginPath(); //comenzar
    ctx.rect(0, 0, 30, 40); //Posicion de inicio y medidas
    ctx.fill(); //rellenar
    ctx.closePath(); //Levantar el lapiz

    ctx.fillStyle = "#af3679";
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 30, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
}
function dibujarCuadricula() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log("Entro a a funcion");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000";

    ctx.beginPath();

    for(var i=0;i<canvas.width;i+=10){
        ctx.moveTo(i,0);
        ctx.lineTo(i, canvas.height);
    }
    for(var i=0;i<canvas.height;i+=10){
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
    }
    ctx.stroke();
    ctx.closePath();
}
function dibujar() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    y = a * x + b;
    console.log({x,y});
    x++;

    dibujarCuadricula();

    ctx.fillRect(x,y,3,3);
    ctx.fillStyle = "#0072ff";

    if (x> canvas.width){
        clearInterval(intervalo);
    }
}
function animar() {
    var canvas = document.getElementById("myCanvas");
    x =0;
    a = -1* canvas.height/canvas.width;
    b = canvas.height
    setInterval(dibujar, 33)
}
function dibujarImg() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function(){ //pre-carga la funcion para que se ejecute al primer click
        ctx.drawImage(img, 50, 50);
    }
}