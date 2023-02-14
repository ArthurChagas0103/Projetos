let valorProduto;
let numeroParcelas;
let valorFinalProduto;

valorProduto = Number(prompt("Digite o valor do produto (R$): "));
numeroParcelas = Number(prompt("Digite o número de parcelas (3 ou 5): "));

if (numeroParcelas === 3) {
    valorFinalProduto = ((10 * valorProduto) / 100) + valorProduto
}
else if(numeroParcelas === 5){
    valorFinalProduto = ((20 * valorProduto) / 100) + valorProduto
}

alert("O valor total do produto é: " + valorFinalProduto)