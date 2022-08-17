const Intern = require('../lib/Intern');
const intern = new Intern('Sarah', '123', 'srandall1213@gmail.com', 'U of U');

test("we should get the name/id/email for the intern", () => {
    expect(intern.name).toBe('Sarah');
    expect(intern.id).toBe('123');
    expect(intern.email).toEqual('srandall1213@gmail.com');
    expect(intern.school).toEqual('U of U');
});
    
test("we should get the name from getName()", () => {
    expect(intern.getName()).toEqual('Sarah');
});

test("we should get the employee ID from getID()", () => {
    expect(intern.getID()).toEqual('123');
});

test("we should get the email from getEmail()", () => {
    expect(intern.getEmail()).toEqual('srandall1213@gmail.com');
});

test("we should get the name of the school from getSchool()", () => {
    expect(intern.getSchool()).toEqual('U of U');
});

test("we should get the role from getRole()", () => {
    expect(intern.getRole()).toEqual('Intern');
});