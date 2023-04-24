$("#diaSemana").multipleSelect({
    filter: true
});

let btnCadastrar = document.querySelectorAll('#cadastrar')[0];
let btnIMC = document.querySelectorAll('#IMC')[0];
let inputProduto = document.querySelectorAll('#produto')[0];
let tabelaSegunda = document.querySelector('#segunda');
let tabelaTerca = document.querySelector('#terca');
let tabelaQuarta = document.querySelector('#quarta');
let tabelaQuinta = document.querySelector('#quinta');
let tabelaSexta = document.querySelector('#sexta');
let selectDiaSemana = document.getElementById("diaSemana");

let idProdutoSegunda = 0;
let idProdutoTerca = 0;
let idProdutoQuarta = 0;
let idProdutoQuinta = 0;
let idProdutoSexta = 0;
let diasSemana = [];
let isEdit = false;
let idForEdit = "";

btnIMC.onclick = function () {
    window.open('./pages/IMC.html')
}

btnCadastrar.onclick = function () {
    if (inputProduto.value == "") {
        bootbox.alert('Por favor, escreva um produto para o cardápio!');
        return
    }
    else if (selectDiaSemana.value == "") {
        bootbox.alert('Por favor, escolha um ou vários dias para adicionar ao cardápio!');
        return
    }

    if (isEdit === false) {
        let diasSelecionados = Array.from(selectDiaSemana.selectedOptions, option => option.value);
        let produto = new Object();

        produto.nome = inputProduto.value;

        if (diasSelecionados.indexOf('segunda') != -1) {
            produto.IDSegunda = idProdutoSegunda++;
            tabelaSegunda.innerHTML += `<tr id="${produto.IDSegunda + "segunda"}"><td class="linhaID">${produto.IDSegunda++}</td><td>${produto.nome}</td><td class="opcoes"><i class="fa fa-pen" onclick="editar('${produto.IDSegunda - 1 + "segunda"}','segunda','Segunda')"></i><i class="fa fa-trash" onclick="deletar('${produto.IDSegunda - 1 + "segunda"}')"></i></td></tr>`;
        }

        if (diasSelecionados.indexOf('terça') != -1) {
            produto.IDTerca = idProdutoTerca++;
            tabelaTerca.innerHTML += `<tr id="${produto.IDTerca + "terça"}"><td class="linhaID">${produto.IDTerca}</td><td>${produto.nome}</td><td class="opcoes"><i class="fa fa-pen" onclick="editar('${produto.IDTerca + "terça"}','terça','Terça')"></i><i class="fa fa-trash" onclick="deletar('${produto.IDTerca + "terça"}')"></i></td></tr>`;
        }

        if (diasSelecionados.indexOf('quarta') != -1) {
            produto.IDQuarta = idProdutoQuarta++;
            tabelaQuarta.innerHTML += `<tr id="${produto.IDQuarta + "quarta"}"><td class="linhaID">${produto.IDQuarta}</td><td>${produto.nome}</td><td class="opcoes"><i class="fa fa-pen" onclick="editar('${produto.IDQuarta + "quarta"}','quarta','Quarta')"></i><i class="fa fa-trash" onclick="deletar('${produto.IDQuarta + "quarta"}')"></i></td></tr>`;
        }

        if (diasSelecionados.indexOf('quinta') != -1) {
            produto.IDQuinta = idProdutoQuinta++;
            tabelaQuinta.innerHTML += `<tr id="${produto.IDQuinta + "quinta"}"><td class="linhaID">${produto.IDQuinta}</td><td>${produto.nome}</td><td class="opcoes"><i class="fa fa-pen" onclick="editar('${produto.IDQuinta + "quinta"}','quinta','Quinta')"></i><i class="fa fa-trash" onclick="deletar('${produto.IDQuinta + "quinta"}')"></i></td></tr>`;
        }

        if (diasSelecionados.indexOf('sexta') != -1) {
            produto.IDSexta = idProdutoSexta++;
            tabelaSexta.innerHTML += `<tr id="${produto.IDSexta + "sexta"}"><td class="linhaID">${produto.IDSexta}</td><td>${produto.nome}</td><td class="opcoes"><i class="fa fa-pen" onclick="editar('${produto.IDSexta + "sexta"}','sexta','Sexta')"></i><i class="fa fa-trash" onclick="deletar('${produto.IDSexta + "sexta"}')"></i></td></tr>`;
        }

        isEdit = false;
        idForEdit = "";
        inputProduto.value = "";

        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }

        var button = document.querySelector('button.ms-choice');
        var span = button.querySelector('span');
        span.textContent = '';
    }
    else {
        bootbox.confirm({
            message: 'Tem certeza que gostaria de editar o produto?',
            title: 'Aviso!',
            buttons: {
                confirm: {
                    label: 'Sim',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'Não',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result == false) {
                    return
                }
                else {
                    let buscaElementoByID = document.getElementById(idForEdit);

                    buscaElementoByID.getElementsByTagName("td")[1].textContent = inputProduto.value;

                    isEdit = false;
                    idForEdit = "";
                    inputProduto.value = "";

                    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
                    for (var i = 0; i < checkboxes.length; i++) {
                        checkboxes[i].checked = false;
                    }

                    var button = document.querySelector('button.ms-choice');
                    var span = button.querySelector('span');
                    span.textContent = '';
                }
            }
        });
    }
}

function deletar(id) {
    bootbox.confirm({
        message: 'Tem certeza que gostaria de excluir o produto?',
        title: 'Aviso!',
        buttons: {
            confirm: {
                label: 'Sim',
                className: 'btn-success'
            },
            cancel: {
                label: 'Não',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result == false) {
                return
            }
            else {
                document.getElementById(id).remove()
            }
        }
    });

}

function editar(id, valueDiaSemana, diaSemana) {
    let buscaElementoByID = document.getElementById(id);

    inputProduto.value = buscaElementoByID.getElementsByTagName("td")[1].textContent;

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].value === valueDiaSemana) {
            checkboxes[i].checked = true;
        }
    }

    var button = document.querySelector('button.ms-choice');
    var span = button.querySelector('span');
    span.textContent = diaSemana;

    isEdit = true;
    idForEdit = id;
}