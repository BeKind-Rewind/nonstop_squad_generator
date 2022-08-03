const Manager = require("../lib/Manager");

test("creates an Manager Object", () => {
    const manager = new Manager("Dave", 4, "dave@gmail.com", "614-352-3789");

    expect(manager.name).toBe("Dave");
    expect(manager.id).toBe(4);
    expect(manager.email).toBe("dave@gmail.com");
    expect(manager.officeNumber).toBe("614-352-3789");


});


test("testing for Role()", ()=>{
    var testValue = "Manager";
    var manager = new Manager("Dave", 4, "dave@gmail.com", "614-352-3789");
    expect(manager.getRole()).toBe(testValue);

})

