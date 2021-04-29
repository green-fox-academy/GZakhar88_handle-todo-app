'use strict';

const fsync = require('fs');
const path: string = 'list.txt';


export class Write {

    public writeMyList(inputText:string): void {
        let listFromFile: string = fsync.readFileSync(path, 'utf-8');

        try{
            if(listFromFile.length === 0){
                fsync.writeFileSync(path,inputText);
            } else {
                fsync.writeFileSync(path,`\n${inputText}`, {flag: 'a'});
            };
            
        } catch{
            console.log(`OOps something went wrong! Unable to write file: list.txt! Check if it is exist!`);
         };   
    };
};


/* let myWrite: Write = new Write();
myWrite.writeMyList('Otodil Sor'); */