"use strict";
//  Interfaces
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetails = void 0;
var detatails = {
    name: "Sivaraman",
    id: 1,
    age: 27,
    email: "Sivarman@gmail.com",
    address: {
        state: "Tamilnadu",
        pincode: 628501,
        city: "kovilpatti"
    },
    getDetails: function () {
        return "".concat(this.name, " lives at ").concat(this.address.city);
    }
};
var employee = {
    name: "Sivaraman",
    id: 1,
    age: 27,
    email: "Sivarman@gmail.com",
    address: {
        state: "Tamilnadu",
        pincode: 628501,
        city: "kovilpatti"
    },
    salary: 25000,
    dob: "16/04/1996",
    getDetails: function () {
        return "".concat(this.name, " Date of Birth is ").concat(this.dob);
    }
};
console.log(detatails.getDetails());
console.log(employee.getDetails());
// Array Destructuring:
var loginDetails = [
    { name: "Siva", id: 1, email: "siva@gmail.com" },
    { name: "Venki", id: 2, email: "venki@gmail.com" },
    { name: "Jothi", id: 3, email: "jothi@gmail.com" }
];
var user1 = loginDetails[0], user2 = loginDetails[1], user3 = loginDetails[2];
console.log(user1);
console.log(user3);
// Object Destructuring:
exports.userDetails = { name: "Siva", id: 1, email: "siva@gmail.com" };
var name = exports.userDetails.name, id = exports.userDetails.id, email = exports.userDetails.email;
console.log(name, id, email);
