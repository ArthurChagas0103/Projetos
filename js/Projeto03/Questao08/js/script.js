const funcionarios = [
  {
    Nome: 'Han Solo',
    Departamento: 'Financeiro',
    Salario: 5000
  },
  {
    Nome: 'Luke',
    Departamento: 'Financeiro',
    Salario: 15000
  },
  {
    Nome: 'Ben',
    Departamento: 'Marketing',
    Salario: 2000
  },
  {
    Nome: 'Leia',
    Departamento: 'Marketing',
    Salario: 10000
  },
  {
    Nome: 'Rey',
    Departamento: 'Financeiro',
    Salario: 2500
  }
];

const totalSalariosFinanceiro = funcionarios
  .filter((funcionario) => funcionario.Departamento === 'Financeiro')
  .map((funcionario) => funcionario.Salario * 1.5)
  .reduce((total, salario) => total + salario, 0);

console.log(`O Departamento Financeiro irá receber ${totalSalariosFinanceiro} ao todo com o aumento de 50% nos salários.`);