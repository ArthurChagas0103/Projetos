const textoTradicional: string = "lorem ipsum \n lorem ipsum \n lorem ipsum";

const textoTemplateString: string = `lorem ipsum
lorem ipsum
lorem ipsum
`;

console.log(textoTemplateString)

const textoComExpressao: string = `A soma de 1 + 1 é ${1 + 1}`;

console.log(textoComExpressao);

const a = 5;
const b = 6;
const textoComSoma = `A soma de ${a} + ${b} = ${a + b}`;

console.log(textoComSoma);

const somaArrow = (a: number, b: number) => a + b;
const textoComSoma2 = `A soma de ${a} + ${b} = ${somaArrow(a, b)}`;

console.log(textoComSoma2)