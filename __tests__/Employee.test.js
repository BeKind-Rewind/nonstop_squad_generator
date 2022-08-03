const Employee = require("../lib/Employee");

test("testing for name property", ()=>{
    var testValue = "Dave";
    var newEmployee = new Employee(testValue, 4, "dave@gmail.com");
    expect(newEmployee.name).toBe(testValue);

})

test("testing for id property", ()=>{
    var testValue = 4;
    var newEmployee = new Employee("Dave", testValue, "dave@gmail.com");
    expect(newEmployee.id).toBe(testValue);
    
})

test("testing for email property", ()=>{
    var testValue = "dave@gmail.com";
    var newEmployee = new Employee("Dave", 4, testValue);
    expect(newEmployee.email).toBe(testValue);
    
})

test("testing for getName()", ()=>{
    var testValue = "Dave";
    var newEmployee = new Employee(testValue, 4, "dave@gmail.com");
    expect(newEmployee.getName()).toBe(testValue);

})

test("testing for getId()", ()=>{
    var testValue = 4;
    var newEmployee = new Employee("Dave", testValue, "dave@gmail.com");
    expect(newEmployee.getId()).toBe(testValue);
    
})

test("testing for getEmail()", ()=>{
    var testValue = "dave@gmail.com";
    var newEmployee = new Employee("Dave", 4, testValue);
    expect(newEmployee.getEmail()).toBe(testValue);
    
})

test("testing for getRole()", ()=>{
    var testValue = "Employee";
    var newEmployee = new Employee("Dave", 4, "dave@gmail.com");
    expect(newEmployee.getRole()).toBe(testValue);
    
})
