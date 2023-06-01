type NumberArrayFunction = (numbers: number[]) => number;

const funcaoAnonima = (functions: NumberArrayFunction[]) => {
    const numbersArray: number[] = [5, 8, 10, 1, 6, 7];

    functions.forEach((func, index) => {
        const result = func(numbersArray);
        console.log(`Função ${index}: ${result}`);
    });
};

const findMaxNumber: NumberArrayFunction = (numbers: number[]) => {
    return Math.max(...numbers);
};

const findMinNumber: NumberArrayFunction = (numbers: number[]) => {
    return Math.min(...numbers);
};

const functionArray: NumberArrayFunction[] = [
    (numbers: number[]) => findMaxNumber(numbers),
    (numbers: number[]) => findMinNumber(numbers)
];

funcaoAnonima(functionArray);