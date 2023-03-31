let btnVermelho = document.querySelector('#btnVermelho');
let btnVerde = document.querySelector('#btnVerde');
let btnAzul = document.querySelector('#btnAzul');
let btnAmarelo = document.querySelector('#btnAmarelo');
var corpo = document.querySelector('body');

corpo.addEventListener('load', padrao)

function padrao() {
    corpo.style.backgroundColor = '#f2f2f2'
}

function vermelho() {
    corpo.style.backgroundColor = 'red'
}

function verde() {
    corpo.style.backgroundColor = 'green'
}

function azul() {
    corpo.style.backgroundColor = 'blue'
}

function amarelo() {
    corpo.style.backgroundColor = 'yellow'
}

btnVermelho.addEventListener('click', vermelho)
btnVerde.addEventListener('click', verde)
btnAzul.addEventListener('click', azul)
btnAmarelo.addEventListener('click', amarelo)