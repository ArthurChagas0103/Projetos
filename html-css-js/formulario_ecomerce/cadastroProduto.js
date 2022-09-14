function formatar(mascara, documento) {
    var i = documento.value.length;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i);

    if (texto.substring(0, 1) != saida) {
        documento.value += texto.substring(0, 1);
    }

}

function exibe(i) {
    document.getElementById(i).readOnly = true;
}

function desabilita(i) {

    document.getElementById(i).disabled = true;
}
function habilita(i) {
    document.getElementById(i).disabled = false;
}

var cadastro = { Nome: null, codigo: null, dtFornecimento: null, valor: null, funcionario: null, selectFoto: null, observacoes: null};
console.log(cadastro);

document.getElementById("lblNomeProduto").innerHTML = "Nome do Produto";
document.getElementById("lblCodigo").innerHTML = "Código";
document.getElementById("lblFornecimento").innerHTML = "Fornecimento";
document.getElementById("lblValor").innerHTML = "Valor";
document.getElementById("lblFuncionario").innerHTML = "Funcionário";
document.getElementById("lblFoto").innerHTML = "Selecione uma Foto";
document.getElementById("lblObservacoes").innerHTML = "Observações";

document.getElementById("txtValor").placeholder = "00.00";
document.getElementById("txtCodigo").placeholder = "Apenas números";
document.getElementById("txtFornecimento").placeholder = "DD/MM/AAAA";
