let A;
let B;
let C;

A = Number(prompt("Digite o primeiro valor: "));
B = Number(prompt("Digite o segundo valor: "));

if (A === B) {
    C = A + B;
}
else {
    C = A * B;
}

alert("O valor de C é: " + C)