"use strict";
const funcaoAnonima = (functions) => {
    const numbersArray = [5, 8, 10, 1, 6, 7];
    functions.forEach((func, index) => {
        const result = func(numbersArray);
        console.log(`Função ${index}: ${result}`);
    });
};
const findMaxNumber = (numbers) => {
    return Math.max(...numbers);
};
const findMinNumber = (numbers) => {
    return Math.min(...numbers);
};
const functionArray = [
    (numbers) => findMaxNumber(numbers),
    (numbers) => findMinNumber(numbers)
];
funcaoAnonima(functionArray);
