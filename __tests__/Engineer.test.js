const Engineer = require("../lib/Engineer");

test("creates an Engineer Object", () => {
    const engineer = new Engineer("Dave", 4, "dave@gmail.com", "BeKind-Rewind");
    expect(engineer.name).toBe("Dave");
    expect(engineer.id).toBe(4);
    expect(engineer.email).toBe("dave@gmail.com");
    expect(engineer.gitHub).toBe("BeKind-Rewind");
})

test("testing for gitHub property", ()=>{
    var testValue = "BeKind-Rewind";
    var engineer = new Engineer("Dave", 4, "dave@gmail.com", testValue);
    expect(engineer.gitHub).toBe(testValue);
})

test("testing for getGitHub()", ()=>{
    var testValue = "BeKind-Rewind";
    var engineer = new Engineer("Dave", 4, "dave@gmail.com", testValue);
    expect(engineer.getGitHub()).toBe(testValue);
})

test("testing for Role()", ()=>{
    var testValue = "Engineer";
    var engineer = new Engineer("Dave", 4, "dave@gmail.com", "BeKind-Rewind");
    expect(engineer.getRole()).toBe(testValue);
})