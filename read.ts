'use strict';

import { connected } from "node:process";

const fsync = require('fs');
const path: string = 'list.txt';


export class Read {
    public readMyList(): void {
        try {
            let listFromFile: string = fsync.readFileSync(path, 'utf-8');
            
            if(listFromFile.length === 0){
                console.log('No todos for today! :)');
            } else {
                console.log(fsync.readFileSync(path, 'utf-8'));
            }
            
        } catch(error){
            console.log('Unable to read list. Check if it is exist!');
        }; 
    };
};