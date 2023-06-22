const meuObjetoDest = {
    nome: "João",
    idade: 25,
    cep: "35854-784"
};

const { idade, cep } = meuObjetoDest;

console.log(idade);
console.log(cep);

//-------------------------------------------------//

const meuNumerosDest: number[] = [6, 7, 5];
const [numero1, numero2, numero3] = meuNumerosDest;

console.log(numero1);
console.log(numero2);
console.log(numero3);

//-------------------------------------------------//

const meuObjetos = [
    {
        nome: "João",
        idade: 25,
        cep: "35854-784"
    },
    {
        nome: "João",
        idade: 25,
        cep: "35854-784"
    }
];

const [objeto1, objeto2] = meuObjetos;
const {idade: idade2} = objeto2;

console.log(idade2)