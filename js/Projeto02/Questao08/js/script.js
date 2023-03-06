let notasInput = prompt("Digite as cinco notas separadas por vírgulas (Quesitos: criatividade, originalidade, elegância, acabamento e conservação):");
let notas = notasInput.split(",").map(function (nota) { return parseFloat(nota.trim()); });

let notasAceitas = notas.find(nota => nota < 5 || nota > 10);

if (notasAceitas == undefined) {
  function calcularNotaFinal(notas) {
    notas.sort(function (a, b) { return a - b });

    let notasCentrais = notas.slice(1, -1);
    let somaNotasCentrais = notasCentrais.reduce(function (a, b) { return a + b; });
    let notaFinal = somaNotasCentrais / notasCentrais.length;

    return notaFinal.toFixed(1);
  }

  let notaFinalCriatividade = calcularNotaFinal(notas);
  console.log("A nota final de criatividade é: " + notaFinalCriatividade);
}
else {
  console.log("Notas inválidas!")
}



// let quesitos = ["criatividade", "originalidade", "elegancia", "acabamento", "conservacao"];

// soma = 0;

// notas = [0, 0, 0, 0, 0];

// for(i = 0; i < 5; i++){
//   notas[i] = parseInt(prompt("Digite a nota para cada quesito: "));

//   notas.sort(function(a, b){return a - b});
//   notas.pop();
//   notas.shift();

//   for(i = 0; i < notas.length; i++){
//     soma = notas[i] + soma;
//   }

//   console.log(soma)
// }