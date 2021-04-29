'use strict';

import { todoItem } from './item';
import { Todos } from './todos';

const fs = require('fs');
const path: string = 'list.txt';


export class Read {

    public readMyList(){
        try{
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
        } catch {
            console.log('Unable to read list. Check if it is exist!');
        };
    };

    public printMylist(): void {
        try {
            let listFromFile: string = fs.readFileSync(path, 'utf-8');
            
            if(listFromFile.length === 0){
                console.log('No todos for today! :)');
            } else {
                console.log(fs.readFileSync(path, 'utf-8'));
            }
            
        } catch(error){
            console.log('Unable to read list. Check if it is exist!');
        }; 
    };
};