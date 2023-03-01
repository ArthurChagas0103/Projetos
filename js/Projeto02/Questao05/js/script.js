let usuarios = [{
    nome: "Gabriel",
    habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
    nome: "Lara",
    habilidades: ["JAVA", "PHP", "Laravel"]
}];

function habilidades(usuarios){
    for(let x = 0; x < usuarios.length; x++){
        console.log(`${usuarios[x].nome} possui as habilidades: ${usuarios[x].habilidades.join(", ")}`);
    }
}

habilidades(usuarios)