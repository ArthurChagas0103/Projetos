"use strict";
let nome = "";
let idade = 0;
let disciplina = "";
let especializacao = "";
let empresa = "";
let salario = 0;
nome = "Arthur Gomes Chagas";
idade = 18;
disciplina = "Desenvolvimento Web";
especializacao = "Desenvolvimento Web e Mobile";
empresa = "Google";
salario = 20000.00;
console.log(`Me chamo ${nome} e tenho ${idade} anos. Estudo no Colégio Cotemig e faço a disciplina de ${disciplina}. Estou iniciando na carreira de programação e gostaria de me especializar em ${especializacao}. Quando eu formar, pretendo trabalha na empresa ${empresa} e ter um salário de R$${salario}!`);
let numeros = [1, 2, 3, 4, 5];
for (let chave in numeros) {
    console.log("chave =", chave);
}
for (let valor of numeros) {
    console.log("valor =", valor);
}
let valor = 1000;
while (valor > 0) {
    console.log("Valor =", valor);
    valor -= 100;
}
//npx tsc
//nod .\dist\index.js
//${} ou ,
