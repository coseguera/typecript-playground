import { expect } from "chai";
import { Ballot, getResults, sayHello } from "../src/sayhello";

describe("sayHello", () => {
    it("says hello", () => {
        const message = sayHello();

        expect(message).to.be.equal("hello!");
    });
});

describe("getResults", () => {
    it("returns results", () => {
        const x: Ballot = {
            votes: ['a', 'b', 'c']
        }

        const result = getResults([x]);

        expect(result.length).to.be.equal(3);
        expect(result[0]).to.be.equal('a');
        expect(result[1]).to.be.equal('b');
        expect(result[2]).to.be.equal('c');
    });

    it("returns results", () => {
        const x: Ballot = {
            votes: ['a', 'b', 'c']
        }
        const y: Ballot = {
            votes: ['a', 'b', 'c']
        }
        const z: Ballot = {
            votes: ['a', 'b', 'c']
        }


        const result = getResults([x, y, z]);

        expect(result.length).to.be.equal(3);
        expect(result[0]).to.be.equal('a');
        expect(result[1]).to.be.equal('b');
        expect(result[2]).to.be.equal('c');
    });

    it("returns results", () => {
        const x: Ballot = {
            votes: ['a', 'b', 'c']
        }
        const y: Ballot = {
            votes: ['b']
        }
        const z: Ballot = {
            votes: ['b']
        }

        const result = getResults([x, y, z]);

        expect(result.length).to.be.equal(3);
        expect(result[0]).to.be.equal('b');
        expect(result[1]).to.be.equal('a');
        expect(result[2]).to.be.equal('c');
    });
});
