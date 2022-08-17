const Employee = require('../lib/Employee');
const employee = new Employee('Sarah', '123', 'srandall1213@gmail.com');

test("we should get the name/id/email for the employee", () => {
    expect(employee.name).toEqual('Sarah');
    expect(employee.id).toEqual('123');
    expect(employee.email).toEqual('srandall1213@gmail.com');
});
    
test("we should get the name from getName()", () => {
    expect(employee.getName()).toEqual('Sarah');
});

test("we should get the employee ID from getID()", () => {
    expect(employee.getID()).toEqual('123');
});

test("we should get the email from getEmail()", () => {
    expect(employee.getEmail()).toEqual('srandall1213@gmail.com');
});

test("we should get the role from getRole()", () => {
    expect(employee.getRole()).toEqual('Employee');
});
