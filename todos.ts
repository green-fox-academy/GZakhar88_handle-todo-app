'use strict'

import { todoItem } from './item';

export class Todos {
    private _TodoS: todoItem[] = [];
    
    constructor(todos: todoItem[] = []) {
        this._TodoS = todos;
    };
    
    public getListLength():number {
        return this._TodoS.length;
    };

    public getSingleTodo(input: number):todoItem {
        return this._TodoS[input];
    };

    public getTodos():todoItem[] {
        return this._TodoS;
    };

    public addTodo(todo: todoItem):void {
        this._TodoS.push(todo);
    };
    
    public removeTodo(input: number):todoItem[] {
        return this._TodoS.splice(input,1);
    };
};