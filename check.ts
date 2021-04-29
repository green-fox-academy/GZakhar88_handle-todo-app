'use strict';
import { todoItem } from './item';
import { Read } from './read';
import { Todos } from './todos';

let read: Read = new Read();
let todoS: Todos = read.readMyList();

const fs = require('fs');
const path: string = 'list.txt';


export class Check {

    public checkItem(stringInput: string) {
        let selectedItemIndex: number = (parseInt(stringInput)-1);
        let selectedItem: todoItem = todoS.getSingleTodo(selectedItemIndex);
        let length = todoS.getListLength();

        try {    
            if(isNaN(selectedItemIndex)){
                console.log('\x1b[31m','\x1b[43m','Unable to check: index is not a number');
            }else if (length < selectedItemIndex) {
                console.log('\x1b[31m','\x1b[43m','Unable to check: index is out of bound');
            } else {
                // check the item
                selectedItem.setComplete();

                //write the new list into the file
                try{
                    for (let i = 0; i < todoS.getListLength(); i++) {
                        if(i === 0){
                           fs.writeFileSync(path, `${todoS.getSingleTodo(i).setNumber(i+1)} - [${todoS.getSingleTodo(i).getComplete()}] ${todoS.getSingleTodo(i).getText()}`);
                        } else {
                           fs.writeFileSync(path, `\n${todoS.getSingleTodo(i).setNumber(i+1)} - [${todoS.getSingleTodo(i).getComplete()}] ${todoS.getSingleTodo(i).getText()}`, {flag: 'a'});
                        };
                    };
                 } catch {
                    console.log(`OOps something went wrong! Unable to write file: list.txt! Check if it is exist!`);
                 }; 
            };
        } catch(error) {
            console.log('Something is wrong, cannot check the selected item!!!');
        };




    };
};