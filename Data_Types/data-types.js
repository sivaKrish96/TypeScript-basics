"use strict";
// Data Types Exercise:
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeDetailsSwap = exports.swapNumbers = exports.employees = exports.strinArray = exports.numbersarray = void 0;
// Numbers of Array:
exports.numbersarray = [];
exports.numbersarray.push(1);
exports.numbersarray.push(2);
exports.numbersarray.push(3);
exports.numbersarray.push(4);
console.log(exports.numbersarray);
var result_one = exports.numbersarray.filter(function (num) { return num > 2; });
console.log(result_one);
// string of Array:
exports.strinArray = []; // array<numbers>
exports.strinArray.push("Hello TypeScript");
exports.strinArray.push("Angular");
exports.strinArray.push("251600");
console.log(exports.strinArray);
var myDirection = 1 /* Direction.North */;
console.log(myDirection);
// Tuples:
exports.employees = [];
exports.employees.push([1, 'Siva']);
exports.employees.push([2, 'venkatesh']);
exports.employees.push([3, 'jothiram']);
console.log(exports.employees);
function swap(num1, num2) {
    return [num2, num1];
}
exports.swapNumbers = swap(2, 3);
function swapEmployee(name, age) {
    return [age, name];
}
exports.employeeDetailsSwap = swapEmployee('Sivaraman', 27);
console.log(exports.employeeDetailsSwap);
