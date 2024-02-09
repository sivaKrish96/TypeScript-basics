//  Interfaces

interface Details {
    name: string;
    id: number;
    age: number;
    email: string;
    getDetails(): string;
    address: {
        state: string;
        pincode: number;
        city: string
    }
}

interface EmployeeDetails extends Details {
    salary: number;
    dob: string;
}

interface User {
    name: string;
    email: string;
    id: number
}

let detatails: Details = {
    name: "Sivaraman",
    id: 1,
    age: 27,
    email: "Sivarman@gmail.com",
    address: {
        state: "Tamilnadu",
        pincode: 628501,
        city: "kovilpatti"
    },

    getDetails() {
        return `${this.name} lives at ${this.address.city}`
    }
}

let employee: EmployeeDetails = {
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

    getDetails() {
        return `${this.name} Date of Birth is ${this.dob}`
    }
}

console.log(detatails.getDetails())
console.log(employee.getDetails())

// Array Destructuring:
let loginDetails: User[] = [
    { name: "Siva", id: 1, email: "siva@gmail.com" },
    { name: "Venki", id: 2, email: "venki@gmail.com" },
    { name: "Jothi", id: 3, email: "jothi@gmail.com" }
]

let [user1, user2, user3] = loginDetails
console.log(user1)
console.log(user3)

// Object Destructuring:
export let userDetails: User = { name: "Siva", id: 1, email: "siva@gmail.com" }
let { name, id, email } = userDetails
console.log(name, id, email)