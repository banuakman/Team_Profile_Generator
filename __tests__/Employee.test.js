const Employee = require('../lib/Employee.js');

describe("Employee", () => {
    describe("Initialize", () => {

        it("should have a name, id and email property", () => {
            const employee = new Employee("Banu", 35, "banu@breative.net");
            expect("name" in employee).toEqual(true);
            expect("id" in employee).toEqual(true);
            expect("email" in employee).toEqual(true);
        });
    });
});