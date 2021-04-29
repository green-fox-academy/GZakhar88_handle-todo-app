'use strict';
import { todoItem } from './item';
import { Read } from './read';
import { Todos } from './todos';

let read: Read = new Read();
let todoS: Todos = read.readMyList();
//console.log(todoS);

const fs = require('fs');
const path: string = 'list.txt';


export class Write {


    public AddItemToList(inputText:string): void {

        let length = todoS.getListLength();
        
        //Add To-Do item at the and of the list
        try{
            todoS.addTodo(new todoItem(length+1,' ',inputText));
        } catch{
            console.log(`OOps something went wrong! Unable to write Todo Object`);
         };   


         try{
            for (let i = 0; i < todoS.getListLength(); i++) {
                if(i === 0){
                   fs.writeFileSync(path, `${todoS.getSingleTodo(i).getNumber()} - [${todoS.getSingleTodo(i).getComplete()}] ${todoS.getSingleTodo(i).getText()}`);
                } else {
                   fs.writeFileSync(path, `\n${todoS.getSingleTodo(i).getNumber()} - [${todoS.getSingleTodo(i).getComplete()}] ${todoS.getSingleTodo(i).getText()}`, {flag: 'a'});
                };
            };
         } catch {
            console.log(`OOps something went wrong! Unable to write file: list.txt! Check if it is exist!`);
         };   
    };
};