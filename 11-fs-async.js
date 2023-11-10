// Async approach

const {readFile,writeFile} = require('fs');

console.log('Start');

readFile('./content/first.txt','utf-8',(err,result) => {
    if(err){
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
    readFile('./content/subfolder/test.txt','utf-8',(err,result) =>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result : ${first},${second}`,
        (err,res) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
            console.log('DOne with this task!');
        })
    });
});

console.log('starting the next task');