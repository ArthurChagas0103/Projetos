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
