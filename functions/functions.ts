// Function Exercise:

// Named Functions
export function add(num1: number, num2: number): number {
    return num1 + num2
}

export function sub(num1: number, num2: number): number {
    return num1 - num2
}

export const multi = (num1: number, num2: number): number => num1 * num2;

export const divison = function (num1: number, num2: number): number {
    return num1 / num2
}

console.log(add(3, 4))
console.log(sub(5, 2))
console.log(multi(5, 2))
console.log(divison(10, 2))

// Optional parameters:
export const sum = function (num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(sum(3, 4))
console.log(sum(3, 4, 3))

// Required parameter
export const sumOne = function (num1: number, num2: number, num3 = 7): number {
    return num1 + num2 + num3;
}

console.log("Sum One --->", sumOne(3, 4))
console.log("Sum One --->", sumOne(3, 4, 2))

// Rest parameter:
function restFunction(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b)
}

let numbers = [1, 2, 3, 4]
console.log("Rest Function result", restFunction(1, 2, ...numbers))
console.log("Rest Function result", restFunction(1, 2, 3, 4, 5, 6, 7))

// Generic functions:
function additionalValue<Type>(arg: Type): Type {
    return arg;
}

console.log("Generic Function 1", additionalValue("Hello"));
console.log("Generic Function 2", additionalValue(1))