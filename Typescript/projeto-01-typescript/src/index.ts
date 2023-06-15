let nome: string = "";
let idade: number = 0;
let disciplina: string = "";
let especializacao: string = "";
let empresa: string = "";
let salario: number = 0;

nome = "Arthur Gomes Chagas";
idade = 18;
disciplina = "Desenvolvimento Web";
especializacao = "Engenharia de Software";
empresa = "Google";
salario = 20000.00

console.log(`Me chamo ${nome} e tenho ${idade} anos. Estudo no Colégio Cotemig e faço a disciplina de ${disciplina}. Estou iniciando na carreira de programação e gostaria de me especializar em ${especializacao}. Quando eu formar, pretendo trabalha na empresa ${empresa} e ter um salário de R$${salario}!`);

let numeros: number[] = [1, 2, 3, 4, 5];

for (let chave in numeros) {
    console.log("chave =", chave);
}

for (let valor of numeros) {
    console.log("valor =", valor);
}

let valor = 1000;
while (valor > 0) {
    console.log("Valor =", valor);
    valor -= 100;
}

//npm init -y
//npm install typescript@4.9.5 -D
//npx tsc --init
//criar src e dist
//npx tsc
//node .\dist\<arquivo>.js
//${} ou ,
// break quebra da repetição toda, continue pula um certo momento da repetição, por exemplo, ir de 1 a 5 mas pular o 2