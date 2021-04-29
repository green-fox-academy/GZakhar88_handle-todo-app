'use strict';

export class todoItem {
        private _Number: number;
        private _Complete: boolean;
        private _Text: string;

        constructor(number: number, complete: boolean, text: string){
            this._Number = number;
            this._Complete = complete || false;
            this._Text = text || '';
        };

        public getNumber(){
            return this._Number;
        };

        public getComplete(){
            return this._Complete;
        };

        public getText(){
            return this._Text;
        };

        public setNumber(input: number){
            this._Number = input;
        }

        public setComplete(){
            this._Complete = true;
        }

};

/* let mytodo = [{number:1, complete: false, text: 'teszt szoveg'}];
let mytodo2 = [{number:2, complete: false, text: 'teszt szoveg2'}];
let todoArray: todoItem[] = [];
todoArray.push({number:1, complete: false, text: 'teszt szoveg'});
todoArray.push({number:2, complete: false, text: 'teszt szoveg2'});
console.log(todoArray); */