function limpa_formulario_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('estado').value = ("");

}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('estado').value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulario_cep();
        alert("CEP não encontrado.");
        document.getElementById('cep').value = ("");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep !== "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('estado').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = '//viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulario_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulario_cep();
    }
}

function formatar(mascara, documento) {
    var i = documento.value.length;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i);

    if (texto.substring(0, 1) != saida) {
        documento.value += texto.substring(0, 1);
    }

}

function idade() {
    var data = document.getElementById("dtnasc").value;
    var dia = data.substr(0, 2);
    var mes = data.substr(3, 2);
    var ano = data.substr(6, 4);
    var d = new Date();
    var ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate();

    ano = +ano,
        mes = +mes,
        dia = +dia;

    var idade = ano_atual - ano;

    if (mes_atual < mes || mes_atual == mes_aniversario && dia_atual < dia) {
        idade--;
    }
    return idade;
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

function mudarTela() {
    window.open("cadastro.html",'_self')
};

var cadastro = { Nome: null, cpf: null, dtnasc: null, sexo: null, celular: null, telefone: null, email: null, cep: null, rua: null, numero: null, bairro: null, cidade: null, estado: null, usuario: null, senha: null, confirmarSenha: null, codigoAdmin: null, cargo: null, funcao: null, setor: null, };
console.log(cadastro);

document.getElementById("lblNome").innerHTML = "Nome";
document.getElementById("lblCpf").innerHTML = "CPF";
document.getElementById("lblData").innerHTML = "Nascimento";
document.getElementById("lblSexo").innerHTML = "Sexo";
document.getElementById("lblCelular").innerHTML = "Celular";
document.getElementById("lblTelefone").innerHTML = "Telefone";
document.getElementById("lblEmail").innerHTML = "Email";
document.getElementById("lblCep").innerHTML = "CEP";
document.getElementById("lblEndereco").innerHTML = "Endereço";
document.getElementById("lblUsuario").innerHTML = "Usuário";
document.getElementById("lblSenha").innerHTML = "Senha";
document.getElementById("lblConfirmarSenha").innerHTML = "Confirmar Senha";
document.getElementById("lblCodAdmin").innerHTML = "Código do Administrador";
document.getElementById("lblCargo").innerHTML = "Cargo";
document.getElementById("lblFuncao").innerHTML = "Função";
document.getElementById("lblSetor").innerHTML = "Setor";

document.getElementById("cep").placeholder = "Apenas números";
document.getElementById("txtEmail").placeholder = "email@email.com";
document.getElementById("txtTelefone").placeholder = "XX XXXXX-XXXX";
document.getElementById("txtCelular").placeholder = "XX XXXXX-XXXX";