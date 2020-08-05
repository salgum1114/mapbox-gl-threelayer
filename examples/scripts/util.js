const fs = require('fs');

/**
 * @description Convert date
 * @returns String of HH:MM:SS
 */
const getDate = () => {
	const date = new Date();
	return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

/**
 * @description Copy file
 * @param {string} src
 * @param {string} dest
 */
const copyFile = (src, dest) => {
	const filePath = `${dest}/${src}`;
	const file = fs.readFileSync(src, { encoding: 'UTF-8' });
	fs.writeFileSync(filePath, file, { encoding: 'UTF-8' });
	console.log(`[${getDate()}]`, `Copied ${filePath}`);
};

module.exports = {
	getDate,
	copyFile,
};
