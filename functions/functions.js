"use strict";
// Function Exercise:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOne = exports.sum = exports.divison = exports.multi = exports.sub = exports.add = void 0;
// Named Functions
function add(num1, num2) {
    return num1 + num2;
}
exports.add = add;
function sub(num1, num2) {
    return num1 - num2;
}
exports.sub = sub;
var multi = function (num1, num2) { return num1 * num2; };
exports.multi = multi;
var divison = function (num1, num2) {
    return num1 / num2;
};
exports.divison = divison;
console.log(add(3, 4));
console.log(sub(5, 2));
console.log((0, exports.multi)(5, 2));
console.log((0, exports.divison)(10, 2));
// Optional parameters:
var sum = function (num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
};
exports.sum = sum;
console.log((0, exports.sum)(3, 4));
console.log((0, exports.sum)(3, 4, 3));
// Required parameter
var sumOne = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 7; }
    return num1 + num2 + num3;
};
exports.sumOne = sumOne;
console.log("Sum One --->", (0, exports.sumOne)(3, 4));
console.log("Sum One --->", (0, exports.sumOne)(3, 4, 2));
// Rest parameter:
function restFunction(num1, num2) {
    var num3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        num3[_i - 2] = arguments[_i];
    }
    return num1 + num2 + num3.reduce(function (a, b) { return a + b; });
}
var numbers = [1, 2, 3, 4];
console.log("Rest Function result", restFunction.apply(void 0, __spreadArray([1, 2], numbers, false)));
console.log("Rest Function result", restFunction(1, 2, 3, 4, 5, 6, 7));
// Generic functions:
function additionalValue(arg) {
    return arg;
}
console.log("Generic Function 1", additionalValue("Hello"));
console.log("Generic Function 2", additionalValue(1));
