import { describe, suite, test } from "node:test";
import assert from "node:assert";
import { greet, Olla } from "./app.js";

describe("Greeting function", () => {

    test("greet return the correct greeting", () => {
        const expected = "Hello, Govardhan!";
        const actual = greet("Govardhan");

        assert.strictEqual(actual, expected);
    });

    test("greet return the correct greeting in French", () => {
        const expected = "Olla, Govardhan!";
        const actual = Olla("Govardhan");

        assert.strictEqual(actual, expected);
    });

});