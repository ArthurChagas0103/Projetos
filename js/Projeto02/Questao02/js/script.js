var endereco = {
    rua: "Itajubá",
    numero: 230,
    bairro: "Floresta",
    cidade: "Belo Horizonte",
    uf: "MG"
};

function exibirEndereco(endereco){
    console.log("O usuário mora em " + endereco.cidade + "/" + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + endereco.rua + ", nº " + endereco.numero + ".")
}

exibirEndereco(endereco)