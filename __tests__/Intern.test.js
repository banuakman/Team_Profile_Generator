const Intern = require('../lib/Intern.js');

describe("Intern", () => {
    describe("Initialize", () => {

        it("should have a name, id, email and school property", () => {
            const intern = new Intern("Banu", 35, "banu@breative.net", "SUNY New Paltz");
            expect("name" in intern).toEqual(true);
            expect("id" in intern).toEqual(true);
            expect("email" in intern).toEqual(true);
            expect("school" in intern).toEqual(true);
        });
    });
});