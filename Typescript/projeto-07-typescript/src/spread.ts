const meusNumeros: number[] = [1, 6, 7];
const meusNumeros2: number[] = [
    10,
    ...meusNumeros,
    5
]

console.log(meusNumeros);
console.log(meusNumeros2);

const meusNumerosClone = meusNumeros;

meusNumerosClone.push(10);

console.log(meusNumeros);
console.log(meusNumerosClone);

//---------------------------------------------//

const meuObjeto = {
    nome: "João",
    idade: 25,
    cep: "35854-784"
};

const meuObjeto2 = {
    ...meuObjeto,
    endereco: "Rua do Abacaxi"
};

console.log(JSON.stringify(meuObjeto));
console.log(JSON.stringify(meuObjeto2));

const meuObjetoClone = { ...meuObjeto };

console.log(JSON.stringify(meuObjeto));
console.log(JSON.stringify(meuObjetoClone));

class Teste {
    nome: string = "";
}

const objetoTeste = new Teste();

const objetoTeste2 = {
    ...objetoTeste,
    idade: 10
}

console.log(JSON.stringify(objetoTeste));
console.log(JSON.stringify(objetoTeste2));

const soma = (a: number, b: number, c: string) => a + b;

console.log(soma(5, 6, ""));

const somaParametros: [number, number, string] = [4, 9, "Hello World!"];

console.log(soma(...somaParametros));

const somaParametros2: [number, string] = [50, "xpto"];

console.log(soma(10, ...somaParametros2))