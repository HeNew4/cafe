const { validateCoins } = require("../validate");

describe("validateCoins", () => {
	test("should return the total value of coins", () => {
		const coins = [1, 2, 5, 2];
		const total = validateCoins(coins);
		expect(total).toBe(10);
	});

	test("should throw an error if input is not an array", () => {
		expect(() => validateCoins("1,2,5")).toThrow(TypeError);
		expect(() => validateCoins(10)).toThrow(TypeError);
	});

	test("should return 0 for an empty array", () => {
		const total = validateCoins([]);
		expect(total).toBe(0);
	});

	test("should handle large values correctly", () => {
		const coins = [10, 20, 30, 40];
		const total = validateCoins(coins);
		expect(total).toBe(100);
	});
});
