let dadosUsuarios1;
let dadosUsuarios2;
let arrayArmazena1 = [];
let arrayArmazena2 = [];

while (dadosUsuarios1 != -1.0){
    dadosUsuarios1 = parseInt(prompt("Digite os dados para serem armazenados no primeiro array ou -1.0 para sair: "));
    
    if(dadosUsuarios1 != -1.0){
        arrayArmazena1.push(dadosUsuarios1);
    }
}

while (dadosUsuarios2 != -1.0){
    dadosUsuarios2 = parseInt(prompt("Digite os dados para serem armazenados no segundo array ou -1.0 para sair: "))
    
    if(dadosUsuarios2 != -1.0){
        arrayArmazena2.push(dadosUsuarios2);
    }
}

console.log(arrayArmazena1);
console.log(arrayArmazena2);

let concatenar = arrayArmazena1.concat(arrayArmazena2);

console.log(concatenar)

concatenar.sort(function(a, b){
    if(a > b){
        return 1;
    }
    if(a < b){
        return -1;
    }
    return 0;
})

concatenar.shift();
concatenar.pop();

console.log(concatenar)

localStorage.setItem("arrayQuestao1", concatenar);