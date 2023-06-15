let nome1 = document.querySelectorAll('#nome1')[0];
let nome2 = document.querySelectorAll('#nome2')[0];
let nome3 = document.querySelectorAll('#nome3')[0];
let nome4 = document.querySelectorAll('#nome4')[0];
let idade1 = document.querySelectorAll('#idade1')[0];
let idade2 = document.querySelectorAll('#idade2')[0];
let idade3 = document.querySelectorAll('#idade3')[0];
let idade4 = document.querySelectorAll('#idade4')[0];

function buscar() {
    let valoresArray = [];
    let idosos = [];
    let nomeIdadeIdosos = "";

    valoresArray.push(
        {nome: nome1.value, idade: parseInt(idade1.value)},
        {nome: nome2.value, idade: parseInt(idade2.value)},
        {nome: nome3.value, idade: parseInt(idade3.value)},
        {nome: nome4.value, idade: parseInt(idade4.value)},
    )

    idosos = valoresArray.filter(function(valor) { return valor.idade >= 60; });

    for(let i = 0; i < idosos.length; i++){
        nomeIdadeIdosos += `${idosos[i].nome} de ${idosos[i].idade} anos <br>`
    }

    bootbox.alert({
        title: 'Resultado',
        message: `<b>${nomeIdadeIdosos}</b>`,
    });

    nome1.value = "";
    nome2.value = "";
    nome3.value = "";
    nome4.value = "";    
    idade1.value = "";  
    idade2.value = "";  
    idade3.value = "";  
    idade4.value = "";  
}

document.getElementById('btnBuscar').addEventListener('click', buscar);