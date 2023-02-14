let nomeAluno;
let nota1;
let nota2;
let nota3;
let media;
let situacaoAluno;

nomeAluno = prompt("Digite o nome do aluno: ");
nota1 = Number(prompt("Digite a primeira nota: "));
nota2 = Number(prompt("Digite a segunda nota: "));
nota3 = Number(prompt("Digite a terceira nota: "));

media = (nota1 + nota2 + nota3) / 3;

if(media >= 7){
    situacaoAluno = "Aprovado"
}
else{
    situacaoAluno = "Reprovado"
}

alert("Olá " + nomeAluno + " sua média foi " + Math.round(media) + " e por isso você está " + situacaoAluno)