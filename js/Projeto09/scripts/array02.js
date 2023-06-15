let valor1 = document.querySelectorAll('#valor1')[0];
let valor2 = document.querySelectorAll('#valor2')[0];
let valor3 = document.querySelectorAll('#valor3')[0];
let valor4 = document.querySelectorAll('#valor4')[0];

function buscar() {
    let valoresArray = [];
    let numerosPares = "";

    valoresArray.push(parseInt(valor1.value), parseInt(valor2.value), parseInt(valor3.value), parseInt(valor4.value));

    numerosPares = valoresArray.filter(pares => pares % 2 == 0);

    bootbox.alert({
        title: 'Resultado',
        message: `<b>${numerosPares}</b>`,
    });

    valor1.value = "";
    valor2.value = "";
    valor3.value = "";
    valor4.value = "";    
}

document.getElementById('btnBuscar').addEventListener('click', buscar);