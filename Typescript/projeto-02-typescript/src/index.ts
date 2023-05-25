let valores: number[] = [2.99, 10.50, 1.25, 4.80, 3.60];

for (let i : number = 0; i < valores.length - 1; i++){
    for (let j : number = 0; j < valores.length - 1 - i; j++){
        if (valores[j] > valores[j + 1]){
            let auxiliar : number = valores[j];
            valores[j] = valores[j + 1];
            valores[j + 1] = auxiliar;
        }
    }
}

console.log(valores)

function soma(a: number, b: number): number {
	return a + b;
}

let total = soma(5, 6);

console.log(total);