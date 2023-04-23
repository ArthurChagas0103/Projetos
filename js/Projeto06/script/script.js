$("#diaSemana").multipleSelect({
    filter: true
});

let btnCadastrar = document.querySelectorAll('#cadastrar')[0];
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

btnCadastrar.onclick = function () {
    let diasSelecionados = Array.from(selectDiaSemana.selectedOptions, option => option.value);
    let produto = new Object();
    
    produto.nome = inputProduto.value;

    if(diasSelecionados.indexOf('segunda') != -1){
        produto.IDSegunda = idProdutoSegunda++;
        tabelaSegunda.innerHTML += `<tr id="${produto.IDSegunda + "segunda"}"><td class="linhaID">${produto.IDSegunda++}</td><td>${produto.nome}</td><td class="opcoes"><i class="fa fa-pen" onclick="editar(${produto.IDSegunda - 1 + "segunda"})"></i><i class="fa fa-trash" onclick="deletar('${produto.IDSegunda - 1 + "segunda"}')"></i></td></tr>`;
    }

    if(diasSelecionados.indexOf('terça') != -1){
        produto.IDTerca = idProdutoTerca++;
        tabelaTerca.innerHTML += `<tbody><tr id="${produto.IDTerca + "terça"}"><td class="linhaID">${produto.IDTerca}</td><td>${produto.nome}</td><td class="opcoes"><i class="fa fa-pen" onclick="editar('${produto.IDTerca + "terça"}')"></i><i class="fa fa-trash" onclick="deletar('${produto.IDTerca + "terça"}')"></i></td></tr></tbody>`;
    }

    if(diasSelecionados.indexOf('quarta') != -1){
        produto.IDQuarta = idProdutoQuarta++;
        tabelaQuarta.innerHTML += `<tbody><tr id="${produto.IDQuarta + "quarta"}"><td class="linhaID">${produto.IDQuarta}</td><td>${produto.nome}</td><td class="opcoes"><i class="fa fa-pen" onclick="editar('${produto.IDQuarta + "quarta"}')"></i><i class="fa fa-trash" onclick="deletar('${produto.IDQuarta + "quarta"}')"></i></td></tr></tbody>`;
    }

    if(diasSelecionados.indexOf('quinta') != -1){
        produto.IDQuinta= idProdutoQuinta++;
        tabelaQuinta.innerHTML += `<tbody><tr id="${produto.IDQuinta + "quinta"}"><td class="linhaID">${produto.IDQuinta}</td><td>${produto.nome}</td><td class="opcoes"><i class="fa fa-pen" onclick="editar('${produto.IDQuinta + "quinta"}')"></i><i class="fa fa-trash" onclick="deletar('${produto.IDQuinta + "quinta"}')"></i></td></tr></tbody>`;
    }

    if(diasSelecionados.indexOf('sexta') != -1){
        produto.IDSexta = idProdutoSexta++;
        tabelaSexta.innerHTML += `<tbody><tr id="${produto.IDSexta + "sexta"}"><td class="linhaID">${produto.IDSexta}</td><td>${produto.nome}</td><td class="opcoes"><i class="fa fa-pen" onclick="editar('${produto.IDSexta + "sexta"}')"></i><i class="fa fa-trash" onclick="deletar('${produto.IDSexta + "sexta"}')"></i></td></tr></tbody>`;
    }
    
}

function deletar(id) {
    document.getElementById(id).remove()
}

function editar(id) {
    console.log(id)
}