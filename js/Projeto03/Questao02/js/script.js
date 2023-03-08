let getLocalStorage = localStorage.getItem("arrayQuestao1");

let arrayQuestao1 = [];

arrayQuestao1 = getLocalStorage.split(",");

var arrayNumerico = arrayQuestao1.map(Number);

console.log(arrayNumerico)

let procuraNumero = parseInt(prompt("Digite o número que gostaria de procurar: "))

if(arrayNumerico.indexOf(procuraNumero) != -1){
    console.log("Número encontrado!")
}
else{
    console.log("Número não encontrado!")
}