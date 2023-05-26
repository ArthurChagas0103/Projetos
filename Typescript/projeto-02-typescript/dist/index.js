"use strict";
let valores = [2.99, 10.50, 1.25, 4.80, 3.60];
for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - 1 - i; j++) {
        if (valores[j] > valores[j + 1]) {
            let auxiliar = valores[j];
            valores[j] = valores[j + 1];
            valores[j + 1] = auxiliar;
        }
    }
}
console.log(valores);
function soma(a, b) {
    return a + b;
}
let total = soma(5, 6);
console.log(total);
function contar(valor) {
    if (valor >= 0) {
        console.log(valor);
        contar(valor - 1);
    }
}
contar(10);
function somaRecursiva(valores, posicao = 0) {
    let soma = 0;
    if (posicao < valores.length) {
        soma = valores[posicao] + somaRecursiva(valores, posicao + 1);
    }
    return soma;
}
const listaValores = [4, 10, 6, 5, 4];
const somaArray = somaRecursiva(listaValores);
console.log(somaArray);
