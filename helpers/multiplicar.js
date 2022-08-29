const fs = require('fs');
require('colors');

const crearArchivo = async (base = 5, listar, hasta = 10) => {
	try {
		let salida = '';
		let consola = '';

		for (let i = 1; i <= hasta; i++) {
			salida += `${i} * ${base} = ${base * i}\n`;
			consola += `${i} * ${base} = ${base * i}\n`.yellow;
		}

		if (listar) {
			console.log('==============='.bold.red);
			console.log(`  Tabla del ${base}`.bold.red);
			console.log('==============='.bold.red);

			console.log(consola);
		}

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

		return `tabla-${base}.txt`;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	crearArchivo,
};
