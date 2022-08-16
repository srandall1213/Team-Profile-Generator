const Employee = require('../lib/Employee');
const employee = new Employee('Sarah', '0670780', 'srandall1213@gmail.com');

describe("Employee Tests", () => {
    describe("name/id/email", () => {
        it("we should get the name/id/email for the employee", () => {
            expect(employee.name).toBe('Sarah');
            expect(employee.id).toBe('0670780');
            expect(employee.email).toBe('srandall1213@gmail.com');
        });
    });
    
    describe("we should get the name from getName()", () => {
        expect(employee.getName().toBe('Sarah'));
    });

    describe("we should get the employee ID from getID()", () => {
        expect(employee.getID().toBe('0670780'));
    });

    describe("we should get the email from getEmail()", () => {
        expect(employee.getEmail().toBe('srandall1213@gmail.com'));
    });

    describe("we should get the role from getRole()", () => {
        expect(employee.getRole().toBe('Employee'));
    })

});
