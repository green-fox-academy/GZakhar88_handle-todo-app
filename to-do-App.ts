'use strict';
import { ReadList } from './write-read-list';

const cliArguments = process.argv;
const fs = require('fs');
const userManual = fs.readFileSync('userManual.txt', 'utf-8');



if (cliArguments[2] === undefined) {
    console.log(userManual);
  } else if (cliArguments[2] === '-l') {
    let read: ReadList = new ReadList();
    read.readMyList();
  };
