'use strict';

const fsync = require('fs');
let list: string = '';


export class ReadList {
    public readMyList(){
        try{
            list = fsync.readFileSync('list.txt', 'utf-8');;
        } catch(error){
            console.log('Unable to read list. Check if it is exist!');
        }; 
        console.log(list)
    };
};


let read: ReadList = new ReadList();
read.readMyList();