let btnCalcular = document.querySelectorAll('#calcular')[0];

btnCalcular.onclick = function () {
    calcularIMC();
}

function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura ** 2);

    let resultado = document.getElementById("resultado");
    if (imc < 18.5) {
        resultado.innerHTML = "Você está abaixo do peso!";
    } else if (imc < 25) {
        resultado.innerHTML = "Seu peso está normal!";
    } else if (imc < 30) {
        resultado.innerHTML = "Você está com sobrepeso!";
    } else {
        resultado.innerHTML = "Você está obeso!";
    }
}