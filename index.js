const express = require('express');
const app = express();
const shell = require('shelljs');
const mysql = require('mysql');
const fs = require('fs');

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
	shell.exec(PATH + '/cpuUsage.sh');
	const cpuUsage = fs.readFileSync(PATH + '/dataLogs/logLastStatusCPU.log', 'utf8');
	console.log(cpuUsage);
	res.send({cpuUsage});
});

app.get('/resource/ram', (req, res) => {
	shell.exec(PATH + '/ramAvalible.sh');
	const data = fs.readFileSync(PATH + '/dataLogs/logLastStatusRAM.log', 'utf8');
	let ramAvalible = data.split(' ')[10];
	console.log(ramAvalible)
	res.send({ramAvalible})
});

shell.exec(PATH + `/database/startdb.sh`);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
