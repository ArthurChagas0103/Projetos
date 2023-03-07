let anosEstudo = Number(prompt("Digite seus anos de estudos: "));;

let titulo = ["Junior", "Pleno", "Senior", "Mestre Jedi"];

function experiencia(anos, titulo)
{
    if(anos >= 0 && anos <= 1){
        return titulo[0];
    }
    else if(anos > 1 && anos <= 3){
        return titulo[1];
    }
    else if(anos > 3 && anos <= 6){
        return titulo[2];
    }
    else {
        return titulo[3];
    } 
}

console.log(experiencia(anosEstudo, titulo));