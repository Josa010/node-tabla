const fs = require('fs');

console.clear();

// const base = 3;
let salida = '';

for (let i = 1; i < 160; i++) {
	if (i < 10) {
		salida += `20213tn00${i}@utez.edu.mx\n`;
	}

	if (i >= 10 && i < 100) {
		salida += `20213tn0${i}@utez.edu.mx\n`;
	}

	if (i >= 100) {
		salida += `20213tn${i}@utez.edu.mx\n`;
	}
}

console.log(salida);

fs.writeFile(`correos-datic.txt`, salida, (err) => {
	if (err) throw err;

	console.log(`correos-datic.txt creado`);
});
