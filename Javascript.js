var a = document.getElementById("NumeroA");
var b = document.getElementById("NumeroB");
var total = 0;
function suma() {
    total = parseInt(a.value) + parseInt(b.value);
    document.getElementById("ResultadoId").innerHTML = total;
}
function resta() {
    total = parseInt(a.value) - parseInt(b.value);
    document.getElementById("ResultadoId").innerHTML = total;
}
function multiplicacion() {
    total = parseInt(a.value) * parseInt(b.value);
    document.getElementById("ResultadoId").innerHTML = total;
}
function division() {
    total = parseInt(a.value) / parseInt(b.value);
    document.getElementById("ResultadoId").innerHTML = total;
}