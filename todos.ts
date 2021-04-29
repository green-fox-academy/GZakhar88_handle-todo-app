'use strict'

import { todoItem } from './item';

export class Todos {

    private _TodoS: todoItem[] = [];

    constructor(todos: todoItem[] = []){
        this._TodoS = todos;
    };

    public getListLength(): number {
        return this._TodoS.length;
    };

    public getSingleTodo(input: number){
        return this._TodoS[input];
    };

    public getTodos(){
        return this._TodoS;
    };


    public addTodo(todo: todoItem){
        this._TodoS.push(todo);
    };

};