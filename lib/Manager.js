const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        // super is the constructor of the parent class Employee
        super(name, id, email);  
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager