// Data Types Exercise:

// Numbers of Array:
export const numbersarray: number[] = [];
numbersarray.push(1);
numbersarray.push(2);
numbersarray.push(3);
numbersarray.push(4);

console.log(numbersarray)

let result_one = numbersarray.filter((num) => num > 2);
console.log(result_one)

// string of Array:
export const strinArray: string[] = [];  // array<numbers>
strinArray.push("Hello TypeScript");
strinArray.push("Angular");
strinArray.push("251600");
console.log(strinArray)

// Enum:

const enum Direction {
    North = 1,
    South = 2,
    East = 3,
    West = 4
}

let myDirection: Direction = Direction.North;
console.log(myDirection)

