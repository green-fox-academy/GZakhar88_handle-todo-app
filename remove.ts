'use strict';

const fsync = require('fs');
const path: string = 'list.txt';

export class Remove {
    
    public removeAnItem(stringInput: string): void {
        
        let parsedInput: number = parseInt(stringInput);

        try {
            let listFromFile: string = fsync.readFileSync(path, 'utf-8');
            let listInArray: string[] = listFromFile.split('\n');

            if(isNaN(parsedInput)){
                console.log('\x1b[31m','\x1b[43m','Unable to remove: index is not a number');
            }else if (listInArray.length < parsedInput) {
                console.log('\x1b[31m','\x1b[43m','Unable to remove: index is out of bound');
            } else {

                let removedItem: string = listInArray[parsedInput-1];
                listInArray.splice(parsedInput-1,1);

                for(let i = 0; i < listInArray.length; i++){
                    if(i === 0){
                        fsync.writeFileSync(path, listInArray[i]);
                    } else {
                        fsync.writeFileSync(path, `\n${listInArray[i]}`, {flag: 'a'});
                    };
                };
                console.log(`You just deleted '${removedItem}' from your list`);
            };
        } catch(error) {
            console.log('Something is wrong here!!!');
        };
    };
};