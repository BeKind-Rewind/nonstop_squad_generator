const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        // super is the constructor of the parent class Employee
        super(name, id, email);  
        this.gitHub = gitHub;
    }

    getGitHub(){
        return this.gitHub;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer