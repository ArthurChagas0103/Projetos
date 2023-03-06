// let quantidadePacksBebidas = parseInt(prompt("Digite a quantidade de packs de bebida consumidos: "));

// function conversorMlL(ml){
//     return ml / 1000;
// }

// function calculoPrecoTotal(quantidade){
//     return (quantidade * 38) * 5;
// }

// function calculoQuatidadeValorBebidas(quantidadePacksBebidas){
//     let calculoQuantidadeLitros = quantidadePacksBebidas * conversorMlL(4200);
//     let calculoPrecoFinal = calculoPrecoTotal(quantidadePacksBebidas);
//     let calculoQuantidadeLitrosPor5Dias = calculoQuantidadeLitros * 5;

//     console.log(`Os litros consumidos por dia foram: ${calculoQuantidadeLitros}, dando um total de: R$${calculoPrecoFinal} e ${calculoQuantidadeLitrosPor5Dias} litros nos 5 dias`)
// }

// calculoQuatidadeValorBebidas(quantidadePacksBebidas)

let dias = 5;
let valor = 38.00;
let quantidadePacks = parseInt(prompt("Digite a quantidade de de packs consumidos por dia:"));

function calcula(quantidadePacks, dias, valor){
    let quantidadeTotalConsumdo = ((quantidadePacks * dias * 12) * 0.35);

    return(quantidadeTotalConsumdo)
}

function calculaTotalGastos(quantidadePacks, valor, dias){
    let totalPagar = (quantidadePacks * valor * dias);

    return(totalPagar);
}

console.log(calcula(quantidadePacks, dias, valor));
console.log(calculaTotalGastos(quantidadePacks, valor, dias));