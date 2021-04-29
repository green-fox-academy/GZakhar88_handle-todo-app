'use strict';
import { Read } from './read';
import { Write } from './write';
import { Remove } from './remove'; 
import { todoItem } from './item';
import { Todos } from './todos';

const cliArguments = process.argv;
const fs = require('fs');
const userManual = fs.readFileSync('userManual.txt', 'utf-8');
const path: string = 'list.txt';



//Read from file every item
let myTodos: Todos = new Todos();

let listFromFile: string = fs.readFileSync(path, 'utf-8');
let listInArray: string[] = listFromFile.split('\n');

for(let i = 0; i < listInArray.length; i++){
  let number: number = parseInt(listInArray[i].charAt(0));
  let sign: string = listInArray[i].charAt(5);
  let text: string = listInArray[i].slice(8);
  let myTodoItem: todoItem = new todoItem(number,sign,text);
  myTodos.addTodo(myTodoItem);
};

console.log(myTodos);





//User Manual
if (cliArguments[2] === undefined) {
    console.log(userManual);
  }
// List items      
  else if (cliArguments[2] === '-l') {
    let read: Read = new Read();
    read.readMyList();
// Add item    
  } else if (cliArguments[2] === '-a'){
    if(cliArguments[3] === undefined){
        console.log('Unable to add: no task provided');
    } else {
        let myWrite: Write = new Write();
        myWrite.writeMyList(cliArguments[3]);
    }
// Remove item    
  } else if (cliArguments[2] === '-r'){
    if(cliArguments[3] === undefined){
      console.log('Unable to remove: no index provided');
    } else {
      let myRemove: Remove = new Remove();
      myRemove.removeAnItem(cliArguments[3]);
    };
  } else {
    // Unsupported argument
    console.log('Unsupported argument, you can read the User Manual below');
    console.log('');
    console.log(userManual);
  };
