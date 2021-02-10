const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {
    describe("Initialize", () => {

        it("should have a name, id, email and gitHub property", () => {
            const engineer = new Engineer("Banu", 35, "banu@breative.net", "banuakman");
            expect("name" in engineer).toEqual(true);
            expect("id" in engineer).toEqual(true);
            expect("email" in engineer).toEqual(true);
            expect("gitHub" in engineer).toEqual(true);
        });
    });
});