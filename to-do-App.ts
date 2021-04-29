'use strict';

const cliArgument = process.argv;
const fs = require('fs');
const userManual = fs.readFileSync('userManual.txt', 'utf-8');
console.log(userManual);