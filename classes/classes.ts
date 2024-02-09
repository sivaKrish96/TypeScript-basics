//  Class Exercise:
class Employee {
    id!: number;
    name!: string;
    age!: number;
}

let siva = new Employee()
siva.age = 27;
siva.id = 1;
siva.name = "Sivaraman K"

console.log(siva) // It will return the employee object in this format: Employee { age: 27, id: 1, name: 'Sivaraman K' }

// constructor:
class EmployeeConstructor {
    private id: number; // private variable
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id; // way of accessing the private variable
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name
    }
}

const john = new EmployeeConstructor(2, 'Venkatesh', 25);
console.log(john)
console.log(john.getName())

// protected, private:

class Manager {
    private id: number;
    name: string;
    protected dept: string;

    constructor(id: number, name: string, dept: string) {
        this.id = id
        this.name = name;
        this.dept = dept;
    }

    static add(num1: number, num2: number): number {
        return num1 + num2
    }
}

class Staff extends Manager {
    constructor(id: number, name: string, dept: string) {
        super(id, name, dept);
    }

    get details(): string {
        return `${this.name} is working on ${this.dept}`
    }

    set empName(value: string) {
        this.name = value;
    }

    getName(): string {
        return this.name
    }

    getDept(): string {
        return this.dept
    }
}

let staff = new Staff(1, 'Vinodha', 'BMW');
console.log(staff.getName())
console.log(staff.getDept())
console.log(staff.details)
staff.empName = "Sivaraman";
console.log(staff.details)

console.log(Manager.add(10, 20))