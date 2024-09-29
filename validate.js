const validateCoins = (coins) => {
	// Asegúrate de que 'coins' es un array
	if (!Array.isArray(coins)) {
		throw new TypeError("Expected an array of coins.");
	}
	const total = coins.reduce((acc, coin) => acc + coin, 0);
	return total;
};

module.exports = { validateCoins };
