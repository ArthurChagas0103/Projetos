const somaFuncao = (a: number, b: number): number => a + b;

const multiplicaFuncao = (a: number, b: number): number => {
    let resultado = a * b;
    return resultado;
}

const somaFuncaoTeste = somaFuncao;

somaFuncao(1, 2); //3
somaFuncaoTeste(5, 5); //10

//<---------------------------------------------------------------------------------->

type MinhaAssinaturaDeFuncao = (a: number, b: number) => number;

function executaOperacaoEImprimeResultado(x: number, y: number, operacao: MinhaAssinaturaDeFuncao): void {
    let resultado = operacao(x, y);
    console.log(resultado)  
}

const meuArrayDeOperacoes: MinhaAssinaturaDeFuncao[] = [
    (a1: number, b2: number) => a1 + b2,
    (a1: number, b2: number) => a1 - b2,
    (a1: number, b2: number) => a1 * b2,
    (a1: number, b2: number) => a1 / b2
]

meuArrayDeOperacoes[0](5, 5) //10

executaOperacaoEImprimeResultado(1, 2, meuArrayDeOperacoes[0]); //3
executaOperacaoEImprimeResultado(1, 2, meuArrayDeOperacoes[1]); //-1
executaOperacaoEImprimeResultado(1, 2, meuArrayDeOperacoes[2]); //2
executaOperacaoEImprimeResultado(1, 2, meuArrayDeOperacoes[3]); //0.5   