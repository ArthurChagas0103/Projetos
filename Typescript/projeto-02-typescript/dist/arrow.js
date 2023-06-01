"use strict";
const somaFuncao = (a, b) => a + b;
const multiplicaFuncao = (a, b) => {
    let resultado = a * b;
    return resultado;
};
const somaFuncaoTeste = somaFuncao;
somaFuncao(1, 2); //3
somaFuncaoTeste(5, 5); //10
function executaOperacaoEImprimeResultado(x, y, operacao) {
    let resultado = operacao(x, y);
    console.log(resultado);
}
const meuArrayDeOperacoes = [
    (a1, b2) => a1 + b2,
    (a1, b2) => a1 - b2,
    (a1, b2) => a1 * b2,
    (a1, b2) => a1 / b2
];
meuArrayDeOperacoes[0](5, 5); //10
executaOperacaoEImprimeResultado(1, 2, meuArrayDeOperacoes[0]); //3
executaOperacaoEImprimeResultado(1, 2, meuArrayDeOperacoes[1]); //-1
executaOperacaoEImprimeResultado(1, 2, meuArrayDeOperacoes[2]); //2
executaOperacaoEImprimeResultado(1, 2, meuArrayDeOperacoes[3]); //0.5   
