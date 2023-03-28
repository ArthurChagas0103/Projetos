let button = document.querySelector('#btnSomar');

function somarNumeros() {
    let valorA = parseFloat(document.querySelector('#numero1').value);
    let valorB = parseFloat(document.querySelector('#numero2').value);
    let resultado = document.querySelector('#resultado');

    resultado.value = valorA + valorB;
}

button.addEventListener('click', somarNumeros)