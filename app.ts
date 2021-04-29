'use strict';
import { Read } from './read';
import { Write } from './write';
import { Remove } from './remove'; 

const cliArguments = process.argv;
const fs = require('fs');
const userManual = fs.readFileSync('userManual.txt', 'utf-8');

if (cliArguments[2] === undefined) {
    console.log(userManual);
  } else if (cliArguments[2] === '-l') {
    let read: Read = new Read();
    read.readMyList();
  } else if (cliArguments[2] === '-a'){
    if(cliArguments[3] === undefined){
        console.log('Oops Something went wrong, maybe you forgot write the next todo');
    } else {
        let myWrite: Write = new Write();
        myWrite.writeMyList(cliArguments[3]);
    }
  } else if (cliArguments[2] === '-r'){
    if(cliArguments[3] === undefined){
      console.log('Please select a valid item from the list and try again!');
    } else {
      let myRemove: Remove = new Remove();
      myRemove.removeAnItem(cliArguments[3]);
    };
  };
