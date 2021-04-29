'use strict';

const fsync = require('fs');
const path: string = 'list.txt';


export class Check {

    public checkOut(input: string) {
        let parsedInput: number = parseInt(input);

        try {
            let listFromFile: string = fsync.readFileSync(path, 'utf-8');
            let listInArray: string[] = listFromFile.split('\n');
            let item = listInArray[parsedInput-1];



        } catch {
            console.log('Itten van az error');
        };


    };

};

let mycheck: Check = new Check();
mycheck.checkOut('1');