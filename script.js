const fs = require('fs');

fs.readFile('./advent_of_code_input.txt', 'utf8', (err, data) => {
	if (err) {
		return console.log('Error reading file');
	}

	console.time('Part 1 Time');
	doPartOne(data);
	console.timeEnd('Part 1 Time');

	console.time('Part 2 Time');
	doPartTwo(data);
	console.timeEnd('Part 2 Time');
});

// Part 1 -- Find what floor the instructions take Santa
const doPartOne = (data) => {
	let up = data.match(/\(/g).length;
	
	console.log(`Santa ends up at floor ${up - (data.length - up)}.`);
};

// Part 2 -- Find the position in instructions that first takes Santa to floor -1
const doPartTwo = (data) => {
	let floor = 0;

	for (let i = 0; i < data.length; i++) {
		data[i] === '(' ? floor++ : floor--;

		if (floor === -1) {
			return console.log(`Santa first enters the basement at position ${i + 1}.`);		
		}
	}
};
