const fs = require('fs');

fs.readFile('./advent_of_code_input.txt', 'utf8', (err, data) => {
	console.time('Challenge Time');

	if (err) {
		return console.log('Error reading file:', err);
	}

	// Part 1 -- Find what floor the instructions take Santa

	let floor = 0;
	let position = 0;

	for (let i = 0; i < data.length; i++) {
		data[i] === '(' ? floor++ : floor--;

		// Part 2 -- Find the position in instructions that first takes Santa to floor -1

		if (floor === -1 && position === 0) {
			position = i + 1;
		}
	}
	
	console.log(`Santa ends up at floor ${floor}.`);
	console.log(`Santa first enters the basement at position ${position}.`);

	console.timeEnd('Challenge Time');
});