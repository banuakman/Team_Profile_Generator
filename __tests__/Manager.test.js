const Manager = require('../lib/Manager.js');

describe("Manager", () => {
    describe("Initialize", () => {

        it("should have a name, id, email and officeNumber property", () => {
            const manager = new Manager("Banu", 35, "banu@breative.net", "(212) 266-6666");
            expect("name" in manager).toEqual(true);
            expect("id" in manager).toEqual(true);
            expect("email" in manager).toEqual(true);
            expect("officeNumbe" in manager).toEqual(true);
        });
    });
});