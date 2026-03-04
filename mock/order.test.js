import { describe, mock, test } from "node:test";
import { processOrder } from "./app.js";
import assert from "node:assert";

describe("Order feature", () => {
    test("this it process the order correctly", () => {

        // Arrange
        const mockedProcessPayment = mock.fn((amount) => {
            console.log("I am mocked .....");
            return { id: "123", amount: amount };
        });

        const expected = { id: "123", amount: 100 };

        assert.strictEqual(mockedProcessPayment.mock.callCount(), 0);

        // Act
        const result = processOrder(
            { amount: 100 },
            { processPayment: mockedProcessPayment }
        );

        // Assert
        assert.deepStrictEqual(result, expected);
        assert.strictEqual(mockedProcessPayment.mock.callCount(), 1);

        const call = mockedProcessPayment.mock.calls[0];
        assert.deepStrictEqual(call.arguments, [100]);
    });
});