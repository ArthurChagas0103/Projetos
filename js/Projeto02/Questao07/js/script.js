let quantidadePacksBebidas = parseInt(prompt("Digite a quantidade de packs de bebida consumidos: "));

function conversorMlL(ml){
    return ml / 1000;
}

function calculoPrecoTotal(quantidade){
    return quantidade * 38;
}

function calculoQuatidadeValorBebidas(quantidadePacksBebidas){
    let calculoQuantidadeLitros =  quantidadePacksBebidas * conversorMlL(4200);
    let calculoPrecoFinal =  calculoPrecoTotal(quantidadePacksBebidas);

    console.log(`Os litros consumidos foram: ${calculoQuantidadeLitros}, dando um total de: R$${calculoPrecoFinal}`)
}

calculoQuatidadeValorBebidas(quantidadePacksBebidas)