const Manager = require('../lib/Manager');
const manager = new Manager('Sarah', '123', 'srandall1213@gmail.com', '456');

test("we should get the name/id/email for the manager", () => {
    expect(manager.name).toBe('Sarah');
    expect(manager.id).toBe('123');
    expect(manager.email).toEqual('srandall1213@gmail.com');
    expect(manager.officeNumber).toEqual('456');
});
    
test("we should get the name from getName()", () => {
    expect(manager.getName()).toEqual('Sarah');
});

test("we should get the employee ID from getID()", () => {
    expect(manager.getID()).toEqual('123');
});

test("we should get the email from getEmail()", () => {
    expect(manager.getEmail()).toEqual('srandall1213@gmail.com');
});

test("we should get the office number from getOfficeNumber()", () => {
    expect(manager.getOfficeNumber()).toEqual('456');
});

test("we should get the role from getRole()", () => {
    expect(manager.getRole()).toEqual('Manager');
});