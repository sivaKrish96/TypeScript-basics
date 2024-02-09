"use strict";
// Data Types Exercise:
Object.defineProperty(exports, "__esModule", { value: true });
exports.strinArray = exports.numbersarray = void 0;
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
