"use strict";
const meusNumeros = [1, 6, 7];
const meusNumeros2 = [
    10,
    ...meusNumeros,
    5
];
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
const meuObjeto2 = Object.assign(Object.assign({}, meuObjeto), { endereco: "Rua do Abacaxi" });
console.log(JSON.stringify(meuObjeto));
console.log(JSON.stringify(meuObjeto2));
const meuObjetoClone = Object.assign({}, meuObjeto);
console.log(JSON.stringify(meuObjeto));
console.log(JSON.stringify(meuObjetoClone));
class Teste {
    constructor() {
        this.nome = "";
    }
}
const objetoTeste = new Teste();
const objetoTeste2 = Object.assign(Object.assign({}, objetoTeste), { idade: 10 });
console.log(JSON.stringify(objetoTeste));
console.log(JSON.stringify(objetoTeste2));
const soma = (a, b, c) => a + b;
console.log(soma(5, 6, ""));
const somaParametros = [4, 9, "Hello World!"];
console.log(soma(...somaParametros));
const somaParametros2 = [50, "xpto"];
console.log(soma(10, ...somaParametros2));
