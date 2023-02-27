Arco_iris = ["Vermelho", "Laranja", "Marrom", "Azul"];

console.log(Arco_iris);

var removerCor = Arco_iris.splice(2, 1);

console.log("Cor removida: " + removerCor);

var adicionaCor = Arco_iris
adicionaCor.splice(2, 0, "Amarelo", "Verde")
adicionaCor.splice(5, 0, "Roxo")

console.log(adicionaCor)