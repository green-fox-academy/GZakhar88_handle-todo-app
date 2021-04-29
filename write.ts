'use strict';


const fsync = require('fs');
const path: string = 'list.txt';


export class Write {


    public writeMyList(inputText:string): void {
        
        let listFromFile: string = fsync.readFileSync(path, 'utf-8');
        let listInArray: string[] = listFromFile.split('\n');

        try{
            if(listFromFile.length === 0){
                fsync.writeFileSync(path,`1 - [ ] ${inputText}`);
            } else {
                fsync.writeFileSync(path,`\n${listInArray.length+1} - [ ] ${inputText}`, {flag: 'a'});
            };
            
        } catch{
            console.log(`OOps something went wrong! Unable to write file: list.txt! Check if it is exist!`);
         };   
    };
};