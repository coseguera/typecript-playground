import { expect } from "chai";
import { sayHello } from "../src/sayhello";

describe("sayHello", () => {
    it("says hello", () => {
        const message = sayHello();

        expect(message).to.be.equal("hello!");
    });
});