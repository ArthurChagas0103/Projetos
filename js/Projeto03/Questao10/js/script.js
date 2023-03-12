const numeros = [];
let continuar = true;

while (continuar) {
  const numero = Number(prompt('Insira um número (positivo ou negativo):'));
  if (isNaN(numero)) {
    alert('Valor inválido. Por favor, insira um número.');
  } else {
    numeros.push(numero);
    continuar = confirm('Deseja inserir mais um número?');
  }
}

const negativos = numeros.filter((numero) => numero < 0);

console.log(`Elementos negativos: ${negativos}`);
console.log(`Quantidade: ${negativos.length} itens.`);