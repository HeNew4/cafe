const { validateCoins } = require("./validate");

const inquirer = require("inquirer").default;

const prices = {
	expresso: 10,
	capuchino: 10,
	"café con leche": 10,
};

const main = async () => {
	const { coffeeType } = await inquirer.prompt([
		{
			type: "list",
			name: "coffeeType",
			message: "¿Qué tipo de café deseas?",
			choices: Object.keys(prices),
		},
	]);

	const { coins } = await inquirer.prompt([
		{
			type: "input",
			name: "coins",
			message: "Ingresa las monedas (separadas por comas):",
		},
	]);

	// Convierte la entrada de monedas en un array de números
	const coinsArray = coins
		.split(",")
		.map((coin) => Number.parseInt(coin.trim(), 10));

	try {
		const total = validateCoins(coinsArray);
		const price = prices[coffeeType];

		if (total >= price) {
			const change = total - price; // Calcula el cambio
			console.log(
				`Total pagado: ${total} pesos. Preparando tu ${coffeeType}... ¡Disfrútalo!`,
			);
			if (change > 0) {
				console.log(`Cambio devuelto: ${change} pesos.`);
			} else {
				console.log("No hay cambio que devolver.");
			}
		} else {
			console.log(
				`Fondos insuficientes. Has ingresado ${total} pesos. Necesitas ${price - total} pesos más.`,
			);
		}
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
};

main();
