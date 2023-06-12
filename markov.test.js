const { MarkovMachine } = require("./markov");

describe("MarkovMachine", function () {
    let mm;
    
    beforeEach(function () {
        mm = new MarkovMachine("the cat in the hat");
    });
    
    test("makeChains", function () {
        expect(mm.chains).toEqual({
        the: ["cat", "hat"],
        cat: ["in"],
        in: ["the"],
        hat: [null],
        });
    });
    
    test("makeText", function () {
        let text = mm.makeText();
        expect(text.split(" ").length).toEqual(100);
        expect(text.split(" ")[0]).toEqual("the");
        expect(text.split(" ")[99]).toEqual("hat");
    });
    
    test("makeText with numWords", function () {
        let text = mm.makeText(5);
        expect(text.split(" ").length).toEqual(5);
        expect(text.split(" ")[0]).toEqual("the");
        expect(text.split(" ")[4]).toEqual("in");
    });
});
