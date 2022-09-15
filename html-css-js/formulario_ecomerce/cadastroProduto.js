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

var cadastro = { Nome: null, codigo: null, dtFornecimento: null, valor: null, funcionario: null, selectFoto: null, observacoes: null };
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

function formatarCodigo() {
    var cod_formatado = document.getElementById("txtCodigo").value;
    cod_formatado = cod_formatado.slice(0, 6);
    document.getElementById("txtCodigo").value = cod_formatado;
}

function formatarFornecimento() {
    var fornecimento_formatado = document.getElementById("txtFornecimento").value;
    fornecimento_formatado = fornecimento_formatado.slice(0, 10);
    document.getElementById("txtFornecimento").value = fornecimento_formatado;

    var texto = document.getElementById("txtFornecimento").value;

    if (texto[2] != "/") {
        if (texto[2] != undefined) {
            document.getElementById("txtFornecimento").value = texto.slice(0, 2) + "/" + texto[2];
        }
    }

    if (texto[5] != "/") {
        if (texto[5] != undefined) {
            document.getElementById("txtFornecimento").value = texto.slice(0, 5) + "/" + texto[5];
        }
    }
}

function mascara_dinheiro_virgula() {
    var money_formatado = document.getElementById("txtValor").value;
    money_formatado = money_formatado.slice(0, 6);
    document.getElementById("txtValor").value = money_formatado;

    var dinheiro_formatado = document.getElementById("txtValor").value;

    if (dinheiro_formatado[dinheiro_formatado.length - 3] != ",") {
        if (dinheiro_formatado[dinheiro_formatado.length - 2] == ",") {
            document.getElementById("txtValor").value = dinheiro_formatado + "0";
        }
        else {
            if (dinheiro_formatado[dinheiro_formatado.length - 1] == ",") {
                document.getElementById("txtValor").value = dinheiro_formatado + "00";
            }
            else {
                document.getElementById("txtValor").value = dinheiro_formatado + ",00";
            }
        }
    }
}