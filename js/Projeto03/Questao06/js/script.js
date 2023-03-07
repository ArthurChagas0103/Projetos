let pessoas = [{
    nome: 'Harry Potter',
    idade: 15,
    RG: '18.641.631-3'
},
{
    nome: 'Gandalf',
    idade: 1706,
    RG: '18.374.894-3'
},
{
    nome: 'Jon Snow',
    idade: 28,
    RG: '36.467.422-2'
},
{
    nome: 'Benjamin Martin Raimundo Figueiredo',
    idade: 17,
    RG: '50.323.889-2'
},{
    nome: 'Priscila Alana Vieira',
    idade: 13,
    RG: '49.815.395-2'
},{
    nome: 'Marcelo Bryan Galvão',
    idade: 42,
    RG: '31.806.080-2'
},{
    nome: 'Erick Sérgio Daniel Rocha',
    idade: 78,
    RG: '24.107.044-2'
},{
    nome: 'Rita Carla Bernardes',
    idade: 11,
    RG: '41.390.986-4'
},{
    nome: 'Otávio André Manuel Viana',
    idade: 8,
    RG: '19.400.264-0'
},{
    nome: 'Marli Rosângela Ayla Dias',
    idade: 18,
    RG: '29.221.678-6'
},
];

function procuraMaiorIdade(pessoas){
    let maiorDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);

    console.log(maiorDeIdade)

    // for(let x = 0; x < pessoas.length; x++){
    //     console.log(`Nome: ${maiorDeIdade[x].nome} - Idade: ${maiorDeIdade[x].idade}`)
    // }
}

procuraMaiorIdade(pessoas)