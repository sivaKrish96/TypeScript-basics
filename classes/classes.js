var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//  Class Exercise:
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var siva = new Employee();
siva.age = 27;
siva.id = 1;
siva.name = "Sivaraman K";
console.log(siva); // It will return the employee object in this format: Employee { age: 27, id: 1, name: 'Sivaraman K' }
// constructor:
var EmployeeConstructor = /** @class */ (function () {
    function EmployeeConstructor(id, name, age) {
        this.id = id; // way of accessing the private variable
        this.name = name;
        this.age = age;
    }
    EmployeeConstructor.prototype.getName = function () {
        return this.name;
    };
    return EmployeeConstructor;
}());
var john = new EmployeeConstructor(2, 'Venkatesh', 25);
console.log(john);
console.log(john.getName());
// protected, private:
var Manager = /** @class */ (function () {
    function Manager(id, name, dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
    }
    Manager.add = function (num1, num2) {
        return num1 + num2;
    };
    return Manager;
}());
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(id, name, dept) {
        return _super.call(this, id, name, dept) || this;
    }
    Object.defineProperty(Staff.prototype, "details", {
        get: function () {
            return "".concat(this.name, " is working on ").concat(this.dept);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "empName", {
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getDept = function () {
        return this.dept;
    };
    return Staff;
}(Manager));
var staff = new Staff(1, 'Vinodha', 'BMW');
console.log(staff.getName());
console.log(staff.getDept());
console.log(staff.details);
staff.empName = "Sivaraman";
console.log(staff.details);
console.log(Manager.add(10, 20));
