const somaNumerosPositivos = (a: number, b: number): number => {
    if (a < 0) {
        throw new Error("O valor de A deve ser positivo");
    }

    if (b < 0) {
        throw new Error("O valor de B deve ser positivo");
    }

    return a + b;
}

try {
    console.log(somaNumerosPositivos(-10, -5));
    console.log("Aqui está dentro do try");
} catch (e) {
    console.log((e as Error).message);
    console.log("Aqui está dentro do catch");
}

console.log("Passei aqui");