'use strict';

const fsync = require('fs');
const path: string = 'list.txt';


export class Write {

    public writeMyList(inputText:string): void {
        try{
            fsync.writeFileSync(path,`\n${inputText}`, {flag: 'a'});
        } catch{
            console.log(`OOps something went wrong! Unable to write file: list.txt! Check if it is exist!`);
         };   
    };
};


/* let myWrite: Write = new Write();
myWrite.writeMyList('Otodil Sor'); */