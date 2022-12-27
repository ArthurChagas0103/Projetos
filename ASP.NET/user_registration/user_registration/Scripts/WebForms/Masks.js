$(document).ready(function () {
    var $maskCpf = $("#txtCpf");
    $maskCpf.mask('000.000.000-00', { reverse: false });
});

$(document).ready(function () {
    var $maskBirthDate = $("#txtDataNascimento");
    $maskBirthDate.mask('00/00/0000', { reverse: false });
});

$(document).ready(function () {
    var $maskCellphone = $("#txtCelular");
    $maskCellphone.mask('(00) 0 0000-0000', { reverse: false });
});

$(document).ready(function () {
    var $maskTelephone = $("#txtTelefone");
    $maskTelephone.mask('(00) 0000-0000', { reverse: false });
});

$(document).ready(function () {
    var $maskAdditionalTelephone = $("#txtTelefoneAdicional");
    $maskAdditionalTelephone.mask('(00) 0000-0000', { reverse: false });
});

$(document).ready(function () {
    var $maskCep = $("#txtCep");
    $maskCep.mask('00000-000', { reverse: false });
});