'use strict';

export class todoItem {
    private _Number: number;
    private _Complete: string;
    private _Text: string;
    
    constructor(number: number, complete: string, text: string){
        this._Number = number;
        this._Complete = complete || ' ';
        this._Text = text || '';
    };
    
    public getNumber():number {
        return this._Number;
    };

    public getComplete():string {
        return this._Complete;
    };
    
    public getText():string {
        return this._Text;
    };
    
    public setNumber(input: number):number {
        return this._Number = input;
    };
    
    public setComplete():void {
        this._Complete = 'x';
    };
    
    public setText(input: string):void {
        this._Text = input;
    };
};