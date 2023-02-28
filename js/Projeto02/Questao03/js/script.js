var habilidade = ["Javascript", "ReactJS", "React Native", "Angular"];

function temHabilidade(habilidade)
{
    let habilidadeTrueFalse = habilidade.indexOf("Javascript");

    if(habilidadeTrueFalse == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(temHabilidade(habilidade)); 