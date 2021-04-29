'use strict';

const fsync = require('fs');
const path: string = 'list.txt';

export class Remove {
    
    public removeAnItem(stringInput: string): void {
        let input: number = parseInt(stringInput);

        try {
            let listFromFile: string = fsync.readFileSync(path, 'utf-8');
            let listInArray: string[] = listFromFile.split('\n');
            let removedItem: string = listInArray[input-1];

            listInArray.splice(input-1,1);

            for(let i = 0; i < listInArray.length; i++){
                if(i === 0){
                    fsync.writeFileSync(path, listInArray[i]);
                } else {
                    fsync.writeFileSync(path, `\n${listInArray[i]}`, {flag: 'a'});
                }; 
            }; 
            console.log(`You just deleted '${removedItem}' from your list`);

        } catch(error) {

            console.log('Something is wrong here!!!');
        };
    };
};

/* let myRemove: Remove = new Remove;
myRemove.removeAnItem('1'); */