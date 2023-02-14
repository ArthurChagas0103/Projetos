$("#select").change(function() {
    if($("#select").val() == 1){
        $('#iframe').attr('src', "../Questao01/index.html");
    }
    else if($("#select").val() == 2){
        $('#iframe').attr('src', "../Questao02/index.html");
    }
    else if($("#select").val() == 3){
        $('#iframe').attr('src', "../Questao03/index.html");
    }
    else if($("#select").val() == 4){
        $('#iframe').attr('src', "../Questao04/index.html");
    }
    else if($("#select").val() == 5){
        $('#iframe').attr('src', "../Questao05/index.html");
    }
});