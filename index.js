const express = require('express');
const app = express();
const shell = require('shelljs');
const mysql = require('mysql');

//const execSync = require("exec-sync");
const port = 3000;
const PATH = process.cwd();

// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'todoapp'
// });

//execSync(PATH + `/database/startdb.sh`);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/resource/cpu', (req, res) => {
	const cpuData = shell.exec(PATH + '/cpuUsage.ps1');
	if (cpuData != null) {
		console.log(cpuData);
		res.send(cpuData);
	} else {
		console.log('error');
	}
});

app.get('/resource/ram', (req, res) => {
	const ramFreeData = shell.exec(PATH + '/ramAvalible.sh');
	console.log(ramFreeData);
	if (cpuData != null) {
		res.send(ramFreeData);
	} else {
		console.log('error');
	}
});

shell.exec(PATH + `/database/startdb.sh`);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
