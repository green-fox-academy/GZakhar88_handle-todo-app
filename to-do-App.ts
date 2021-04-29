'use strict';

const cliArguments = process.argv;
const fs = require('fs');
const userManual = fs.readFileSync('userManual.txt', 'utf-8');


if (cliArguments[2] === undefined) {
    console.log(userManual);
  } /* if else() {



  } */
