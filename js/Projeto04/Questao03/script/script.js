let linkVermelho = document.querySelector('#linkVermelho');
let linkVerde = document.querySelector('#linkVerde');
let linkAzul = document.querySelector('#linkAzul');
let linkAmarelo = document.querySelector('#linkAmarelo');
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

linkVermelho.addEventListener('mouseover', vermelho)
linkVerde.addEventListener('mouseover', verde)
linkAzul.addEventListener('mouseover', azul)
linkAmarelo.addEventListener('mouseover', amarelo)