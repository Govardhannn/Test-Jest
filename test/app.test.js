import { test } from "node:test";
import assert from "node:assert";
import greet from "./app.js";

test("greet return the correct greeting", () => {
    // Arrange
    const expected = "Hello, Govardhan!";

    // Act
    const actual = greet("Govardhan");

    // Assert
    assert.strictEqual(actual, expected);
});