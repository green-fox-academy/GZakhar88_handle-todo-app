'use strict';

const fsync = require('fs');
const path: string = 'list.txt';

export class Remove {
    
    public removeAnItem(input: number){
    
        try {
            let listFromFile = fsync.readFileSync(path, 'utf-8');
            let listInArray: string[] = listFromFile.split('\n');
            listInArray.splice(input,1);
            console.log(listInArray);
            for(let i = 0; i < listInArray.length; i++){
                if(i === 0){
                    fsync.writeFileSync(path, listInArray[i]);
                } else {
                    fsync.writeFileSync(path, `\n${listInArray[i]}`, {flag: 'a'});
                }
                
            }; 
        } catch(error) {
            console.log('Something is wrong here!!!');
        };
    };
};

let myRemove: Remove = new Remove;
myRemove.removeAnItem(2);