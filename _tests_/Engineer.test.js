const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Sarah', '123', 'srandall1213@gmail.com', 'srandall1213');

test("we should get the name/id/email for the engineer", () => {
    expect(engineer.name).toEqual('Sarah');
    expect(engineer.id).toEqual('123');
    expect(engineer.email).toEqual('srandall1213@gmail.com');
    expect(engineer.userName).toEqual('srandall1213');
});
    
test("we should get the name from getName()", () => {
    expect(engineer.getName()).toEqual('Sarah');
});

test("we should get the employee ID from getID()", () => {
    expect(engineer.getID()).toEqual('123');
});

test("we should get the email from getEmail()", () => {
    expect(engineer.getEmail()).toEqual('srandall1213@gmail.com');
});

test("we should get the GitHub username from getUserName()", () => {
    expect(engineer.getUserName()).toEqual('srandall1213');
});

test("we should get the role from getRole()", () => {
    expect(engineer.getRole()).toEqual('Engineer');
});