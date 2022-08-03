const Intern = require("../lib/Intern");

test("creates an Intern Object", () => {
    const intern = new Intern("Dave", 4, "dave@gmail.com", "The Ohio State University");

    expect(intern.name).toBe("Dave");
    expect(intern.id).toBe(4);
    expect(intern.email).toBe("dave@gmail.com");
    expect(intern.school).toBe("The Ohio State University");


});


test("testing for school property", ()=>{
    var testValue = "The Ohio State University";
    var intern = new Intern("Dave", 4, "dave@gmail.com", testValue);
    expect(intern.school).toBe(testValue);

});

test("testing for getSchool()", ()=>{
    var testValue = "The Ohio State University";
    var intern = new Intern("Dave", 4, "dave@gmail.com", testValue);
    expect(intern.getSchool()).toBe(testValue);

});

test("testing for Role()", ()=>{
    var testValue = "Intern";
    var intern = new Intern("Dave", 4, "dave@gmail.com", "The Ohio State University");
    expect(intern.getRole()).toBe(testValue);

});