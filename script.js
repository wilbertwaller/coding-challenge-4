const fs = require('fs');

fs.readFile('./advent_of_code_input.txt', 'utf8', (err, data) => {
	console.time('Challenge Time');

	if (err) {
		return console.log('Error reading file:', err);
	}

	// Part 1 -- Find what floor the instructions take Santa

	var up = 0;
	var down = 0;
	var position = 0;

	for (var i = 0; i < data.length; i++) {
		data[i] === '(' ? up++ : down++;

		// Part 2 -- Find the position in instructions that first takes Santa to floor -1

		if ((up - down === -1) && position === 0) {
			position = i + 1;
		}
	}
	
	console.log(`Santa ends up at floor ${up - down}.`);
	console.log(`Santa first enters the basement at position ${position}.`);

	console.timeEnd('Challenge Time');
});