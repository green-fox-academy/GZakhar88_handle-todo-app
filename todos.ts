'use strict'

import { todoItem } from './item';

export class Todos {

    private _TodoS: todoItem[] = [];

    constructor(todos: todoItem[] = []){
        this._TodoS = todos;
    };

    public getTodos(){
        return this._TodoS;
    };


    public addTodo(todo: todoItem){
        return this._TodoS.push(todo);
    };

};