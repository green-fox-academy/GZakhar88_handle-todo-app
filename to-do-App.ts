'use strict';
import { Read } from './read';
import { Write } from './write';

const cliArguments = process.argv;
const fs = require('fs');
const userManual = fs.readFileSync('userManual.txt', 'utf-8');



if (cliArguments[2] === undefined) {
    console.log(userManual);
  } else if (cliArguments[2] === '-l') {
    let read: Read = new Read();
    read.readMyList();
  } else if (cliArguments[2] === '-a'){
    let myWrite: Write = new Write();
    myWrite.writeMyList(cliArguments[3]);
  };
