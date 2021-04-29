'use strict';
import { Read } from './read';
import { Write } from './write';
import { Remove } from './remove'; 
import { Check } from './check'; 

const cliArguments = process.argv;
const fs = require('fs');
const userManual = fs.readFileSync('userManual.txt', 'utf-8');
const path: string = 'list.txt';

//User Manual
if (cliArguments[2] === undefined) {
    console.log(userManual);
  }
// List items      
  else if (cliArguments[2] === '-l') {
    let read: Read = new Read();
    read.printMylist();
// Add item    
  } else if (cliArguments[2] === '-a'){
    if(cliArguments[3] === undefined){
        console.log('Unable to add: no task provided');
    } else {
        let myWrite: Write = new Write();
        myWrite.AddItemToList(cliArguments[3]);
    }
// Remove item    
  } else if (cliArguments[2] === '-r'){
    if(cliArguments[3] === undefined){
      console.log('Unable to remove: no index provided');
    } else {
      let myRemove: Remove = new Remove();
      myRemove.removeAnItem(cliArguments[3]);
    };
  } else if(cliArguments[2] === '-c'){
    if(cliArguments[3] === undefined){
      console.log('Unable to check: no index provided');
    } else {
      let myCheck: Check = new Check();
      myCheck.checkItem(cliArguments[3]);
    };
  } else {
    // Unsupported argument
    console.log('Unsupported argument, you can read the User Manual below');
    console.log('');
    console.log(userManual);
  };
