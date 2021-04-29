'use strict';

const fsync = require('fs');
const path: string = 'list.txt';


export class Read {
    public readMyList(){
        try{
            console.log(fsync.readFileSync(path, 'utf-8'));
        } catch(error){
            console.log('Unable to read list. Check if it is exist!');
        }; 
    };
};