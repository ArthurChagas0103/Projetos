let nome1 = document.querySelectorAll('#nome1')[0];
let nome2 = document.querySelectorAll('#nome2')[0];
let nome3 = document.querySelectorAll('#nome3')[0];
let nome4 = document.querySelectorAll('#nome4')[0];
let abreviatura1 = document.querySelectorAll('#abreviatura1')[0];
let abreviatura2 = document.querySelectorAll('#abreviatura2')[0];
let abreviatura3 = document.querySelectorAll('#abreviatura3')[0];
let abreviatura4 = document.querySelectorAll('#abreviatura4')[0];

function formatar() {
    let valoresArray = [];
    let estadosHTML = "";

    valoresArray.push(
        { nome: nome1.value, abreviatura: abreviatura1.value },
        { nome: nome2.value, abreviatura: abreviatura1.value },
        { nome: nome3.value, abreviatura: abreviatura1.value },
        { nome: nome4.value, abreviatura: abreviatura1.value }
    )

    estadosHTML = valoresArray.map(function (estado) {
        return `<li><i>${estado.nome} - ${estado.abreviatura}</i></li>`;
    });

    bootbox.alert({
        title: 'Resultado',
        message: `<b>${estadosHTML.join('')}</b>`
    });

    nome1.value = "";
    nome2.value = "";
    nome3.value = "";
    nome4.value = "";
    abreviatura1.value = "";
    abreviatura2.value = "";
    abreviatura3.value = "";
    abreviatura4.value = "";
}

document.getElementById('btnFormatar').addEventListener('click', formatar);