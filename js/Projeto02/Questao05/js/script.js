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
        return "O Gabriel possui as habilidades: " + usuarios[x].habilidades.join(", ") + "\n" + "A Lara possui as habilidades: " + usuarios[x].habilidades.join(", ")
    }

}

console.log(habilidades(usuarios))