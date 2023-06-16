let valor1 = document.querySelectorAll('#valor1')[0];
let valor2 = document.querySelectorAll('#valor2')[0];
let valor3 = document.querySelectorAll('#valor3')[0];
let valor4 = document.querySelectorAll('#valor4')[0];

function calcularFatorial(numero) {
    if (numero === 0) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

function calcularFatorialArray(numeros) {
    let fatoriais = numeros.map(function (numero) {
        return calcularFatorial(numero);
    });

    return fatoriais;
}

function buscar() {
    let valoresArray = [];
    let fatorial = [];

    valoresArray.push(parseInt(valor1.value), parseInt(valor2.value), parseInt(valor3.value), parseInt(valor4.value));

    fatorial = calcularFatorialArray(valoresArray);

    bootbox.alert({
        title: 'Resultado',
        message: `<b>${fatorial}</b>`,
    });

    valor1.value = "";
    valor2.value = "";
    valor3.value = "";
    valor4.value = "";  
}

document.getElementById('btnCalcular').addEventListener('click', buscar);