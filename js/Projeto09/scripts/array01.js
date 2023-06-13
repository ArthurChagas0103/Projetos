let nota1 = document.querySelectorAll('#nota1')[0];
let nota2 = document.querySelectorAll('#nota2')[0];
let nota3 = document.querySelectorAll('#nota3')[0];
let nota4 = document.querySelectorAll('#nota4')[0];

let notasAlunos = [];
let mediaAlunos = 0;

function calcular() {
    notasAlunos.push(parseInt(nota1.value), parseInt(nota2.value), parseInt(nota3.value), parseInt(nota4.value));

    let valorInicialReduce = 0;

    let somaNotas = notasAlunos.reduce(
        (acumulador, valorCorrente) => acumulador + valorCorrente,
        valorInicialReduce
    );

    mediaAlunos = somaNotas / notasAlunos.length

    bootbox.alert({
        title: 'Resultado',
        message: `<b>${mediaAlunos}</b>`,
    });

    nota1.value = ""
    nota2.value = ""
    nota3.value = ""
    nota4.value = ""
}

document.getElementById('btnCalcular').addEventListener('click', calcular);