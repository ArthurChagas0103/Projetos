let nome;
let salario;
let aumento;

nome = prompt("Digite o seu nome: ");
salario = Number(prompt("Digite o seu salário (R$): "));

aumento = ((salario * 10) / 100) + salario;

alert("Olá " + nome + " seu novo salário é: " + aumento)